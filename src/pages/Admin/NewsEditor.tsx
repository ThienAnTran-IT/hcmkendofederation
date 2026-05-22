import * as React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AdminLayout } from './AdminLayout'
import { MarkdownEditor } from '../../components/MarkdownEditor'

const MAX_ADDITIONAL_IMAGES = 2

interface AttachmentLink {
  name: string
  url: string
}

interface AdditionalImage {
  file?: File
  preview: string
}

interface NewsDetail {
  uid: string
  title: string
  content: string
  date: string
  image?: string
  additionalImages?: string[]
  attachmentLinks?: AttachmentLink[]
}

export const NewsEditor: React.FC = () => {
  const { uid } = useParams<{ uid: string }>()
  const isNew = uid === 'new'
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }))
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')
  const [additionalImages, setAdditionalImages] = useState<AdditionalImage[]>([])
  const [attachmentLinks, setAttachmentLinks] = useState<AttachmentLink[]>([])
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(!isNew)

  useEffect(() => {
    if (!isNew && uid) {
      fetch(`/api/news/${uid}`, { credentials: 'include' })
        .then((r) => r.json())
        .then((data: NewsDetail) => {
          setTitle(data.title)
          setContent(data.content)
          setDate(data.date)
          setImagePreview(data.image || '')
          setAdditionalImages((data.additionalImages || []).map((url) => ({ preview: url })))
          setAttachmentLinks(data.attachmentLinks || [])
          setLoading(false)
        })
    }
  }, [uid, isNew])

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleAdditionalImageChange = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const updated = [...additionalImages]
    updated[idx] = { file, preview: URL.createObjectURL(file) }
    setAdditionalImages(updated)
  }

  const addAdditionalImage = () => {
    if (additionalImages.length < MAX_ADDITIONAL_IMAGES) {
      setAdditionalImages([...additionalImages, { preview: '' }])
    }
  }

  const removeAdditionalImage = (idx: number) => {
    setAdditionalImages(additionalImages.filter((_, i) => i !== idx))
  }

  const addAttachment = () => {
    setAttachmentLinks([...attachmentLinks, { name: '', url: '' }])
  }

  const updateAttachment = (idx: number, field: keyof AttachmentLink, value: string) => {
    const updated = [...attachmentLinks]
    updated[idx][field] = value
    setAttachmentLinks(updated)
  }

  const removeAttachment = (idx: number) => {
    setAttachmentLinks(attachmentLinks.filter((_, i) => i !== idx))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    formData.append('date', date)
    formData.append('attachmentLinks', JSON.stringify(attachmentLinks.filter((a) => a.url)))

    if (imageFile) formData.append('image', imageFile)
    else if (imagePreview) formData.append('imageUrl', imagePreview)

    // Existing additional images (no new file = keep the URL)
    const existingAdditionalImages = additionalImages
      .filter((img) => !img.file && img.preview)
      .map((img) => img.preview)
    formData.append('existingAdditionalImages', JSON.stringify(existingAdditionalImages))

    // New additional image files
    additionalImages.forEach((img) => {
      if (img.file) formData.append('additionalImages', img.file)
    })

    const url = isNew ? '/api/news' : `/api/news/${uid}`
    const method = isNew ? 'POST' : 'PUT'

    const res = await fetch(url, { method, credentials: 'include', body: formData })
    if (res.ok) {
      navigate('/admin/news')
    } else {
      alert('Failed to save')
    }
    setSaving(false)
  }

  if (loading) return <AdminLayout><div className="p-8 text-gray-400">Loading...</div></AdminLayout>

  return (
    <AdminLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-[#0d111c] mb-6">
          {isNew ? 'New Article' : 'Edit Article'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <textarea
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              rows={2}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#47619e]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#47619e]"
              placeholder="e.g. June 1, 2025"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <MarkdownEditor value={content} onChange={setContent} />
          </div>

          {/* Cover image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
            {imagePreview && (
              <img src={imagePreview} alt="cover" className="h-32 object-cover rounded-lg mb-2" />
            )}
            <input type="file" accept="image/*" onChange={handleCoverChange} className="text-sm" />
          </div>

          {/* Additional images */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Additional Images <span className="text-gray-400 font-normal">(shown at end of article, max {MAX_ADDITIONAL_IMAGES})</span>
              </label>
              {additionalImages.length < MAX_ADDITIONAL_IMAGES && (
                <button type="button" onClick={addAdditionalImage} className="text-xs text-[#47619e] hover:underline">
                  + Add image
                </button>
              )}
            </div>
            <div className="space-y-3">
              {additionalImages.map((img, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                  {img.preview && (
                    <img src={img.preview} alt={`additional-${idx}`} className="h-20 w-28 object-cover rounded-lg flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleAdditionalImageChange(idx, e)}
                      className="text-sm"
                    />
                    {!img.preview && (
                      <p className="text-xs text-gray-400 mt-1">No image selected</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeAdditionalImage(idx)}
                    className="text-red-400 hover:text-red-600 text-sm px-2 flex-shrink-0"
                  >
                    ✕
                  </button>
                </div>
              ))}
              {additionalImages.length === 0 && (
                <p className="text-sm text-gray-400">No additional images.</p>
              )}
            </div>
          </div>

          {/* Attachment links */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Attachment Links</label>
              <button type="button" onClick={addAttachment} className="text-xs text-[#47619e] hover:underline">
                + Add
              </button>
            </div>
            {attachmentLinks.map((link, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Name"
                  value={link.name}
                  onChange={(e) => updateAttachment(idx, 'name', e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />
                <input
                  type="url"
                  placeholder="URL"
                  value={link.url}
                  onChange={(e) => updateAttachment(idx, 'url', e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />
                <button
                  type="button"
                  onClick={() => removeAttachment(idx)}
                  className="text-red-400 hover:text-red-600 text-sm px-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="bg-[#47619e] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#3a5089] disabled:opacity-50 transition-colors"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/news')}
              className="border border-gray-300 text-gray-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}
