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
  
  return (
    <div className={className ? `${className}` : 'bg-[#0d111c] text-white'}>
      <header className="flex items-center justify-between whitespace-nowrap h-20">
        <div className="flex items-center gap-4 text-[#0d111c] px-10 py-3">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo ?? HcmKendoLogoWithText}
              alt="HCM Kendo Federation Logo"
              width={80}
              height={80}
              loading="lazy"
            />
          </a>
          
        </div>
        <div className="flex flex-1 justify-end gap-0 h-full">
          <div className="flex items-stretch h-full">
            {
              Tabs.map((tab) => (
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
              ))
            }
          </div>
        </div>
      </header>
    </div>

  )
}