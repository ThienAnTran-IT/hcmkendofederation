import * as React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AdminLayout } from './AdminLayout'

interface Club {
  id: string
  name: { vi: string; en: string }
  location: { vi: string; en: string }
  image: string
  url?: string
}

export const ClubsManager: React.FC = () => {
  const [clubs, setClubs] = useState<Club[]>([])
  const [loading, setLoading] = useState(true)

  const fetchClubs = () => {
    fetch('/api/clubs', { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => {
        setClubs(data)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchClubs()
  }, [])

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this club?')) return
    await fetch(`/api/clubs/${id}`, { method: 'DELETE', credentials: 'include' })
    fetchClubs()
  }

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-[#0d111c]">Clubs</h1>
          <Link
            to="/admin/clubs/new"
            className="bg-[#47619e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#3a5089] transition-colors"
          >
            + New Club
          </Link>
        </div>

        {loading ? (
          <div className="text-gray-400">Loading...</div>
        ) : (
          <div className="space-y-3">
            {clubs.map((club) => (
              <div
                key={club.id}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-4"
              >
                {club.image && (
                  <img
                    src={club.image}
                    alt=""
                    className="w-12 h-12 object-contain rounded flex-shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-[#0d111c]">{club.name.en}</div>
                  <div className="text-xs text-gray-400 mt-0.5 truncate">{club.location.en}</div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Link
                    to={`/admin/clubs/${club.id}`}
                    className="text-sm text-[#47619e] hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(club.id)}
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
