import * as React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AdminLayout } from './AdminLayout'

interface Club {
  id: string
  name: { vi: string; en: string }
  location: { vi: string; en: string }
  image: string
  url?: string
}

export const ClubEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const isNew = id === 'new'
  const navigate = useNavigate()

  const [nameVi, setNameVi] = useState('')
  const [nameEn, setNameEn] = useState('')
  const [locationVi, setLocationVi] = useState('')
  const [locationEn, setLocationEn] = useState('')
  const [url, setUrl] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState('')
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(!isNew)

  useEffect(() => {
    if (!isNew && id) {
      fetch('/api/clubs', { credentials: 'include' })
        .then((r) => r.json())
        .then((clubs: Club[]) => {
          const club = clubs.find((c) => c.id === id)
          if (club) {
            setNameVi(club.name.vi)
            setNameEn(club.name.en)
            setLocationVi(club.location.vi)
            setLocationEn(club.location.en)
            setUrl(club.url || '')
            setImagePreview(club.image || '')
          }
          setLoading(false)
        })
    }
  }, [id, isNew])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    const formData = new FormData()
    formData.append('name', JSON.stringify({ vi: nameVi, en: nameEn }))
    formData.append('location', JSON.stringify({ vi: locationVi, en: locationEn }))
    formData.append('url', url)
    if (imageFile) formData.append('image', imageFile)
    else if (imagePreview) formData.append('imageUrl', imagePreview)

    const apiUrl = isNew ? '/api/clubs' : `/api/clubs/${id}`
    const method = isNew ? 'POST' : 'PUT'

    const res = await fetch(apiUrl, { method, credentials: 'include', body: formData })
    if (res.ok) {
      navigate('/admin/clubs')
    } else {
      alert('Failed to save')
    }
    setSaving(false)
  }

  if (loading) return <AdminLayout><div className="p-8 text-gray-400">Loading...</div></AdminLayout>

  return (
    <AdminLayout>
      <div className="p-8 max-w-2xl">
        <h1 className="text-2xl font-bold text-[#0d111c] mb-6">
          {isNew ? 'New Club' : 'Edit Club'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name (Vietnamese)</label>
              <input
                type="text"
                value={nameVi}
                onChange={(e) => setNameVi(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#47619e]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name (English)</label>
              <input
                type="text"
                value={nameEn}
                onChange={(e) => setNameEn(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#47619e]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location (Vietnamese)</label>
              <textarea
                value={locationVi}
                onChange={(e) => setLocationVi(e.target.value)}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#47619e]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location (English)</label>
              <textarea
                value={locationEn}
                onChange={(e) => setLocationEn(e.target.value)}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#47619e]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Website / Social URL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#47619e]"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Logo / Image</label>
            {imagePreview && (
              <img src={imagePreview} alt="preview" className="h-20 w-20 object-contain mb-2" />
            )}
            <input type="file" accept="image/*,.svg" onChange={handleImageChange} className="text-sm" />
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
              onClick={() => navigate('/admin/clubs')}
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
