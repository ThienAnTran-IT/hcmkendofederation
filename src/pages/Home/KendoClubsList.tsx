
import { ClubInfo } from "../../types/types"
import DaidoClubLogo from "../../assets/images/logoOfClubs/DaidoClubLogo.svg"
import KazekenClubLogo from "../../assets/images/logoOfClubs/KazekenClubLogo.svg"
import SaigonKendoClubLogo from "../../assets/images/logoOfClubs/SaigonKendoClubLogo.svg"
import UEFClubLogo from "../../assets/images/logoOfClubs/UEFClubLogo.svg"
import ShokubanClubImage from "../../assets/images/logoOfClubs/ShokubanClubImage.svg"
import TomokaiLogo from "../../assets/images/logoOfClubs/TomokaiLogo.svg"
import NitoukanClubLogo from "../../assets/images/logoOfClubs/NitoukanClubLogo.svg"
import KenzekanClubLogo from "../../assets/images/logoOfClubs/KenzekanClubLogo.svg"
import SaigonJukenjaiLogo from "../../assets/images/logoOfClubs/SaigonJukenjaiLogo.jpg"
import KendoBinhDuongLogo from "../../assets/images/logoOfClubs/KendoBinhDuongLogo.svg"
import HanoiKendoLogo from "../../assets/images/logoOfClubs/HanoiKendoLogo.svg"
import SaganLogo from "../../assets/images/logoOfClubs/SaganLogo.svg"
import UTEKendoClubLogo from "../../assets/images/logoOfClubs/UTEKendoClubLogo.jpg"
import { InfoCard } from "../../components/InfoCard"
import { useLanguage } from "../../components/LanguageContext"

