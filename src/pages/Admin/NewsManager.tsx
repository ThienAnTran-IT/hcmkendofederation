import * as React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AdminLayout } from './AdminLayout'

interface NewsSummary {
  uid: string
  title: string
  image: string
  link?: string
  status: 'Published' | 'Draft'
}

export const NewsManager: React.FC = () => {
  const [news, setNews] = useState<NewsSummary[]>([])
  const [loading, setLoading] = useState(true)

  const fetchNews = () => {
    fetch('/api/news', { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => {
        setNews(data)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const handleDelete = async (uid: string) => {
    if (!window.confirm('Delete this article?')) return
    await fetch(`/api/news/${uid}`, { method: 'DELETE', credentials: 'include' })
    fetchNews()
  }

  const handleToggleStatus = async (item: NewsSummary) => {
    const newStatus = item.status === 'Published' ? 'Draft' : 'Published'
    await fetch(`/api/news/${item.uid}/status`, {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    })
    fetchNews()
  }

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-[#0d111c]">News</h1>
          <Link
            to="/admin/news/new"
            className="bg-[#47619e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#3a5089] transition-colors"
          >
            + New Article
          </Link>
        </div>

        {loading ? (
          <div className="text-gray-400">Loading...</div>
        ) : (
          <div className="space-y-3">
            {news.map((item) => (
              <div
                key={item.uid}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-4"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt=""
                    className="w-16 h-12 object-cover rounded-lg flex-shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        item.status === 'Published'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {item.status ?? 'Draft'}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-[#0d111c] whitespace-pre-line line-clamp-2">
                    {item.title}
                  </div>
                  {item.link && (
                    <div className="text-xs text-gray-400 mt-0.5 truncate">{item.link}</div>
                  )}
                </div>
                <div className="flex gap-3 flex-shrink-0 items-center">
                  <button
                    onClick={() => handleToggleStatus(item)}
                    className={`text-sm hover:underline ${
                      item.status === 'Published' ? 'text-amber-600' : 'text-green-600'
                    }`}
                  >
                    {item.status === 'Published' ? 'Unpublish' : 'Publish'}
                  </button>
                  <Link
                    to={`/admin/news/${item.uid}`}
                    className="text-sm text-[#47619e] hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.uid)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
