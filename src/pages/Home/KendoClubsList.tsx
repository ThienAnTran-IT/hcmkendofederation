import { ClubInfo } from "../../types/types"
import DaidoClubLogo from "../../assets/images/logoOfClubs/DaidoClubLogo.svg"
import KazekenClubLogo from "../../assets/images/logoOfClubs/KazekenClubLogo.svg"
import SaigonKendoClubLogo from "../../assets/images/logoOfClubs/SaigonKendoClubLogo.svg"
import UEFClubLogo from "../../assets/images/logoOfClubs/UEFClubLogo.svg"
import ShokubanClubImage from "../../assets/images/logoOfClubs/ShokubanClubImage.svg"
import TomokaiLogo from "../../assets/images/logoOfClubs/TomokaiLogo.svg"
import NitoukanClubLogo from "../../assets/images/logoOfClubs/NitoukanClubLogo.svg"
import KenzekanClubLogo from "../../assets/images/logoOfClubs/KenzekanClubLogo.svg"
import SaigonJukenjaiLogo from "../../assets/images/logoOfClubs/SaigonJukenjaiLogo.svg"
import KendoBinhDuongLogo from "../../assets/images/logoOfClubs/KendoBinhDuongLogo.svg"
import HanoiKendoLogo from "../../assets/images/logoOfClubs/HanoiKendoLogo.svg"
import SaganLogo from "../../assets/images/logoOfClubs/SaganLogo.svg"


const KendoClubs: ClubInfo[] = [
  {
    name: "Câu lạc bộ Kiếm đạo Đại Đạo (DaiDo Kendo Club)",
    location: "Trung Tâm TDTT Quận Bình Thạnh, số 8 Phan Đăng Lưu phường 14 quận Bình Thạnh.",
    image: DaidoClubLogo,
    url: "https://www.facebook.com/people/%C4%90%E1%BA%A1i-%C4%90%E1%BA%A1o-Ki%E1%BA%BFm-%C4%90%E1%BA%A1o-Qu%C3%A1n-Daido-Kendo-Club/100040303045704/"
  },
  {
    name: "Câu lạc bộ Kiếm đạo Phong Kiếm (Kazeken Kendo Club)",
    location: "Lầu 1, Tòa nhà Trung tâm điều hành, Số 02, Đinh Tiên Hoàng, Phường ĐaKao, Quận 1, Tp Hồ Chí Minh",
    image: KazekenClubLogo,
    url: "https://www.facebook.com/kaze.ken.1"
  },
  {
    name: "Câu lạc bộ Kiếm đạo Sài Gòn (Saigon Kendo Club)",
    location: "Số 215C Lý Thường Kiệt, Phường 15, Quận 11, Tp. Hồ Chí Minh ( Trung tâm dịch vụ thể dục thể thao)",
    image: SaigonKendoClubLogo,
    url: "https://www.facebook.com/saigonkendoclubvn"
  },
  {
    name: "Võ Đường Shobukan (Shobukan Dojo)",
    location: `(1) 109 block K, Happy Valley, Phường Tân Phong, Quận 7, Tp Hồ Chí Minh.\n(2) : Dancenter, 53 Nguyễn Đăng Giai, Thảo Điền, Quận 2, Tp Hồ Chí Minh.`,
    image: ShokubanClubImage,
    url: "https://katorivietnam.org/vi/vo-duong-kenjutsu-shobukan-lich-tap-vo-duong/"
  },
  {
    name: "Câu lạc bộ Kiếm đạo trường Đại học Kinh tế Tài chính (UEF Kendo Club)",
    location: "Tầng 15 số 145 Điện Biên Phủ, Phường 15, Quận Bình Thạnh Thành phố Hồ Chí Minh. (Đại Học Kinh Tế Tài Chính)",
    image: UEFClubLogo,
    url: "https://www.facebook.com/uefkendoclub.hcm/"
  },
  {
    name: "Câu lạc bộ Kiếm đạo Tomokai (Tomokai Kendo Club)",
    location: "145 Đường Nguyễn Du, Quận 1, Hồ Chí Minh, Việt Nam",
    image: TomokaiLogo,
    url: "https://tomokai.com.vn/"
  },
  {
    name: "Câu lạc bộ Kiếm đạo Nitoukan (Nitoukan Kendo Iaido Vietnam)",
    location: "Tầng 1 nhà Văn hoá 7A/15 Thành Thái p14 Quận 10, TP Hồ Chí Minh",
    image: NitoukanClubLogo,
    url: "https://www.facebook.com/Nitoukan.Iaido.Vietnam/"
    
  },
  {
    name: "Câu lạc bộ Kiếm đạo Kiếm Thiền quán (Kenzekan kendo dojo)",
    location: "74/26 Bùi Quang Là - p12 - quận Gò vấp, TP Hồ Chí Minh",
    image: KenzekanClubLogo,
    url: "https://www.facebook.com/kenzenkan/"
  },
  {
    name: "Câu lạc bộ súng Kiếm đạo Sài Gòn Jukendo Kai (Saigon Jukendo Kai Kendo Club)",
    location: "Rach Mieu Swimming Pool, 1 Đ. Hoa Phượng, Phường 2, Phú Nhuận, Hồ Chí Minh",
    image: SaigonJukenjaiLogo,
    url: "https://www.facebook.com/jukendo.saigon/"
  },
  {
    name: "Câu lạc bộ Kiếm đạo Bình Dương (Binh DuongKendo Club)",
    location: "567 Đại lộ Bình Dương, phường Hiệp Thành, thành phố Thủ Dầu Một, tỉnh Bình Dương",
    image: KendoBinhDuongLogo,
    url: "https://www.facebook.com/KendoBinhDuong"
  },
  {
    name: "Câu lạc bộ Kiếm đạo SAGAN (SAGAN Kendo Team)",
    location: "TT20 Tam Đảo, Phường 15, Quận 10, TP Hồ Chí Minh",
    image: SaganLogo,
    url: "https://www.facebook.com/sagankendoteam/"
  },
  {
    name: "Hiệp hội Kendo Hà Nội (Hanoi Kendo Association)",
    location: "Hiệp hội có nhiều địa điểm luyện tập tại Hà Nội, xin truy cập trang của Hiệp hội để biết thêm chi tiết.",
    image: HanoiKendoLogo,
    url: "https://www.facebook.com/hanoi.kendo.association"
  }
]

