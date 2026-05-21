import * as React from 'react'
import { useEffect, useState } from 'react'
import { InfoCard } from '../../components/InfoCard'

interface NewsSummary {
  uid: string
  title: string
  summary?: string
  image: string
  link?: string
}

export const NewsList = () => {
  const [news, setNews] = useState<NewsSummary[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/news')
      .then((r) => r.json())
      .then((data) => {
        setNews(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return <div className="text-gray-400 px-4 py-8">Loading...</div>
  }

  return (
    <div>
      {news.map((newsItem) => (
        <div key={newsItem.uid}>
          <InfoCard
            title={newsItem.title}
            subtitle={newsItem.summary}
            image={newsItem.image}
            link={newsItem.link}
          />
        </div>
      ))}
    </div>
  )
}
