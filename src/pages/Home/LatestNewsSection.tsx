
import { newsItemHome } from '../../constants/data'

export const LatestNewsSection = () => (
  <div>
    <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Latest News</h2>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {
        newsItemHome.map((newsItem) => (
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url(${newsItem.image})` }}
            ></div>
            <div>
              <p className="text-[#0d111c] text-base font-medium leading-normal whitespace-pre-wrap">{newsItem.title}</p>
              <p className="text-[#47619e] text-sm font-normal leading-normal">{newsItem.summary}</p>
              <a className="after:bg-[#47619e] hover:underline cursor-pointer" href={newsItem.link} target="_blank">
                Xem thêm
              </a>
            </div>
          </div>
        ))
      }
    </div>
  </div>
)