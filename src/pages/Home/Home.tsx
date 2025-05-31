import * as React from 'react'
import { NavBar } from '../../components/Navbar'

export const Home = () => {

  const renderHeaderSection = () => (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/c2f7de3a-4051-4929-9246-a01aa76e8492.png")'
          }}
          // styles={"background-image": 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/c2f7de3a-4051-4929-9246-a01aa76e8492.png")'}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1
              className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
            >
              Welcome to the HCM Kendo Federation
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              The HCM Kendo Federation (HKF) is a non-profit organization that aims to promote Kendo and Japanese culture in Vietnam. We are a part of the Vietnam Kendo
              Association (VKA), and the International Kendo Federation (FIK).
            </h2>
          </div>
          <div className="flex-wrap gap-3 flex justify-center">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0539b3] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
            >
              <span className="truncate">Find a Club</span>
            </button>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e6eaf4] text-[#0d111c] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
            >
              <span className="truncate">Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderOurStory = () => (
    <div>
      <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Story</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/7f9faafc-6891-405f-9320-c1fdb3969978.png");'
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/7f9faafc-6891-405f-9320-c1fdb3969978.png")' }}
          ></div>
        </div>
      </div>
      <p className="text-[#0d111c] text-base font-normal leading-normal pb-3 pt-1 px-4">
        The HCM Kendo Federation (HKF) was founded in 2012 by a group of passionate Kendo practitioners in Ho Chi Minh City. Over the past decade, we have been dedicated to
        promoting and developing Kendo, Japanese martial arts, and culture in Vietnam. Our mission is to nurture the spirit of Kendo, to foster friendship and mutual
        understanding, and to contribute to the development of the local community.
      </p>
    </div>
  )

  const renderWhyKendo = () => (
    <div>
      <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why Learn Kendo?</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-1 gap-3 rounded-lg border border-[#ced6e9] bg-[#f8f9fc] p-4 flex-col">
          <div className="text-[#0d111c]" data-icon="Users" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0d111c] text-base font-bold leading-tight">Physical Fitness</h2>
            <p className="text-[#47619e] text-sm font-normal leading-normal">Develop strength, agility, and endurance through rigorous training</p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#ced6e9] bg-[#f8f9fc] p-4 flex-col">
          <div className="text-[#0d111c]" data-icon="UsersThree" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0d111c] text-base font-bold leading-tight">Mental Discipline</h2>
            <p className="text-[#47619e] text-sm font-normal leading-normal">Cultivate focus, resilience, and self-control as you practice Kendo</p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#ced6e9] bg-[#f8f9fc] p-4 flex-col">
          <div className="text-[#0d111c]" data-icon="UsersThree" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0d111c] text-base font-bold leading-tight">Community</h2>
            <p className="text-[#47619e] text-sm font-normal leading-normal">Connect with like-minded individuals, build friendships, and learn from experienced sensei</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderClubsList = () => (
    <div>
      <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Clubs</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/4a7d4e42-c6e2-4667-a282-1890d4055d7b.png");'
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/4a7d4e42-c6e2-4667-a282-1890d4055d7b.png")' }}
          ></div>
          <div>
            <p className="text-[#0d111c] text-base font-medium leading-normal">Vovinam Kendo Club</p>
            <p className="text-[#47619e] text-sm font-normal leading-normal">District 10, HCMC</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/2ffc874d-0835-4563-b233-3bb5cfcac1f1.png");'
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/2ffc874d-0835-4563-b233-3bb5cfcac1f1.png")' }}
          ></div>
          <div>
            <p className="text-[#0d111c] text-base font-medium leading-normal">HCM Kendo Club</p>
            <p className="text-[#47619e] text-sm font-normal leading-normal">District 3, HCMC</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/3a61e37a-902f-4e99-aff2-1917305c5f0a.png")' }}
            // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/3a61e37a-902f-4e99-aff2-1917305c5f0a.png");'
          ></div>
          <div>
            <p className="text-[#0d111c] text-base font-medium leading-normal">Gia Dinh Kendo Club</p>
            <p className="text-[#47619e] text-sm font-normal leading-normal">Binh Thanh District, HCMC</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/e7b30116-0c82-4fcd-91d9-3402e1dff286.png")' }}
            // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/e7b30116-0c82-4fcd-91d9-3402e1dff286.png");'
          ></div>
          <div>
            <p className="text-[#0d111c] text-base font-medium leading-normal">Phu Nhuan Kendo Club</p>
            <p className="text-[#47619e] text-sm font-normal leading-normal">Phu Nhuan District, HCMC</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/54de63af-26e6-4701-b9ba-81c58481a855.png")' }}
            // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/54de63af-26e6-4701-b9ba-81c58481a855.png");'
          ></div>
          <div>
            <p className="text-[#0d111c] text-base font-medium leading-normal">Tan Binh Kendo Club</p>
            <p className="text-[#47619e] text-sm font-normal leading-normal">Tan Binh District, HCMC</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderLatestNews = () => (
    <div>
      <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Latest News</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/63edc027-361c-4e76-a5d6-d466de44b41b.png")' }}
            // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/63edc027-361c-4e76-a5d6-d466de44b41b.png");'
          ></div>
          <div>
            <p className="text-[#0d111c] text-base font-medium leading-normal">VKA National Championships 2022</p>
            <p className="text-[#47619e] text-sm font-normal leading-normal">July 23-24, 2022 | Phan Dinh Phung Sports Center, HCMC</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/1bce09c2-ca12-4a91-bf1b-59f8ab8edbd6.png")' }}
            // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/1bce09c2-ca12-4a91-bf1b-59f8ab8edbd6.png");'
          ></div>
          <div>
            <p className="text-[#0d111c] text-base font-medium leading-normal">Kendo Summer Camp 2022</p>
            <p className="text-[#47619e] text-sm font-normal leading-normal">August 6-7, 2022 | Tao Dan Park, HCMC</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/4f8b0c1d-2e3a-4c5b-9d6f-7f8c1d2e3a4b.png")' }}
            // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/fef222fa-deb7-4fb3-98ee-63f44a1c81f0.png");'
          ></div>
          <div>
            <p className="text-[#0d111c] text-base font-medium leading-normal">International Kendo Seminar 2022</p>
            <p className="text-[#47619e] text-sm font-normal leading-normal">September 10-11, 2022 | Le Van Tam Sports Center, HCMC</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderGallery = () => (
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

  const renderHeadMembersList = () => (
    <div>
      <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Meet Our Members</h2>
      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-xl border border-[#ced6e9] bg-[#f8f9fc]">
          <table className="flex-1">
            <thead>
              <tr className="bg-[#f8f9fc]">
                <th className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-120 px-4 py-3 text-left text-[#0d111c] w-[400px] text-sm font-medium leading-normal">Name</th>
                <th className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-240 px-4 py-3 text-left text-[#0d111c] w-[400px] text-sm font-medium leading-normal">Role</th>
                <th className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-360 px-4 py-3 text-left text-[#0d111c] w-[400px] text-sm font-medium leading-normal">Bio</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-t-[#ced6e9]">
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d111c] text-sm font-normal leading-normal">
                  Jane Smith
                </td>
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-240 h-[72px] px-4 py-2 w-[400px] text-[#47619e] text-sm font-normal leading-normal">
                  President
                </td>
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47619e] text-sm font-normal leading-normal">
                  Jane is the president of our federation. She has been practicing Kendo for 15 years.
                </td>
              </tr>
              <tr className="border-t border-t-[#ced6e9]">
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d111c] text-sm font-normal leading-normal">John Doe</td>
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-240 h-[72px] px-4 py-2 w-[400px] text-[#47619e] text-sm font-normal leading-normal">
                  Vice President
                </td>
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47619e] text-sm font-normal leading-normal">
                  John is the vice president. He is a dedicated Kendo practitioner and instructor.
                </td>
              </tr>
              <tr className="border-t border-t-[#ced6e9]">
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d111c] text-sm font-normal leading-normal">
                  Aiko Tanaka
                </td>
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-240 h-[72px] px-4 py-2 w-[400px] text-[#47619e] text-sm font-normal leading-normal">
                  Treasurer
                </td>
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47619e] text-sm font-normal leading-normal">
                  Aiko manages the federation's finances and has a passion for Japanese culture.
                </td>
              </tr>
              <tr className="border-t border-t-[#ced6e9]">
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d111c] text-sm font-normal leading-normal">
                  Yamato Sato
                </td>
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-240 h-[72px] px-4 py-2 w-[400px] text-[#47619e] text-sm font-normal leading-normal">
                  Secretary
                </td>
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47619e] text-sm font-normal leading-normal">
                  Yamato is the secretary. He ensures smooth communication and is a skilled Kendo practitioner.
                </td>
              </tr>
              <tr className="border-t border-t-[#ced6e9]">
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d111c] text-sm font-normal leading-normal">
                  Hanako Suzuki
                </td>
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-240 h-[72px] px-4 py-2 w-[400px] text-[#47619e] text-sm font-normal leading-normal">Member</td>
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47619e] text-sm font-normal leading-normal">
                  Hanako is a member of the federation and a dedicated Kendo practitioner.
                </td>
              </tr>
              <tr className="border-t border-t-[#ced6e9]">
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d111c] text-sm font-normal leading-normal">
                  Taro Watanabe
                </td>
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-240 h-[72px] px-4 py-2 w-[400px] text-[#47619e] text-sm font-normal leading-normal">Member</td>
                <td className="table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47619e] text-sm font-normal leading-normal">
                  Taro is a senior member and instructor with a deep understanding of Kendo.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <styles>
                    @container(max-width:120px){.table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-120{display: none;}}
          @container(max-width:240px){.table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-240{display: none;}}
          @container(max-width:360px){.table-b10d76e0-c3e7-41bf-b085-6aa621648dae-column-360{display: none;}}
        </styles> */}
      </div>
    </div>
  )

  const renderQA = () => (
    <div>
      <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Q&amp;A</h2>
      <div className="flex items-center gap-4 bg-[#f8f9fc] px-4 min-h-[72px] py-2">
        <div className="text-[#0d111c] flex items-center justify-center rounded-lg bg-[#e6eaf4] shrink-0 size-12" data-icon="Question" data-size="24px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#0d111c] text-base font-medium leading-normal line-clamp-1">What is Kendo?</p>
          <p className="text-[#47619e] text-sm font-normal leading-normal line-clamp-2">
            Kendo is a modern Japanese martial art, which descended from swordsmanship (kenjutsu) and uses bamboo swords (shinai) and protective armour (bōgu). It is a
            physically and mentally challenging activity that combines martial arts practices and values with sport-like elements.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-[#f8f9fc] px-4 min-h-[72px] py-2">
        <div className="text-[#0d111c] flex items-center justify-center rounded-lg bg-[#e6eaf4] shrink-0 size-12" data-icon="Question" data-size="24px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#0d111c] text-base font-medium leading-normal line-clamp-1">Is Kendo suitable for everyone?</p>
          <p className="text-[#47619e] text-sm font-normal leading-normal line-clamp-2">
            Yes, Kendo is suitable for all ages, from children to seniors. The practice of Kendo can be adapted to different levels of physical ability and fitness. It is a
            great way to stay active, improve coordination, and develop discipline, regardless of age or gender.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-[#f8f9fc] px-4 min-h-[72px] py-2">
        <div className="text-[#0d111c] flex items-center justify-center rounded-lg bg-[#e6eaf4] shrink-0 size-12" data-icon="Question" data-size="24px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#0d111c] text-base font-medium leading-normal line-clamp-1">Where is Kendo practiced?</p>
          <p className="text-[#47619e] text-sm font-normal leading-normal line-clamp-2">
            Kendo is practiced in a dojo, a training hall specifically designed for martial arts. The dojo is typically a spacious, open area with wooden floors and minimal
            equipment. It is a place of respect and discipline, where students gather to train and practice Kendo under the guidance of an instructor (sensei).
          </p>
        </div>
      </div>     
    </div>
  )

  return (
    <div>
      {/* <html>
        <head>
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
          <link
            rel="stylessheet"
            as="styles"
            onload="this.rel='stylessheet'"
            href="https://fonts.googleapis.com/css2?display=swap&amp;family=Manrope%3Awght%40400%3B500%3B700%3B800&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
          />

          <title>Galileo Design</title>
          <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

          <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        </head>
        <body>
        
        </body>
      </html> */}

    <div className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden">  
      <div className="layout-container flex h-full grow flex-col">
        <NavBar />

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {renderHeaderSection()}
            {renderOurStory()}
            {renderWhyKendo()}
            {renderClubsList()}
            {renderLatestNews()}
            {renderGallery()}
            {renderHeadMembersList()}
            {renderQA()}
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#47619e] text-base font-normal leading-normal min-w-40" href="#">Contact Us</a>
                <a className="text-[#47619e] text-base font-normal leading-normal min-w-40" href="#">Hotline: +84 123 456 789</a>
                <a className="text-[#47619e] text-base font-normal leading-normal min-w-40" href="#">Email: info@hcmkendofederation.org</a>
                <a className="text-[#47619e] text-base font-normal leading-normal min-w-40" href="#">Follow us on Facebook</a>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div className="text-[#47619e]" data-icon="FacebookLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#47619e]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#47619e]" data-icon="InstagramLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-[#47619e] text-base font-normal leading-normal">© 2022 HCM Kendo Federation</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>

    </div>
  )
}