import ReactMarkdown from 'react-markdown'

interface QAInterface {
  question: string,
  answer: string
}

const questionAnswers: QAInterface[] = [
  {
    question: "1. Kiếm đạo (Kendo) là gì ?",
    answer: "Kendo - Ken có nghĩa là kiếm, Do có nghĩa là đạo; Kendo -Kiếm đạo hay Đạo dùng kiếm, là một môn võ thuật đánh kiếm hiện đại của Xứ sở Anh đào, Kendo được phát triển dựa trên các kỹ thuật truyền thống của kiếm sĩ Nhật. Mặc dù trước đây, môn võ chỉ phù hợp với lối sống của các samurai và chiến binh, nhưng ngày nay kiếm đạo dần được hiện đại hóa, trở thành hoạt động thể thao phổ biến dành cho cả sinh viên và người trưởng thành. "
  },
  {
    question: "2. Kiếm đạo (Kendo) gồm mấy cấp bậc?",
    answer: "Trong kiếm võ Kendo gồm 8 cấp bậc."
  },
  {
    question: "3. Trang phục khi sử dụng luyên tập Kiếm đạo (Kendo)?",
    answer: `Trang phục sử dụng khi luyện tập Kiếm đạo (Kendo) là **Hakama**
    ***A.  Áo giáp bảo vệ (Kendo-bogu)***
    Phần đầu được bảo vệ bằng mũ bảo hộ Men , thiết kế từ tấm lưới kim loại giúp người đội có thể nhìn thấy xung quanh. Ngoài ra còn có mảnh da xòe rộng trước mũ để bảo vệ cổ họng, cùng đệm chêm dùng để bảo vệ phần vai và hai bên cổ.
    Cẳng tay, cổ tay và bàn tay được bảo vệ bằng loại găng tay dài, dày và có đệm ( kote). Phần thân được bảo vệ bằng áo giáp (Do ). Phần eo và phía trước háng được bảo vệ bằng vảy (tare) . Trang phục mặc bên trong áo giáp gồm có quần ống rộng hakama đơn giản và áo kendogi (hoặc keikogi).
    ***B. Kiếm Tre (Shinai)***
    Kiếm tre shinai, được làm từ thanh tre và da ghép lại. Bộ phận của kiếm tre Shinai gồm có tsuka (chuôi kiếm) và tsuba (kiếm cách) kết nối bốn thanh tre, được cố định bằng các phụ kiện từ da và sợi dây buộc lại. Dây buộc nakayui được buộc ở đoạn giữa 2/3 thân kiếm, vừa kết nối các thanh tre vừa tạo điểm nhấn cho kiếm. Phần đầu được cố định bằng nắp cao su, gọi là "saki-gawa".`
  },
  {
    question: "4. Cách thức thi đấu và tính điểm trong Kiếm đạo ?",
    answer: `***A. Cách thức thi đấu:***
    Trong khi thi đấu kendo gồm 2 đấu thủ. Cách phân xử và tính điểm sẽ được dựa trên quy định sẵn có. Các đấu thủ khi vào sàn đấu sẽ cần phải thực hiện những nghi lễ như: chào đối thủ, tiến lên 3 bước, tay luôn trong tư thế tay cầm kiếm thủ thế sẵn, khi trân đầu ra hiệu thì bắt đầu trận đấu.
    Sàn thi đấu hình chữ nhật có diện tích là 9mx11m. Mỗi hiệp thi đấu thông thường là 4 phút, thi đấu hiệp phụ là 3 phút. Ngoài ra thời gian có thể thay đổi tùy vào từng trận đấu mà thời gian quy định là khác nhau.
    Để tấn công và đánh đòn ghi điểm, phần đầu kiếm (datotsu-bu) phải chạm vào phần được quy định trên áo giáp đối thủ. Phần đầu kiếm datotsu-bu chỉ 1/3 thanh kiếm, được đánh dấu bởi dây buộc nakayui. Phần áo giáp va chạm bao gồm các bộ phận như mũ bảo hộ, hai bên cổ tay, hai bên thân mình và phía trước cổ họng. Tất cả đều được bảo vệ thích hợp. Ngoài ra khi tấn công và đánh đòn quyết định, người tập kiếm cần phải đóng dấu (fumikomu) và hô hào lấy thanh thế (kiai) để nhận được điểm
    ***B. Cách tính điểm trong môn võ:***
    Cách tính điểm trong các cuộc thi kiếm đạo dựa trên các cú đánh quyết định cũng như tư thế, ý thức và cách tiếp cận của võ sĩ kiếm đạo.
    Điểm được trọng tài trong trận đấu phán xét và phân định. Mỗi trận đấu có 3 trọng tài quan sát. Các trọng tài sử dụng cờ màu để biểu thị số điểm mà họ muốn trao, và thường thì 2 trong số 3 người phải đồng ý cho thì điểm mới được trao. Các cuộc thi áp dụng hệ thống thi đấu để giành lấy 3 điểm trong thời gian quy định. Có ba kết quả xảy ra nếu trận đấu kết thúc với tỷ số hòa: Hikiwake (hòa), Encho (Kéo dài thời gian đấu cho đến khi một bên giành được một điểm) hoặc Hantei (trọng tài bỏ phiếu cho người chiến thắng).
`
  }
]

export const HomeQA = () => {
  const renderQAItem = (question: string, answer: string) => (
    <div className='px-4 py-2'>
      <div className="flex items-center gap-4 bg-[#f8f9fc] min-h-[60px]">
        <div className="text-[#0d111c] flex items-center justify-center rounded-lg bg-[#e6eaf4] shrink-0 size-8" data-icon="Question" data-size="24px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24A104.11 104.11 0 0 1 232 128Zm-16 0a88 88 0 1 0 -88 88A88.1 88.1 0 0 0 216 128Z"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#0d111c] text-base font-medium leading-normal line-clamp-1">{question}</p>
        </div>
        
      </div>
      <p className="text-[#47619e] text-sm font-normal ml-[50px] whitespace-pre-wrap"><ReactMarkdown>{answer}</ReactMarkdown></p>
      
    </div>
   
  )

  return (
    <div className="mt-10 mb-10">
      <div className="leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        <h2 className="text-[#0d111c] text-[22px] font-bold mb-2">Tìm hiểu về môn Kiếm Đạo</h2>
        <p className="text-[#0d111c]">Kiếm đạo (Kendo): Môn võ Nhật Bản chứa đựng đầy tính nghệ thuật. Nếu bạn là người đam mê với nền văn hóa Nhật Bản, yêu thích các môn võ truyền thống Nhật Bản thì chắc không thể không biết đến Kendo – môn võ đấu kiếm hiện đại của Xứ sở Hoa anh đào.</p>
      </div>
    {
      questionAnswers.map((qa, index) => (
        <div key={index}>
          {renderQAItem(qa.question, qa.answer)}
        </div>
      ))
    }
    </div>
  )
}