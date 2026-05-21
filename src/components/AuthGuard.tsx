import * as React from 'react'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

interface AdminUser {
  email: string
  name: string
  picture?: string
}

interface AuthGuardProps {
  children: React.ReactNode
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null | undefined>(undefined)

  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((res) => {
        if (res.ok) return res.json()
        return null
      })
      .then((data) => setUser(data))
      .catch(() => setUser(null))
  }, [])

  if (user === undefined) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />
  }

  return <>{children}</>
}

export function useAdminUser() {
  const [user, setUser] = useState<AdminUser | null>(null)

  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((res) => (res.ok ? res.json() : null))
      .then(setUser)
      .catch(() => setUser(null))
  }, [])

  return user
}
