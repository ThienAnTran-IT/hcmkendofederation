import '../../assets/styles/HomeHeader.css'

export const HomeHeader = () => {
  return (
    <div
      className="flex min-h-screen flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
    >
      <div className="flex flex-col gap-2 wave-container">
        <h1
          className="text-white text-center text-7xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] wave-text"
        >
          {/* <span>Liên</span>&nbsp;&nbsp;<span>Đoàn</span>&nbsp;&nbsp; <span>Kiếm</span>&nbsp;&nbsp; <span>Đạo</span>
          <br/>
          <span>TP. </span>&nbsp;&nbsp;<span>Hồ </span>&nbsp;&nbsp;<span>Chí </span>&nbsp;&nbsp;<span>Minh</span> */}
          <span>L</span><span>i</span><span>ê</span><span>n</span>
          &nbsp;&nbsp;
          <span>Đ</span><span>o</span><span>à</span><span>n</span>
          &nbsp;&nbsp;
          <span>K</span><span>i</span><span>ế</span><span>m</span>
          &nbsp;&nbsp;
          <span>Đ</span><span>ạ</span><span>o</span>
          <br/>
          <span>T</span><span>P</span>.
          &nbsp;&nbsp;
          <span>H</span><span>ồ</span>
          &nbsp;&nbsp;
          <span>C</span><span>h</span><span>í</span>
          &nbsp;&nbsp;
          <span>M</span><span>i</span><span>n</span><span>h</span>
        </h1>
       
        <h2 className="text-white text-lg font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-5xl mt-10 text-justify">
        Kiếm đạo (Kendo) được du nhập vào TP.HCM từ những năm cuối thập kỷ 1980. Đến năm 1997, Liên đoàn Võ thuật TP.HCM đã tổ chức lớp đào tạo huấn luyện viên đầu tiên. Trong 10 năm trở lại đây, phong trào kiếm đạo đã phát triển nhanh và đến nay có đã có thu hút hàng ngàn người tham gia tập luyện thường xuyên.
        Tuy nhiên, phong trào tập luyện Kiếm đạo (Kendo) tại TP.HCM gặp những khó khăn lớn khi chưa có một liên đoàn chính thức. Vì vậy các hội, nhóm Kiếm đạo ( Kendo) ở TP.HCM không thể kết nối chính thức với các liên đoàn Kiếm đạo (Kendo)  trong khu vực và trên thế giới để có thể tham gia trao đổi, tập luyện hoặc tham gia các giải thi đấu chính thức.
        Chính điều này đã thôi thúc sự ra đời của một tổ chức xã hội - nghề nghiệp tự nguyện là Liên đoàn Kiếm đạo TP.HCM.
        </h2>
      </div>
    </div>
  )
}
