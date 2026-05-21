import * as React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AdminLayout } from './AdminLayout'

export const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({ news: 0, clubs: 0, gallery: 0 })

  useEffect(() => {
    Promise.all([
      fetch('/api/news', { credentials: 'include' }).then((r) => r.json()),
      fetch('/api/clubs', { credentials: 'include' }).then((r) => r.json()),
      fetch('/api/gallery', { credentials: 'include' }).then((r) => r.json()),
    ]).then(([news, clubs, gallery]) => {
      setStats({ news: news.length, clubs: clubs.length, gallery: gallery.length })
    })
  }, [])

  const cards = [
    { label: 'News Articles', count: stats.news, to: '/admin/news', icon: '📰' },
    { label: 'Member Clubs', count: stats.clubs, to: '/admin/clubs', icon: '🏯' },
    { label: 'Gallery Images', count: stats.gallery, to: '/admin/gallery', icon: '🖼️' },
  ]

  return (
    <AdminLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-[#0d111c] mb-6">Dashboard</h1>
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card) => (
            <Link
              key={card.label}
              to={card.to}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-[#47619e] transition-colors"
            >
              <div className="text-3xl mb-2">{card.icon}</div>
              <div className="text-3xl font-bold text-[#0d111c]">{card.count}</div>
              <div className="text-sm text-gray-500 mt-1">{card.label}</div>
            </Link>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-[#0d111c] mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/admin/news/new" className="btn-primary">
              + New Article
            </Link>
            <Link to="/admin/clubs/new" className="btn-secondary">
              + New Club
            </Link>
            <Link to="/admin/gallery" className="btn-secondary">
              Upload to Gallery
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
