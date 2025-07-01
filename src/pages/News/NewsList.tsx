import { newsItemHome } from '../../constants/data'
import { InfoCard } from '../../components/InfoCard'

export const NewsList = () => (
  <div>
      {newsItemHome.map((newsItem) => (
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
