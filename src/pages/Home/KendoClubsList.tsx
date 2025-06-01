import { ClubInfo } from "../../types/types"
import DaidoClubLogo from "../../assets/images/logoOfClubs/DaidoClubLogo.svg"
import KazekenClubLogo from "../../assets/images/logoOfClubs/KazekenClubLogo.svg"
import SaigonKendoClubLogo from "../../assets/images/logoOfClubs/SaigonKendoClubLogo.svg"
import UEFClubLogo from "../../assets/images/logoOfClubs/UEFClubLogo.svg"
import ShokubanClubImage from "../../assets/images/logoOfClubs/ShokubanClubImage.svg"

const KendoClubs: ClubInfo[] = [
  {
    name: "DaiDo Kendo Club",
    location: "Trung Tâm TDTT Quận Bình Thạnh, số 8 Phan Đăng Lưu phường 14 quận Bình Thạnh.",
    image: DaidoClubLogo
  },
  {
    name: "Câu lạc bộ kiếm đạo Phong Kiếm",
    location: "Lầu 1, Tòa nhà Trung tâm điều hành, Số 02, Đinh Tiên Hoàng, Phường ĐaKao, Quận 1, Tp Hồ Chí Minh",
    image: KazekenClubLogo
  },
  {
    name: "Câu lạc bộ Kiếm đạo Sài Gòn",
    location: "Số 215C Lý Thường Kiệt, Phường 15, Quận 11, Tp. Hồ Chí Minh ( Trung tâm dịch vụ thể dục thể thao)",
    image: SaigonKendoClubLogo
  },
  {
    name: "Võ Đường Shobukan",
    location: `(1) 109 block K, Happy Valley, Phường Tân Phong, Quận 7, Tp Hồ Chí Minh.\n(2) : Dancenter, 53 Nguyễn Đăng Giai, Thảo Điền, Quận 2, Tp Hồ Chí Minh.`,
    image: ShokubanClubImage
  },
  {
    name: "Câu lạc bộ Kiếm đạo trường Đại học Kinh tế Tài chính",
    location: "Tầng 15 số 145 Điện Biên Phủ, Phường 15, Quận Bình Thạnh Thành phố Hồ Chí Minh. (Đại Học Kinh Tế Tài Chính)",
    image: UEFClubLogo
  },
  {
    name: "Câu Lạc Bộ Kiếm Đạo Đông Hải ",
    location: "Nhà Thiếu Nhi Quận 10, số 139 Bắc Hải phường 14 quận 10",
    image: DaidoClubLogo
  }
]

export const KendoClubsList = () => {
  const renderKendoClubInfo = (club: ClubInfo) => (
    <a className="flex items-center gap-4 bg-[#f8f9fc] px-4 py-3 hover:bg-[#e0e4f0] transition-colors duration-200 ease-in-out rounded-lg cursor-pointer" key={club.name}>
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