import HcmKendoLogoWithText_white from '../assets/images/HcmKendoLogoWithText_white.png'

export const Footer = () => {
  return (
    <footer className="bg-[#47619e] text-white flex justify-center">
      <div className="px-5 py-10 max-w-[1200px] w-full">
        <div className="flex flex-row gap-6">
          <div className="basis-1/3 items-center justify-center">
            <img
              src={HcmKendoLogoWithText_white} alt="HCM Kendo Federation Logo"
              className="mx-auto mb-4" style={{ height: '140px' }}
              loading="lazy"
            />
          </div>
          <div className="basis-2/3">
            <h3 className="text-white text-base font-bold leading-normal">
            HO CHI MINH CITY KENDO FEDERATION - LIÊN ĐOÀN KIẾM ĐẠO TP. HỒ CHÍ MINH
            </h3>
            <div className="flex gap-2.5 items-baseline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
              >
                <path
                  fill="currentColor"
                  d="m16 9.5l-3-3V2h-2v2.5l-3-3l-8 8v.5h2v5h5v-3h2v3h5v-5h2z"
                ></path>
              </svg>
              <p>Address: 725/14 Trường Chinh, Tây Thạnh, Tân Phú, Ho Chi Minh City, Vietnam</p>
            </div>
            <div className="flex gap-2.5 items-baseline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
              >
                <path
                  fill="currentColor"
                  d="M11 10c-1 1-1 2-2 2s-2-1-3-2s-2-2-2-3s1-1 2-2s-2-4-3-4s-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3"
                ></path>
              </svg>
              <p>Hotline: 090 317 03 17</p>
            </div>
            <div className="flex gap-2.5 items-baseline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
              >
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                ></path>
              </svg>
              <p>Email: admin@hcmkendo.org.vn</p>
            </div>
            <div className="flex gap-2.5 items-baseline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
              >
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12s3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"
                  ></path>
                  <path
                    d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
              <p>Website: <a href='/' className='underline hover:font-bold'>http://hcmkendo.org.vn</a></p>
            </div>
            <div className="flex gap-2.5 items-baseline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                ></path>
              </svg>
              <p>Facebook : <a href='https://www.facebook.com/hochiminhcitykendofederation' className='underline hover:font-bold'>hochiminhcitykendofederation</a></p>
            </div>
          </div>
        </div>
        <div className="mt-10 mx-28 border-t border-white divide-slate-50 opacity-30">
          <p className="text-center text-base text-sm leading-normal pt-5">
            Copyright © 2022 HCMC Kendo Federation
          </p>
        </div>
      </div>
    </footer>
  )
}