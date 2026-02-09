// import '../../assets/styles/HomeHeader.css'

// export const HomeHeader = () => {
//   return (
//     <div
//       className="flex min-h-screen flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
//     >
//       <div className="flex flex-col gap-2 masking-container">
//         <h1
//           className="text-white text-center text-7xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] masked-text"
//         >
//           Liên Đoàn Kiếm Đạo <br /> TP. Hồ Chí Minh
//         </h1>
       
//         <h2 className="text-white text-lg font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-5xl mt-10 text-justify">
//         Kiếm đạo (Kendo) được du nhập vào TP.HCM từ những năm cuối thập kỷ 1980. Đến năm 1997, Liên đoàn Võ thuật TP.HCM đã tổ chức lớp đào tạo huấn luyện viên đầu tiên. Trong 10 năm trở lại đây, phong trào kiếm đạo đã phát triển nhanh và đến nay có đã có thu hút hàng ngàn người tham gia tập luyện thường xuyên.
//         Tuy nhiên, phong trào tập luyện Kiếm đạo (Kendo) tại TP.HCM gặp những khó khăn lớn khi chưa có một liên đoàn chính thức. Vì vậy các hội, nhóm Kiếm đạo ( Kendo) ở TP.HCM không thể kết nối chính thức với các liên đoàn Kiếm đạo (Kendo)  trong khu vực và trên thế giới để có thể tham gia trao đổi, tập luyện hoặc tham gia các giải thi đấu chính thức.
//         Chính điều này đã thôi thúc sự ra đời của một tổ chức xã hội - nghề nghiệp tự nguyện là Liên đoàn Kiếm đạo TP.HCM.
//         </h2>
//       </div>
//     </div>
//   )
// }


import '../../assets/styles/HomeHeader.css'
import { useLanguage } from '../../components/LanguageContext';
import homeHeaderData from '../../data/HomeHeader.json';

export const HomeHeader = () => {
  const { language } = useLanguage();
  return (
    <div className="flex min-h-screen flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="flex flex-col gap-2 masking-container w-full max-w-6xl">
        <h1 className="text-white text-center font-black leading-tight tracking-[-0.033em] masked-text
          text-4xl sm:text-5xl md:text-7xl lg:text-7xl
          px-2 sm:px-4 md:px-0">
          {homeHeaderData.title_line1[language]} <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          {homeHeaderData.title_line2[language]}
        </h1>
        <h2 className="text-white font-normal leading-normal max-w-5xl mx-auto
          text-sm sm:text-base md:text-lg
          mt-6 sm:mt-8 md:mt-10
          px-2 sm:px-4 md:px-0
          text-justify">
          {homeHeaderData.desc_part1[language]}
          <br /><br />
          {homeHeaderData.desc_part2[language]}
          <br /><br />
          {homeHeaderData.desc_part3[language]}
        </h2>
      </div>
    </div>
  );
}
