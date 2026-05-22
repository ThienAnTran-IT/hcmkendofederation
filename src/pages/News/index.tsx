import * as React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { markdownComponents, preprocessMarkdown } from '../../components/markdownConfig'
import { NavBar } from '../../components/Navbar'
import { Tabs } from '../../constants/constants'
import { NewsList } from './NewsList'
import { Footer } from '../../components/Footer'

interface AttachmentLink {
  name: string
  url: string
}

interface NewsDetail {
  uid: string
  title: string
  content: string
  date: string
  image?: string
  attachmentLinks?: AttachmentLink[]
  additionalImages?: string[]
}

const NewsDetailView: React.FC<{ uid: string }> = ({ uid }) => {
  const [news, setNews] = useState<NewsDetail | null | 'loading' | 'error'>('loading')

  useEffect(() => {
    fetch(`/api/news/${uid}`)
      .then((r) => {
        if (!r.ok) throw new Error('Not found')
        return r.json()
      })
      .then((data) => setNews(data))
      .catch(() => setNews('error'))
  }, [uid])

  if (news === 'loading') {
    return <div className="px-4 py-8 text-gray-400">Loading...</div>
  }

  if (news === 'error' || news === null) {
    return <h1 className="text-red-500 px-4">This page no longer exists.</h1>
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 whitespace-pre-wrap">
        {news.title}
      </h1>
      <p className="text-[#47619e] px-4 text-sm font-normal leading-normal">Published on {news.date}</p>
      {news.image && (
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mt-4 mb-2"
          style={{ backgroundImage: `url(${news.image})` }}
        />
      )}
      <p className="px-4 pb-3 pt-5">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={markdownComponents}
        >
          {preprocessMarkdown(news.content)}
        </ReactMarkdown>
      </p>
      {news.additionalImages && news.additionalImages.length > 0 && (
        <div className="px-4 pb-3 pt-5 mt-5 divide-y divide-dashed">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
            {news.additionalImages.map((image, index) => (
              <img alt={`${news.uid}_${index}`} key={index} className="bg-center bg-no-repeat" src={image} />
            ))}
          </div>
        </div>
      )}
      {news.attachmentLinks && news.attachmentLinks.length > 0 && (
        <div className="px-4 pb-3 pt-5 mt-5 divide-y divide-dashed">
          <h2 className="text-[#0d111c] text-[18px] font-bold mb-2">Attachments</h2>
          <ul className="list-disc pl-5">
            {news.attachmentLinks.map((link, index) => (
              <li key={index} className="text-[#47619e] text-sm font-normal leading-normal">
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {link.name ?? link.url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export const News: React.FC = () => {
  const { uid } = useParams<{ uid?: string }>()

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="bg-white text-[#0d111c]">
          <NavBar selectedTab={Tabs[1]} className="bg-[#47619e] text-white" />
        </div>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[980px] flex-1">
            {uid ? <NewsDetailView uid={uid} /> : <NewsList />}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
