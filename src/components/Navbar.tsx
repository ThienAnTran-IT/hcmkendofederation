import * as React from 'react'
import HcmKendoLogoWithText from '../assets/images/HcmKendoLogoWithText_white.png'
import '../assets/styles/NavBar.css'
import { Tabs } from '../constants/constants'

export interface TabProps {
  name: string
  label: string
  path: string
}

export const NavBar: React.FC<{selectedTab: TabProps, className?: string, logo?: string}> = ({selectedTab, className, logo}) => {
  const [currentTab, setCurrentTab] = React.useState<TabProps>(selectedTab)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  
  return (
    <div className={className ? `${className}` : 'bg-[#0d111c] text-white'}>
      <header className="flex items-center justify-between whitespace-nowrap h-20 px-4 md:px-10">
        {/* Logo */}
        <div className="flex items-center gap-4 text-[#0d111c]">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo ?? HcmKendoLogoWithText}
              alt="HCM Kendo Federation Logo"
              width={60}
              height={60}
              className="md:w-20 md:h-20"
              loading="lazy"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-0 h-full">
          <div className="flex items-stretch h-full">
            {Tabs.map((tab) => (
              <a
                key={tab.name}
                className={`
                  flex items-center px-4 text-base font-medium leading-normal transition-colors duration-200
                  hover:bg-white/10
                  ${currentTab.name === tab.name ? 'selected-tab' : ''}
                `}
                href={tab.path}
                onClick={() => setCurrentTab(tab)}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0d111c] border-t border-gray-700">
          <div className="flex flex-col">
            {Tabs.map((tab) => (
              <a
                key={tab.name}
                className={`
                  block px-6 py-4 text-base font-medium leading-normal transition-colors duration-200
                  hover:bg-white/10 border-b border-gray-700 last:border-b-0
                  ${currentTab.name === tab.name ? 'selected-tab-mobile' : ''}
                `}
                href={tab.path}
                onClick={() => {
                  setCurrentTab(tab)
                  setIsMobileMenuOpen(false)
                }}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}