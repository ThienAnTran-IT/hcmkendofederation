import * as React from 'react'

export const NavBar = () => {
  return (
    <div>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6eaf4] px-10 py-3">
        <div className="flex items-center gap-4 text-[#0d111c]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_6_330)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-[#0d111c] text-lg font-bold leading-tight tracking-[-0.015em]">HCM Kendo Federation</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a className="text-[#0d111c] text-sm font-medium leading-normal" href="#">Home</a>
            <a className="text-[#0d111c] text-sm font-medium leading-normal" href="#">News</a>
            <a className="text-[#0d111c] text-sm font-medium leading-normal" href="#">Clubs</a>
            <a className="text-[#0d111c] text-sm font-medium leading-normal" href="#">Q&amp;A</a>
          </div>
          <div className="flex gap-2">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#0539b3] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Register</span>
            </button>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e6eaf4] text-[#0d111c] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Login</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}