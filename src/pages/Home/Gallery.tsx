import * as React from 'react'
import { NavBar } from '../../components/Navbar'
import { HomeHeader } from './HomeHeader'
import { OurStory } from './OurStory'
import { WhyLearnKendo } from './WhyKendo'
import { KendoClubsList } from './KendoClubsList'
import { LatestNewsSection } from './LatestNewsSection'

export const Gallery = () => (
  <div>
    <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Gallery</h2>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      <div className="flex flex-col gap-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/39eb523d-6f61-4871-8668-e2dbbc954f0d.png")' }}
          // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/39eb523d-6f61-4871-8668-e2dbbc954f0d.png");'
        ></div>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/70212279-2d3b-4a87-a204-3dd92c31ba90.png")' }}
          // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/70212279-2d3b-4a87-a204-3dd92c31ba90.png");'
        ></div>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/4dd4032c-ff2f-49f8-8dc4-bb3b533668d1.png")' }}
          // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/4dd4032c-ff2f-49f8-8dc4-bb3b533668d1.png");'
        ></div>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/54c4a61a-5c3c-44e9-9c08-7e8ea3d9c760.png")' }}
          // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/54c4a61a-5c3c-44e9-9c08-7e8ea3d9c760.png");'
        ></div>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/88b155bd-779f-4e84-aba7-ce138a55cc3a.png")' }}
          // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/88b155bd-779f-4e84-aba7-ce138a55cc3a.png");'
        ></div>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/fc0628c9-ad70-444e-bd62-8cf6a3a4506b.png")' }}
          // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/fc0628c9-ad70-444e-bd62-8cf6a3a4506b.png");'
        ></div>
      </div>
    </div>
  </div>
)