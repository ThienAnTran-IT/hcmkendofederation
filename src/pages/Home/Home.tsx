import * as React from 'react'
import { NavBar } from '../../components/Navbar'
import { HomeHeader } from './HomeHeader'
import { OurStory } from './OurStory'
import { WhyLearnKendo } from './WhyKendo'
import { KendoClubsList } from './KendoClubsList'
import { LatestNewsSection } from './LatestNewsSection'
import { Gallery } from './Gallery'
import { ExecutiveCommiteeMembers } from './ExecutiveCommiteeMembers'
import { HomeQA } from './HomeQA'
import image10 from '../../assets/images/homeGallery/image10.jpg'
import { Tabs } from '../../constants/constants'
import { Footer } from '../../components/Footer'

export const Home = () => {
  return (
    <div>
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden">  
      <div className="layout-container flex h-full grow flex-col">
        <div style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%), url(${image10})`,
          backgroundSize: 'cover',
        }}>
          <NavBar className='text-white bg-black bg-opacity-50' selectedTab={Tabs[0]} />
          <HomeHeader />
        </div>
        

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[980px] flex-1">
            <OurStory />
            <WhyLearnKendo />
            
            
            <KendoClubsList />
            <LatestNewsSection />
            <Gallery />
            <ExecutiveCommiteeMembers />
            <HomeQA />
          </div>
        </div>

        <Footer />
      </div>
    </div>

    </div>
  )
}