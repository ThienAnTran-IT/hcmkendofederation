
export const HomeHeader = () => {
  return (
    <div
      // className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
      className="flex min-h-screen flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
      // style={{
      //   backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/c2f7de3a-4051-4929-9246-a01aa76e8492.png")'
      // }}
      // styles={"background-image": 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/c2f7de3a-4051-4929-9246-a01aa76e8492.png")'}
    >
      <div className="flex flex-col gap-2 text-center">
        <h1
          className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
        >
          Liên Đoàn Kiếm Đạo TP. Hồ Chí Minh
        </h1>
        <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
        Kiếm đạo (Kendo) được du nhập vào TP.HCM từ những năm cuối thập kỷ 1980. Đến năm 1997, Liên đoàn Võ thuật TP.HCM đã tổ chức lớp đào tạo huấn luyện viên đầu tiên. Trong 10 năm trở lại đây, phong trào kiếm đạo đã phát triển nhanh và đến nay có đã có thu hút hàng ngàn người tham gia tập luyện thường xuyên.
        Tuy nhiên, phong trào tập luyện Kiếm đạo (Kendo) tại TP.HCM gặp những khó khăn lớn khi chưa có một liên đoàn chính thức. Vì vậy các hội, nhóm Kiếm đạo ( Kendo) ở TP.HCM không thể kết nối chính thức với các liên đoàn Kiếm đạo (Kendo)  trong khu vực và trên thế giới để có thể tham gia trao đổi, tập luyện hoặc tham gia các giải thi đấu chính thức.
        Chính điều này đã thôi thúc sự ra đời của một tổ chức xã hội - nghề nghiệp tự nguyện là Liên đoàn Kiếm đạo TP.HCM
        </h2>
      </div>
      <div className="flex-wrap gap-3 flex justify-center">
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0539b3] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
        >
          <span className="truncate">Find a Club</span>
        </button>
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e6eaf4] text-[#0d111c] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
        >
          <span className="truncate">Learn More</span>
        </button>
      </div>
    </div>
  )
}
