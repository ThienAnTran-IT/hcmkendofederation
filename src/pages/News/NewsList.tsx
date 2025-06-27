import { newsItemHome } from '../../constants/data'
import { NewsItemSummary } from '../../types/types'

export const NewsList = () => {

  //TODO: Refactor this to use a more generic component (Duplicated with KenDoClubsList.tsx)
  const renderNewsItem = (item: NewsItemSummary) => (
    <a
      className="flex items-center gap-4 bg-[#f8f9fc] px-4 py-3 hover:bg-[#e0e4f0] transition-colors duration-200 ease-in-out rounded-lg cursor-pointer"
      key={item.uid}
      href={item.link || "#"}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit"
      >
        <img
          src={item.image} alt={item.uid}
          loading="lazy"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[#0d111c] text-base font-medium leading-normal">{item.title}</p>
        <p className="text-[#47619e] text-sm font-normal leading-normal whitespace-pre-wrap">{item.summary}</p>
      </div>
    </a>
  )

  return (
    <div>
      {newsItemHome.map((newsItem) => (
        renderNewsItem(newsItem)
      ))}
    </div>
  )
}