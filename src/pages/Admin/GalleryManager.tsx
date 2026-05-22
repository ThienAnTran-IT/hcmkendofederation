import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import { AdminLayout } from './AdminLayout'

interface GalleryItem {
  filename: string
  url: string
}

export const GalleryManager: React.FC = () => {
  const [images, setImages] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const fetchGallery = () => {
    fetch('/api/gallery', { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => {
        setImages(data)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchGallery()
  }, [])

  const handleUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return
    setUploading(true)

    for (const file of Array.from(files)) {
      const formData = new FormData()
      formData.append('image', file)
      await fetch('/api/gallery/upload', { method: 'POST', credentials: 'include', body: formData })
    }

    setUploading(false)
    fetchGallery()
  }

  const handleDelete = async (filename: string) => {
    if (!window.confirm('Delete this image?')) return
    await fetch(`/api/gallery/${encodeURIComponent(filename)}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    fetchGallery()
  }

  const handleDragStart = (e: React.DragEvent, filename: string) => {
    e.dataTransfer.setData('text/plain', filename)
  }

  const handleDrop = async (e: React.DragEvent, targetFilename: string) => {
    e.preventDefault()
    setDragOver(false)
    const srcFilename = e.dataTransfer.getData('text/plain')
    if (!srcFilename || srcFilename === targetFilename) return

    const order = images.map((img) => img.filename)
    const srcIdx = order.indexOf(srcFilename)
    const tgtIdx = order.indexOf(targetFilename)
    order.splice(srcIdx, 1)
    order.splice(tgtIdx, 0, srcFilename)

    await fetch('/api/gallery/reorder', {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ order }),
    })
    fetchGallery()
  }

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-[#0d111c]">Gallery</h1>
          <div className="flex gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="bg-[#47619e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#3a5089] disabled:opacity-50 transition-colors"
            >
              {uploading ? 'Uploading...' : '+ Upload Images'}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => handleUpload(e.target.files)}
            />
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-4">Drag images to reorder. Click × to delete.</p>

        {loading ? (
          <div className="text-gray-400">Loading...</div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {images.map((img) => (
              <div
                key={img.filename}
                draggable
                onDragStart={(e) => handleDragStart(e, img.filename)}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => handleDrop(e, img.filename)}
                className={`relative group rounded-xl overflow-hidden border-2 cursor-grab ${
                  dragOver ? 'border-[#47619e]' : 'border-transparent'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.filename}
                  className="w-full h-32 object-cover"
                />
                <button
                  onClick={() => handleDelete(img.filename)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  ×
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity truncate">
                  {img.filename}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
