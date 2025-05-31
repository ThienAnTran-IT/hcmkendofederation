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
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    name: "Ông Trần Thanh Tùng",
    position: "Chủ Tịch Liên Đoàn Kiếm Đạo Thành phố Hồ Chí Minh",
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    name: "Ông Trần Thanh Tùng",
    position: "Chủ Tịch Liên Đoàn Kiếm Đạo Thành phố Hồ Chí Minh",
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    name: "Ông Trần Thanh Tùng",
    position: "Chủ Tịch Liên Đoàn Kiếm Đạo Thành phố Hồ Chí Minh",
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    name: "Ông Trần Thanh Tùng",
    position: "Chủ Tịch Liên Đoàn Kiếm Đạo Thành phố Hồ Chí Minh",
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    name: "Ông Trần Thanh Tùng",
    position: "Chủ Tịch Liên Đoàn Kiếm Đạo Thành phố Hồ Chí Minh",
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    name: "Ông Trần Thanh Tùng",
    position: "Chủ Tịch Liên Đoàn Kiếm Đạo Thành phố Hồ Chí Minh",
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    name: "Ông Trần Thanh Tùng",
    position: "Chủ Tịch Liên Đoàn Kiếm Đạo Thành phố Hồ Chí Minh",
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    name: "Ông Trần Thanh Tùng",
    position: "Chủ Tịch Liên Đoàn Kiếm Đạo Thành phố Hồ Chí Minh",
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  }
]


export const MemberCard = ({ name, position, image }: MemberCardProps) => (
  <>
  <img className='card-avatar' src={image} alt="" />
   <div className="card-section">
    <div>
      <div className="card-columns">
        <div className="card-column is-4 is-offset-4">
          <div className="single-card">
            <div className="single-card-body">
              <div className="user-meta has-text-centered">
                <h3 className="username">{name}</h3>
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