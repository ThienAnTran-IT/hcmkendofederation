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
      <header className="flex items-center justify-between whitespace-nowrap px-10 py-3">
        <div className="flex items-center gap-4 text-[#0d111c]">
          <img
            src={logo ?? HcmKendoLogoWithText}
            alt="HCM Kendo Federation Logo"
            width={80}
            height={80}
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            {
              Tabs.map((tab) => (
                <a
                  key={tab.name}
                  className={`text-sm font-medium leading-normal ${currentTab.name === tab.name ? 'selected-tab' : ''}`}
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