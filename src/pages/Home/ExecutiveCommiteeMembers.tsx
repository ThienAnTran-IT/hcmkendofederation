
import LyDaiNghia from '../../assets/images/executiveMemberAvatars/LyDaiNghia.svg'
import NguyenDuyHan from '../../assets/images/executiveMemberAvatars/NguyenDuyHan.svg'
import NguyenTrongDuc from '../../assets/images/executiveMemberAvatars/NguyenTrongDuc.svg'
import PhanDuyMinh from '../../assets/images/executiveMemberAvatars/PhanDuyMinh.svg'
import PhanMinhTuan from '../../assets/images/executiveMemberAvatars/PhanMinhTuan.svg'
import NguyenSyHiep from '../../assets/images/executiveMemberAvatars/NguyenSyHiep.svg'
import QuachTrongNghia from '../../assets/images/executiveMemberAvatars/QuachTrongNghia.svg'
import TranThanhTung from '../../assets/images/executiveMemberAvatars/TranThanhTung.svg'
import NguyenDangKhoa from '../../assets/images/executiveMemberAvatars/NguyenDangKhoa.svg'
import DaoTuanAnh from '../../assets/images/executiveMemberAvatars/DaoTuanAnh.svg'
import NguyenPhuocTrung from '../../assets/images/executiveMemberAvatars/NguyenPhuocTrung.svg'
import TranHongMinh from '../../assets/images/executiveMemberAvatars/TranHongMinh.svg'




import '../../assets/styles/executive-committee.css'



interface MemberCardProps {
  name: string
  position: string
  image: string
}

const ExecutiveMembers: MemberCardProps[] = [
  {
    name: "Ông Trần Thanh Tùng",
    position: "Chủ Tịch Liên Đoàn Kiếm Đạo TP Hồ Chí Minh",
    image: TranThanhTung
  },
  {
    name: "Ông Lý Đại Nghĩa",
    position: "Phó Chủ tịch thường trực Liên Đoàn Kiếm Đạo TP Hồ Chí Minh",
    image: LyDaiNghia
  },
  {
    name: "Ông Nguyễn Sỹ Hiệp",
    position: "Phó Chủ tịch Liên Đoàn Kiếm Đạo TP Hồ Chí Minh",
    image: NguyenSyHiep
  },
  {
    name: "Ông Quách Trọng Nghĩa",
    position: "Ủy viên thường vụ Liên đoàn Kiếm đạo TP Hồ Chí Minh",
    image: QuachTrongNghia
  },
  {
    name: "Ông Nguyễn Duy Hân",
    position: "Ủy viên thường vụ Liên đoàn Kiếm đạo TP Hồ Chí Minh",
    image: NguyenDuyHan
  },
  {
    name: "Ông Nguyễn Trọng Đức",
    position: "Ủy viên thường vụ Liên đoàn Kiếm đạo TP Hồ Chí Minh",
    image: NguyenTrongDuc
  },
  {
    name: "Ông Phan Minh Tuấn",
    position: "Ủy viên Liên đoàn Kiếm Đạo TP Hồ Chí Minh",
    image: PhanMinhTuan
  },
  {
    name: "Ông Phan Duy Minh",
    position: "Ủy viên Liên đoàn Kiếm Đạo TP Hồ Chí Minh",
    image: PhanDuyMinh
  },
  {
    name: "Ông Đào Tuấn Anh",
    position: "Ủy viên Liên đoàn Kiếm Đạo TP Hồ Chí Minh",
    image: DaoTuanAnh
  },
  {
    name: "Ông Nguyễn Phước Trung",
    position: "Ủy viên Liên đoàn Kiếm Đạo TP Hồ Chí Minh",
    image: NguyenPhuocTrung
  },
  {
    name: "Ông Trần Hồng Minh",
    position: "Ủy viên Liên đoàn Kiếm Đạo TP Hồ Chí Minh",
    image: TranHongMinh
  },
  {
    name: "Ông Nguyễn Đăng Khoa",
    position: "Ủy viên Liên đoàn Kiếm Đạo TP Hồ Chí Minh",
    image: NguyenDangKhoa
  }
]


export const MemberCard = ({ name, position, image }: MemberCardProps) => (
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

export const ExecutiveCommiteeMembers = () => (
  <div>
    <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pt-5 mt-5 mb-0">Ban Chấp Hành Liên Đoàn</h2>
    <div className="container">
      <ul className="cards">
        {ExecutiveMembers.map((member, index) => (
           <li className="card">
            <MemberCard name={member.name} position={member.position} image={member.image} />
          </li>
          )
        )}
      </ul>
    </div>
  </div>
)