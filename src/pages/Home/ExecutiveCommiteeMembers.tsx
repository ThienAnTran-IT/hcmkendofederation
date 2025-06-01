
import LyDaiNghia from '../../assets/images/executiveMemberAvatars/LyDaiNghia.svg'
import NguyenDuyHan from '../../assets/images/executiveMemberAvatars/NguyenDuyHan.svg'
import NguyenTrongDuc from '../../assets/images/executiveMemberAvatars/NguyenTrongDuc.svg'
import PhanDuyMinh from '../../assets/images/executiveMemberAvatars/PhanDuyMinh.svg'
import PhanMinhTuan from '../../assets/images/executiveMemberAvatars/PhanMinhTuan.svg'
import QuachQuocThinh from '../../assets/images/executiveMemberAvatars/QuachQuocThinh.svg'
import QuachTrongNghia from '../../assets/images/executiveMemberAvatars/QuachTrongNghia.svg'
import TranThanhTung from '../../assets/images/executiveMemberAvatars/TranThanhTung.svg'
import manicon from '../../assets/images/executiveMemberAvatars/manicon.svg'
import '../../assets/styles/executive-committee.css'



interface MemberCardProps {
  name: string
  position: string
  image: string
}

const ExecutiveMembers: MemberCardProps[] = [
  {
    name: "Ông Trần Thanh Tùng",
    position: "Chủ Tịch Liên Đoàn Kiếm Đạo Thành phố Hồ Chí Minh",
    image: TranThanhTung
  },
  {
    name: "TS. Lý Đại Nghĩa",
    position: "Phó CT Liên Đoàn Kiếm Đạo Thành phố Hồ Chí Minh",
    image: LyDaiNghia
  },
  {
    name: "Ông Nguyễn Sỹ Hiệp",
    position: "Phó CT Liên Đoàn Kiếm Đạo Thành phố Hồ Chí Minh",
    image: manicon
  },
  {
    name: "Ông Phan Minh Tuấn",
    position: "Ủy viên BCH LĐ Kiếm Đạo Thành phố Hồ Chí Minh",
    image: PhanMinhTuan
  },
  {
    name: "Ông Quách Trọng Nghĩa",
    position: "Tổng Thư ký Liên đoàn Kiếm đạo Thành phố Hồ Chí Minh",
    image: QuachTrongNghia
  },
  {
    name: "Ông Nguyễn Duy Hân",
    position: "Phó Tổng Thư ký LĐ Kiếm đạo Thành phố Hồ Chí Minh",
    image: NguyenDuyHan
  },
  {
    name: "Ông Phan Duy Minh ",
    position: "Ủy viên BCH LĐ Kiếm Đạo Thành phố Hồ Chí Minh",
    image: PhanDuyMinh
  },
  {
    name: "Ông Quách Quốc Thịnh",
    position: "Ủy viên BCH LĐ Kiếm Đạo Thành phố Hồ Chí Minh",
    image: QuachQuocThinh
  },
  {
    name: "Ông Nguyễn Trọng Đức",
    position: "Ủy viên BCH LĐ Kiếm Đạo Thành phố Hồ Chí Minh",
    image: NguyenTrongDuc
  }
]


export const MemberCard = ({ name, position, image }: MemberCardProps) => (
  <>
  <img className='card-avatar' src={image} alt="" width={120} height={120} />
   <div className="card-section">
    <div>
      <div className="card-columns">
        <div className="card-column is-4 is-offset-4">
          <div className="single-card">
            <div className="single-card-body">
              <div className="user-meta has-text-centered">
                <h3 className="username text-center">{name}</h3>
                <h5 className="position">{position}</h5>
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
    <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 mb-1 mt-2">Gallery</h2>
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