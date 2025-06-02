import { JSX, SVGProps } from "react"
import { FlipCard } from "../../components/FlipCard"

const reasonsWhyLearnKendo = [
  {
    icon: <FitnessIconSvg className="w-6 h-6" />,
    title: "Rèn luyện thể lực, học cách bảo vệ bản thân",
    description: "Một trong những lợi ích lớn nhất của việc luyện tập võ thuật dù cho bộ môn nào cũng vậy chính là việc luyện tập thể lực, nâng cao sức khỏe cũng như khả năng tự vệ, bảo vệ bản thân hay thậm chí là người xung quanh khỏi những kẻ xấu."
  },
  {
    icon: <BrainIconSvg className="w-6 h-6" />,
    title: "Tập trung sự chú ý",
    description: "Khi luyện tập Kendo người học cần phải biết cách tập trung, không được phân tâm. Bởi lẽ chỉ cần đặt 1 chút chú ý đến việc khác sẽ khiến bạn phải nhận ngay 1 đòn đau điếng. "
  },
  {
    icon: <GreenNewEnergyIconSvg className="w-6 h-6" />,
    title: "Xả Stress (căng thẳng)",
    description: "Nếu đang mệt mỏi, áp lực hãy đến với sân tập Kendo - nơi bạn có thể thỏa thích hét lên mà không sợ ai nhòm ngó."
  }
]

export function FitnessIconSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81c-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42c-.54-52.67-42.32-96.81-95.08-96.81"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M48 256h112l48-96l48 160l48-96l32 64h128"
      ></path>
    </svg>
  )
}

export function BrainIconSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        color="currentColor"
      >
        <path d="M4.222 21.995v-3.55c0-1.271-.333-1.932-.987-3.037A8.888 8.888 0 0 1 10.889 2a8.89 8.89 0 0 1 8.889 8.887c0 .58 0 .87.024 1.032c.058.388.24.722.417 1.068L22 16.441l-1.4.7c-.405.202-.608.303-.749.49s-.181.399-.26.82l-.008.042c-.183.968-.384 2.036-.95 2.71c-.2.237-.448.43-.727.567c-.461.225-1.028.225-2.162.225c-.525 0-1.051.012-1.576 0c-1.243-.031-2.168-1.077-2.168-2.29"></path>
        <path d="M14.388 10.532c-.426 0-.815-.162-1.11-.427m1.11.426c0 1.146-.664 2.235-1.942 2.235S10.504 13.854 10.504 15m3.884-4.469c2.15 0 2.15-3.35 0-3.35q-.294.001-.557.095c.105-2.498-3.496-3.176-4.312-.836m.985 1.857c0-.774-.39-1.456-.985-1.857m0 0c-1.852-1.25-4.32.993-3.146 2.993c-1.97.295-1.76 3.333.247 3.333a1.66 1.66 0 0 0 1.362-.712"></path>
      </g>
    </svg>
  )
}

function GreenNewEnergyIconSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path d="M42.336 16C39.249 8.936 32.2 4 24 4S8.75 8.936 5.664 16"></path>
        <path d="M24 14a19.94 19.94 0 0 0-6 14.283q0 .75.055 1.488A19.94 19.94 0 0 1 24 44a19.94 19.94 0 0 1 5.945-14.23q.055-.736.055-1.487A19.94 19.94 0 0 0 24 14"></path>
        <path d="M4 24c0 11.046 8.954 20 20 20a19.94 19.94 0 0 0-5.945-14.23A19.94 19.94 0 0 0 4 24"></path>
        <path d="M44 24c0 11.046-8.954 20-20 20a19.94 19.94 0 0 1 5.945-14.23A19.94 19.94 0 0 1 44 24"></path>
      </g>
    </svg>
  )
}

export const WhyLearnKendo = () => {
  const renderSingleReason = (icon: JSX.Element, title: string, description: string) => (
    <div className="flex flex-1 gap-3 rounded-lg border border-[#ced6e9] bg-[#f8f9fc] p-4 flex-col">
      <div className="text-[#0d111c]" data-icon="UsersThree" data-size="24px" data-weight="regular">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-[#0d111c] text-base font-bold leading-tight">{title}</h2>
        <p className="text-[#47619e] text-sm font-normal leading-normal">{description}</p>
      </div>
    </div>
  )

  return (
    <div className="bg-white rounded-lg my-10 relative"
      style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.44)"}}
    >
      <div className="text-[#0d111c]tracking-[-0.015em] px-16 pb-3 pt-5 text-center">
        <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight mb-2">Tại sao người ta lại tập Kiếm Đạo</h2>
        <div className="divider">
          <span className="flex items-center justify-center">
            <span className="icon-[tabler--crown] size-5" />
          </span>
        </div>
        <p className="text-[#0d111c]">Kiếm đạo (Kendo) có ưu điểm gì mà lại khiến nhiều người yêu thích và có mong muốn tham gia học bộ môn võ thuật này đến vậy? Không chỉ ở Nhật Bản mà Kiếm đọa (Kendo) còn lan rộng ra toàn thế giới? Không phải tự nhiên mà Kendo lại trở nên phổ biến</p>
      </div>
     
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {reasonsWhyLearnKendo.map((reason, index) => (
          renderSingleReason(reason.icon, reason.title, reason.description)
        ))}
      </div>
    </div>
  )
}