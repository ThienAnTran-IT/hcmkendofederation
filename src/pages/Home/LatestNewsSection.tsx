import * as React from 'react'
import { useEffect, useState } from 'react'
import { useLanguage } from '../../components/LanguageContext'
import LatestNewsSectionData from '../../data/LatestNewsSection.json'

interface NewsSummary {
  uid: string
  title: string
  summary?: string
  image: string
  link?: string
}

const MAX_NEWS_ITEMS_IN_HOME = 4

export const LatestNewsSection = () => {
  const { language } = useLanguage()
  const [news, setNews] = useState<NewsSummary[]>([])

  useEffect(() => {
    fetch('/api/news')
      .then((r) => r.json())
      .then((data) => setNews(data.slice(0, MAX_NEWS_ITEMS_IN_HOME)))
      .catch(() => {})
  }, [])

  return (
    <div>
      <div className='px-4 pt-6 flex justify-between items-center'>
        <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-0">{LatestNewsSectionData.header[language]}</h2>
        <a className="text-[#47619e] italic after:bg-[#47619e] hover:underline cursor-pointer hover:font-bold" href='/news'>
          {LatestNewsSectionData.seeAllButton[language]}
        </a>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {news.map((newsItem) => (
          <div key={newsItem.uid} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url(${newsItem.image})` }}
            ></div>
            <div>
              <p className="text-[#0d111c] text-base font-medium leading-normal whitespace-pre-wrap">{newsItem.title}</p>
              <p className="text-[#47619e] text-sm font-normal leading-normal">{newsItem.summary}</p>
              <a className="italic text-[#47619e] after:bg-[#47619e] hover:underline cursor-pointer hover:font-bold" href={newsItem.link}>
                {LatestNewsSectionData.seeDetailsButton[language]}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