export const KendoClubsList = () => {
  const renderKendoClubInfo = (club: ClubInfo) => (
    <a
      className="flex items-center gap-4 bg-[#f8f9fc] px-4 py-3 hover:bg-[#e0e4f0] transition-colors duration-200 ease-in-out rounded-lg cursor-pointer"
      key={club.name}
      href={club.url || "#"}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit"
      >
        <img src={club.image} alt="Vovinam Kendo Club" className="h-full w-full object-cover rounded-lg" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[#0d111c] text-base font-medium leading-normal">{club.name}</p>
        <p className="text-[#47619e] text-sm font-normal leading-normal whitespace-pre-wrap">{club.location}</p>
      </div>
    </a>
  )

  return (
    <div>
      <div className="leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        <h2 className="text-[#0d111c] text-[22px] font-bold mb-2">CÁC CLB THÀNH VIÊN LIÊN ĐOÀN TẠI TP. HỒ CHÍ MINH</h2>
        <p className="text-[#0d111c]">Kiếm đạo (Kendo) được mệnh danh là một môn võ trui rèn nhân cách của người học. Nếu bạn hứng thú với môn võ dùng kiếm độc đáo này của đất nước mặt trời mọc thì có thể tìm đến các CLB luyện tập Kiếm đạo (Kendo) trực thuộc Liên Đoàn như sau:</p>
      </div>

      {KendoClubs.map((club) => (
        renderKendoClubInfo(club)
      ))}
    </div>
  )
}