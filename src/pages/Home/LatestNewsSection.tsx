
export const LatestNewsSection = () => (
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