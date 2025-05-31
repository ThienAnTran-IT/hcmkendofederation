
export const KendoClubsList = () => (
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