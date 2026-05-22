import * as React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAdminUser } from '../../components/AuthGuard'

interface NavItemProps {
  to: string
  label: string
  icon: string
}

const NavItem: React.FC<NavItemProps> = ({ to, label, icon }) => (
  <NavLink
    to={to}
    end={to === '/admin'}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
        isActive
          ? 'bg-[#47619e] text-white'
          : 'text-gray-600 hover:bg-gray-100'
      }`
    }
  >
    <span className="text-base">{icon}</span>
    {label}
  </NavLink>
)

export const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useAdminUser()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
    navigate('/admin/login')
  }

  return (
    <div className="flex min-h-screen bg-[#f8f9fc]">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
        <div className="px-4 py-5 border-b border-gray-100">
          <div className="font-bold text-[#0d111c] text-sm">HCM Kendo Admin</div>
          {user && <div className="text-xs text-gray-400 mt-0.5 truncate">{user.email}</div>}
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1">
          <NavItem to="/admin" label="Dashboard" icon="📊" />
          <NavItem to="/admin/news" label="News" icon="📰" />
          <NavItem to="/admin/clubs" label="Clubs" icon="🏯" />
          <NavItem to="/admin/content" label="Content" icon="✏️" />
          <NavItem to="/admin/gallery" label="Gallery" icon="🖼️" />
          <NavItem to="/admin/admins" label="Admins" icon="👤" />
        </nav>

        <div className="px-4 py-4 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="w-full text-left text-sm text-gray-500 hover:text-red-500 transition-colors"
          >
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
