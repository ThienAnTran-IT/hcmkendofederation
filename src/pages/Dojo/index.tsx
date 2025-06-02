import * as React from 'react'
import { NavBar } from '../../components/Navbar'
import { Tabs } from '../../constants/constants'
import { Footer } from '../../components/Footer'
import { KendoClubsList } from '../Home/KendoClubsList'

export const Dojo: React.FC<{uid?: string}> = ({uid}) => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden">  
      <div className="layout-container flex h-full grow flex-col">
        <div className='bg-white text-[#0d111c]'>
          <NavBar
            selectedTab={Tabs[1]}
            className='bg-[#47619e] text-white'
          />
        </div>
        

        <div className="px-40 flex flex-1 justify-center py-5">
          <KendoClubsList />
        </div>
        
        <Footer />
      </div>
    </div>
  )
}