const KendoClubs: ClubInfo[] = [
  {
    name: {
      vi: "Câu lạc bộ Kiếm đạo Đại Đạo (DaiDo Kendo Club)",
      en: "DaiDo Kendo Club"
    },
    location: {
      vi: "Trung Tâm TDTT Quận Bình Thạnh, số 8 Phan Đăng Lưu phường 14 quận Bình Thạnh.",
      en: "Binh Thanh Sports Center, 8 Phan Dang Luu, Ward 14, Binh Thanh District."
    },
    image: DaidoClubLogo,
    url: "https://www.facebook.com/people/%C4%90%E1%BA%A1i-%C4%90%E1%BA%A1o-Ki%E1%BA%BFm-%C4%90%E1%BA%A1o-Qu%C3%A1n-Daido-Kendo-Club/100040303045704/"
  },
  {
    name: {
      vi: "Câu lạc bộ Kiếm đạo Phong Kiếm (Kazeken Kendo Club)",
      en: "Kazeken Kendo Club"
    },
    location: {
      vi: "Lầu 1, Tòa nhà Trung tâm điều hành, Số 02, Đinh Tiên Hoàng, Phường ĐaKao, Quận 1, Tp Hồ Chí Minh",
      en: "1st Floor, Operations Center, 2 Dinh Tien Hoang, Da Kao Ward, District 1, Ho Chi Minh City"
    },
    image: KazekenClubLogo,
    url: "https://www.facebook.com/kaze.ken.1"
  },
  {
    name: {
      vi: "Câu lạc bộ Kiếm đạo Sài Gòn (Saigon Kendo Club)",
      en: "Saigon Kendo Club"
    },
    location: {
      vi: "Số 215C Lý Thường Kiệt, Phường 15, Quận 11, Tp. Hồ Chí Minh ( Trung tâm dịch vụ thể dục thể thao)",
      en: "215C Ly Thuong Kiet, Ward 15, District 11, Ho Chi Minh City (Sports Service Center)"
    },
    image: SaigonKendoClubLogo,
    url: "https://www.facebook.com/saigonkendoclubvn"
  },
  {
    name: {
      vi: "Võ Đường Shobukan (Shobukan Dojo)",
      en: "Shobukan Dojo"
    },
    location: {
      vi: `(1) 109 block K, Happy Valley, Phường Tân Phong, Quận 7, Tp Hồ Chí Minh.\n(2) : Dancenter, 53 Nguyễn Đăng Giai, Thảo Điền, Quận 2, Tp Hồ Chí Minh.`,
      en: `(1) 109 block K, Happy Valley, Tan Phong Ward, District 7, Ho Chi Minh City.\n(2): Dancenter, 53 Nguyen Dang Giai, Thao Dien, District 2, Ho Chi Minh City.`
    },
    image: ShokubanClubImage,
    url: "https://katorivietnam.org/vi/vo-duong-kenjutsu-shobukan-lich-tap-vo-duong/"
  },
  {
    name: {
      vi: "Câu lạc bộ Kiếm đạo trường Đại học Kinh tế Tài chính (UEF Kendo Club)",
      en: "UEF Kendo Club"
    },
    location: {
      vi: "Tầng 15 số 145 Điện Biên Phủ, Phường 15, Quận Bình Thạnh Thành phố Hồ Chí Minh. (Đại Học Kinh Tế Tài Chính)",
      en: "15th Floor, 145 Dien Bien Phu, Ward 15, Binh Thanh District, Ho Chi Minh City (University of Economics and Finance)"
    },
    image: UEFClubLogo,
    url: "https://www.facebook.com/uefkendoclub.hcm/"
  },
  {
    name: {
      vi: "Câu lạc bộ Kiếm đạo Tomokai (Tomokai Kendo Club)",
      en: "Tomokai Kendo Club"
    },
    location: {
      vi: "145 Đường Nguyễn Du, Quận 1, Hồ Chí Minh, Việt Nam",
      en: "145 Nguyen Du Street, District 1, Ho Chi Minh City, Vietnam"
    },
    image: TomokaiLogo,
    url: "https://tomokai.com.vn/"
  },
  {
    name: {
      vi: "Câu lạc bộ Kiếm đạo Nitoukan (Nitoukan Kendo Iaido Vietnam)",
      en: "Nitoukan Kendo Iaido Vietnam"
    },
    location: {
      vi: "Tầng 1 nhà Văn hoá 7A/15 Thành Thái p14 Quận 10, TP Hồ Chí Minh",
      en: "1st Floor, Cultural House 7A/15 Thanh Thai, Ward 14, District 10, Ho Chi Minh City"
    },
    image: NitoukanClubLogo,
    url: "https://www.facebook.com/Nitoukan.Iaido.Vietnam/"
  },
  {
    name: {
      vi: "Câu lạc bộ Kiếm đạo Kiếm Thiền quán (Kenzekan kendo dojo)",
      en: "Kenzekan Kendo Dojo"
    },
    location: {
      vi: "74/26 Bùi Quang Là - p12 - quận Gò vấp, TP Hồ Chí Minh",
      en: "74/26 Bui Quang La - Ward 12 - Go Vap District, Ho Chi Minh City"
    },
    image: KenzekanClubLogo,
    url: "https://www.facebook.com/kenzenkan/"
  },
  {
    name: {
      vi: "Câu lạc bộ súng Kiếm đạo Sài Gòn Jukendo Kai (Saigon Jukendo Kai Kendo Club)",
      en: "Saigon Jukendo Kai Kendo Club"
    },
    location: {
      vi: "Rach Mieu Swimming Pool, 1 Đ. Hoa Phượng, Phường 2, Phú Nhuận, Hồ Chí Minh",
      en: "Rach Mieu Swimming Pool, 1 Hoa Phuong Street, Ward 2, Phu Nhuan District, Ho Chi Minh City"
    },
    image: SaigonJukenjaiLogo,
    url: "https://www.facebook.com/saigonjukendokai"
  },
  {
    name: {
      vi: "Câu lạc bộ Kiếm đạo Bình Dương (Binh DuongKendo Club)",
      en: "Binh Duong Kendo Club"
    },
    location: {
      vi: "567 Đại lộ Bình Dương, phường Hiệp Thành, thành phố Thủ Dầu Một, tỉnh Bình Dương",
      en: "567 Binh Duong Boulevard, Hiep Thanh Ward, Thu Dau Mot City, Binh Duong Province"
    },
    image: KendoBinhDuongLogo,
    url: "https://www.facebook.com/KendoBinhDuong"
  },
  {
    name: {
      vi: "Câu lạc bộ Kiếm đạo SAGAN (SAGAN Kendo Team)",
      en: "SAGAN Kendo Team"
    },
    location: {
      vi: "TT20 Tam Đảo, Phường 15, Quận 10, TP Hồ Chí Minh",
      en: "TT20 Tam Dao, Ward 15, District 10, Ho Chi Minh City"
    },
    image: SaganLogo,
    url: "https://www.facebook.com/sagankendoteam/"
  },
  {
    name: {
      vi: "Hiệp hội Kendo Hà Nội (Hanoi Kendo Association)",
      en: "Hanoi Kendo Association"
    },
    location: {
      vi: "Hiệp hội có nhiều địa điểm luyện tập tại Hà Nội, xin truy cập trang của Hiệp hội để biết thêm chi tiết.",
      en: "The association has many practice locations in Hanoi, please visit the association's page for more details."
    },
    image: HanoiKendoLogo,
    url: "https://www.facebook.com/hanoi.kendo.association"
  },
  {
    name: {
      vi: "Câu lạc bộ Kiếm đạo Trường ĐH Sư phạm Kỹ thuật (UTE Kendo Club) ",
      en: "UTE Kendo Club"
    },
    location: {
      vi: "1 Võ Văn Ngân Phường Linh Chiểu, TP Ho Chi Minh City",
      en: "1 Vo Van Ngan, Linh Chieu Ward, Ho Chi Minh City"
    },
    image: UTEKendoClubLogo,
    url: "https://www.facebook.com/people/CLB-Ki%E1%BA%BFm-%C4%91%E1%BA%A1o-Tr%C6%B0%E1%BB%9Dng-%C4%90H-SPKT/61560455006741/"
  }
];

const header = {
  "vi": "CÁC CLB THÀNH VIÊN LIÊN ĐOÀN TẠI TP. HỒ CHÍ MINH",
  "en": "HO CHI MINH CITY KENDO FEDERATION MEMBER CLUBS"
}

const subHeader = {
  "vi": "Kiếm đạo (Kendo) được mệnh danh là một môn võ trui rèn nhân cách của người học. Nếu bạn hứng thú với môn võ dùng kiếm độc đáo này của đất nước mặt trời mọc thì có thể tìm đến các CLB luyện tập Kiếm đạo (Kendo) trực thuộc Liên Đoàn như sau:",
  "en": "Kendo is known as a martial art that cultivates the character of its practitioners. If you are interested in this unique swordsmanship martial art from the Land of the Rising Sun, you can find Kendo training clubs affiliated with the Federation as follows:"
}

export const KendoClubsList = () => {
  const { language } = useLanguage();

  return (
    <div>
      <div className="leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        <h2 className="text-[#0d111c] text-[22px] font-bold mb-2">{header[language]}</h2>
        <p className="text-[#0d111c] text-justify">{subHeader[language]}</p>
      </div>

      <div>
        {KendoClubs.map((club) => (
          <div key={club.name[language]}>
            <InfoCard
              title={club.name[language]}
              subtitle={club.location[language]}
              image={club.image}
              link={club.url}
            />
          </div>

        ))}
      </div>
     
    </div>
  )
}