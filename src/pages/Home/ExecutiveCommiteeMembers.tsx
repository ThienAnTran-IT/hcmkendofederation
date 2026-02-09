
import LyDaiNghia from '../../assets/images/executiveMemberAvatars/LyDaiNghia.svg'
import NguyenDuyHan from '../../assets/images/executiveMemberAvatars/NguyenDuyHan.svg'
import NguyenTrongDuc from '../../assets/images/executiveMemberAvatars/NguyenTrongDuc.svg'
import PhanDuyMinh from '../../assets/images/executiveMemberAvatars/PhanDuyMinh.svg'
import PhanMinhTuan from '../../assets/images/executiveMemberAvatars/PhanMinhTuan.jpg'
import NguyenSyHiep from '../../assets/images/executiveMemberAvatars/NguyenSyHiep.svg'
import QuachTrongNghia from '../../assets/images/executiveMemberAvatars/QuachTrongNghia.svg'
import TranThanhTung from '../../assets/images/executiveMemberAvatars/TranThanhTung.svg'
import NguyenDangKhoa from '../../assets/images/executiveMemberAvatars/NguyenDangKhoa.svg'
import DaoTuanAnh from '../../assets/images/executiveMemberAvatars/DaoTuanAnh.svg'
import NguyenPhuocTrung from '../../assets/images/executiveMemberAvatars/NguyenPhuocTrung.svg'
import TranHongMinh from '../../assets/images/executiveMemberAvatars/TranHongMinh.svg'
import '../../assets/styles/executive-committee.css'
import { useLanguage } from '../../components/LanguageContext';
import { LangLabel } from '../../types/types';



interface MemberCardProps {
  name: LangLabel
  position: LangLabel
  image: string
}

const ExecutiveMembers: MemberCardProps[] = [
  {
    name: {
      vi: "Ông Trần Thanh Tùng",
      en: "Mr. Tran Thanh Tung"
    },
    position: {
      vi: "Chủ Tịch Liên Đoàn Kiếm Đạo TP Hồ Chí Minh",
      en: "President of Ho Chi Minh City Kendo Federation"
    },
    image: TranThanhTung
  },
  {
    name: {
      vi: "Ông Lý Đại Nghĩa",
      en: "Mr. Ly Dai Nghia"
    },
    position: {
      vi: "Phó Chủ tịch thường trực Liên Đoàn Kiếm Đạo TP Hồ Chí Minh",
      en: "Standing Vice President of Ho Chi Minh City Kendo Federation"
    },
    image: LyDaiNghia
  },
  {
    name: {
      vi: "Ông Nguyễn Sỹ Hiệp",
      en: "Mr. Nguyen Sy Hiep"
    },
    position: {
      vi: "Phó Chủ tịch Liên Đoàn Kiếm Đạo TP Hồ Chí Minh",
      en: "Vice President of Ho Chi Minh City Kendo Federation"
    },
    image: NguyenSyHiep
  },
  {
    name: {
      vi: "Ông Quách Trọng Nghĩa",
      en: "Mr. Quach Trong Nghia"
    },
    position: {
      vi: "Ủy viên thường vụ Liên đoàn Kiếm đạo TP Hồ Chí Minh",
      en: "Standing Member of Ho Chi Minh City Kendo Federation"
    },
    image: QuachTrongNghia
  },
  {
    name: {
      vi: "Ông Nguyễn Duy Hân",
      en: "Mr. Nguyen Duy Han"
    },
    position: {
      vi: "Ủy viên thường vụ Liên đoàn Kiếm đạo TP Hồ Chí Minh",
      en: "Standing Member of Ho Chi Minh City Kendo Federation"
    },
    image: NguyenDuyHan
  },
  {
    name: {
      vi: "Ông Nguyễn Trọng Đức",
      en: "Mr. Nguyen Trong Duc"
    },
    position: {
      vi: "Ủy viên thường vụ Liên đoàn Kiếm đạo TP Hồ Chí Minh",
      en: "Standing Member of Ho Chi Minh City Kendo Federation"
    },
    image: NguyenTrongDuc
  },
  {
    name: {
      vi: "Ông Phan Minh Tuấn",
      en: "Mr. Phan Minh Tuan"
    },
    position: {
      vi: "Ủy viên Liên đoàn Kiếm Đạo TP Hồ Chí Minh",
      en: "Member of Ho Chi Minh City Kendo Federation"
    },
    image: PhanMinhTuan
  },
  {
    name: {
      vi: "Ông Phan Duy Minh",
      en: "Mr. Phan Duy Minh"
    },
    position: {
      vi: "Ủy viên Liên đoàn Kiếm Đạo TP Hồ Chí Minh",
      en: "Member of Ho Chi Minh City Kendo Federation"
    },
    image: PhanDuyMinh
  },
  {
    name: {
      vi: "Ông Đào Tuấn Anh",
      en: "Mr. Dao Tuan Anh"
    },
    position: {
      vi: "Ủy viên Liên đoàn Kiếm Đạo TP Hồ Chí Minh",
      en: "Member of Ho Chi Minh City Kendo Federation"
    },
    image: DaoTuanAnh
  },
  {
    name: {
      vi: "Ông Nguyễn Phước Trung",
      en: "Mr. Nguyen Phuoc Trung"
    },
    position: {
      vi: "Ủy viên Liên đoàn Kiếm Đạo TP Hồ Chí Minh",
      en: "Member of Ho Chi Minh City Kendo Federation"
    },
    image: NguyenPhuocTrung
  },
  {
    name: {
      vi: "Ông Trần Hồng Minh",
      en: "Mr. Tran Hong Minh"
    },
    position: {
      vi: "Ủy viên Liên đoàn Kiếm Đạo TP Hồ Chí Minh",
      en: "Member of Ho Chi Minh City Kendo Federation"
    },
    image: TranHongMinh
  },
  {
    name: {
      vi: "Ông Nguyễn Đăng Khoa",
      en: "Mr. Nguyen Dang Khoa"
    },
    position: {
      vi: "Ủy viên Liên đoàn Kiếm Đạo TP Hồ Chí Minh",
      en: "Member of Ho Chi Minh City Kendo Federation"
    },
    image: NguyenDangKhoa
  }
];

const header = { 
  "vi": "Ban Chấp Hành Liên Đoàn",
  "en": "Executive Committee Members"
}


export const MemberCard = ({ name, position, image }: {name: string, position: string, image: string}) => (
  <>
  <img className='card-avatar' src={image} alt="" width={120} height={120} loading="lazy" />
   <div className="card-section">
    <div>
      <div className="card-columns">
        <div className="card-column is-4 is-offset-4">
          <div className="single-card">
            <div className="single-card-body">
              <div className="user-meta has-text-centered">
                <h3 className="username text-center">{name}</h3>
                <h5 className="position whitespace-pre-wrap">{position}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </>
 
)

export const ExecutiveCommiteeMembers = () => {
  const { language } = useLanguage();

  return (
  <div>
    <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pt-5 mt-5 mb-0">{header[language]}</h2>
    <div className="container">
      <ul className="cards">
        {ExecutiveMembers.map((member, index) => (
           <li className="card">
            <MemberCard name={member.name[language]} position={member.position[language]} image={member.image} />
          </li>
          )
        )}
      </ul>
    </div>
  </div>
)}