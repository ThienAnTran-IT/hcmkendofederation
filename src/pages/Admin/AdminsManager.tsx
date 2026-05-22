import * as React from 'react'
import { useEffect, useState } from 'react'
import { AdminLayout } from './AdminLayout'

export const AdminsManager: React.FC = () => {
  const [admins, setAdmins] = useState<string[]>([])
  const [newEmail, setNewEmail] = useState('')
  const [loading, setLoading] = useState(true)
  const [adding, setAdding] = useState(false)
  const [error, setError] = useState('')

  const fetchAdmins = () => {
    fetch('/api/admins', { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => {
        setAdmins(data)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchAdmins()
  }, [])

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newEmail) return
    setAdding(true)
    setError('')

    const res = await fetch('/api/admins', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: newEmail }),
    })

    if (res.ok) {
      setNewEmail('')
      fetchAdmins()
    } else {
      const data = await res.json()
      setError(data.error || 'Failed to add')
    }
    setAdding(false)
  }

  const handleRemove = async (email: string) => {
    if (!window.confirm(`Remove ${email} from admins?`)) return
    const res = await fetch(`/api/admins/${encodeURIComponent(email)}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    if (res.ok) {
      fetchAdmins()
    } else {
      const data = await res.json()
      alert(data.error || 'Failed to remove')
    }
  }

  return (
    <AdminLayout>
      <div className="p-8 max-w-xl">
        <h1 className="text-2xl font-bold text-[#0d111c] mb-6">Admin Access</h1>

        <form onSubmit={handleAdd} className="flex gap-2 mb-6">
          <input
            type="email"
            placeholder="Add Gmail address..."
            value={newEmail}
            onChange={(e) => { setNewEmail(e.target.value); setError('') }}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#47619e]"
          />
          <button
            type="submit"
            disabled={adding || !newEmail}
            className="bg-[#47619e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#3a5089] disabled:opacity-50 transition-colors"
          >
            {adding ? 'Adding...' : 'Add'}
          </button>
        </form>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        {loading ? (
          <div className="text-gray-400">Loading...</div>
        ) : (
          <div className="space-y-2">
            {admins.map((email) => (
              <div
                key={email}
                className="bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 flex items-center justify-between"
              >
                <span className="text-sm text-[#0d111c]">{email}</span>
                <button
                  onClick={() => handleRemove(email)}
                  className="text-xs text-red-400 hover:text-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <p className="text-xs text-gray-400 mt-4">
          The seed admin email (from server .env) cannot be removed.
        </p>
      </div>
    </AdminLayout>
  )
}
