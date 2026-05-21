import * as React from 'react'
import '../../assets/styles/Gallery.css'
import { useLanguage } from '../../components/LanguageContext'
import { useGallery } from '../../hooks/useGallery'

const header = {
  vi: 'Thư viện ảnh',
  en: 'Photo Gallery',
}

export const Gallery = () => {
  const { language } = useLanguage()
  const { images, loading } = useGallery()

  if (loading) {
    return (
      <div>
        <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          {header[language]}
        </h2>
        <div className="px-4 text-gray-400 text-sm py-4">Loading gallery...</div>
      </div>
    )
  }

  // Distribute images across 4 columns
  const columns: typeof images[] = [[], [], [], []]
  images.forEach((img, i) => columns[i % 4].push(img))

  return (
    <div>
      <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        {header[language]}
      </h2>
      <div className="gallery-row">
        {columns.map((col, ci) => (
          <div key={ci} className="gallery-column">
            {col.map((img) => (
              <img key={img.filename} src={img.url} style={{ width: '100%' }} alt={img.filename} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
