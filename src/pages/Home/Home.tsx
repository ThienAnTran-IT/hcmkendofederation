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
import {useLanguage} from '../../components/LanguageContext';

export const Home = () => {
  const {language} = useLanguage();
  console.log("Current language in Home:", language);
  return (
    <div>
      <div className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden">  
        <div className="layout-container flex h-full grow flex-col">
          {/* Hero Section with Background */}
          <div 
              className="relative bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%), url(${image10})`,
              }}
            >
            <NavBar className='text-white bg-black bg-opacity-50' selectedTab={Tabs[0]} />
            <HomeHeader />
          </div>
          
          <div className="flex flex-1 justify-center py-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
              <div className="layout-content-container flex flex-col w-full max-w-[980px] flex-1">
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