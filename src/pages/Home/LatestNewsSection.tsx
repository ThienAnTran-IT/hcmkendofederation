
import { newsItemHome } from '../../constants/data'

const MAX_NEWS_ITEMS_IN_HOME = 4

const latestNews = newsItemHome.slice(0, MAX_NEWS_ITEMS_IN_HOME)

export const LatestNewsSection = () => (
  <div>
    <div className='px-4 pt-6 flex justify-between items-center'>
      <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-0">Latest News</h2>
      <a className="text-[#47619e] italic after:bg-[#47619e] hover:underline cursor-pointer hover:font-bold" href='/news'>
        Xem tất cả
      </a>
    </div>
    
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {
        latestNews.map((newsItem) => (
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url(${newsItem.image})` }}
            ></div>
            <div>
              <p className="text-[#0d111c] text-base font-medium leading-normal whitespace-pre-wrap">{newsItem.title}</p>
              <p className="text-[#47619e] text-sm font-normal leading-normal">{newsItem.summary}</p>
              <a className="italic text-[#47619e] after:bg-[#47619e] hover:underline cursor-pointer hover:font-bold" href={newsItem.link}>
                Xem thêm
              </a>
            </div>
          </div>
        ))
      }
    </div>
  </div>
)