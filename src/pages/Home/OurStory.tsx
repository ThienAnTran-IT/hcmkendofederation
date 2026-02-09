import image15 from '../../assets/images/homeGallery/image15.svg'
import { useLanguage } from '../../components/LanguageContext';
import ourStoryData from '../../data/OurStory.json';

export const OurStory = () => {
  const { language } = useLanguage();
  return (
    <div>
      <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        {ourStoryData.title[language]}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: `url(${image15})` }}
          ></div>
        </div>
      </div>
      <p className="text-[#0d111c] text-base font-normal leading-normal pb-3 pt-1 px-4 text-justify">
        {ourStoryData.story_part1[language]}
      </p>
      <p className="text-[#0d111c] text-base font-normal leading-normal pb-3 pt-1 px-4 text-justify">
        {ourStoryData.story_part2[language]}
      </p>
      <p className="text-[#0d111c] text-base font-normal leading-normal pb-3 pt-1 px-4 text-justify">
        {ourStoryData.story_part3[language]}
      </p>
    </div>
  );
};