import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import '../../assets/styles/HomeQA.css'
import { ArrowRight } from '../../components/icons/ArrowRight'
import { ArrowDown } from '../../components/icons/ArrowDown'
import { useLanguage } from '../../components/LanguageContext';
import { LangLabel } from '../../types/types';

interface QAInterface {
  question: LangLabel,
  answer: LangLabel
}

const header = {
  "vi": "Tìm hiểu về môn Kiếm Đạo",
  "en": "Learn about Kendo"
}

const subHeader = {
  "vi": "Kiếm đạo (Kendo): Môn võ Nhật Bản chứa đựng đầy tính nghệ thuật. Nếu bạn là người đam mê với nền văn hóa Nhật Bản, yêu thích các môn võ truyền thống Nhật Bản thì chắc không thể không biết đến Kendo – môn võ đấu kiếm hiện đại của Xứ sở Hoa anh đào.",
  "en": "Kendo (the way of the sword) is a Japanese martial art rich in artistry. If you are passionate about Japanese culture and traditional martial arts, you surely cannot miss Kendo – the modern sword-fighting martial art from the Land of the Rising Sun."
}

const questionAnswers: QAInterface[] = [
  {
    question: {
      vi: "1. Kiếm đạo (Kendo) là gì ?",
      en: "1. What is Kendo?"
    },
    answer: {
      vi: "Kendo - Ken có nghĩa là kiếm, Do có nghĩa là đạo; Kendo -Kiếm đạo hay Đạo dùng kiếm, là một môn võ thuật đánh kiếm hiện đại của Xứ sở Anh đào, Kendo được phát triển dựa trên các kỹ thuật truyền thống của kiếm sĩ Nhật. Mặc dù trước đây, môn võ chỉ phù hợp với lối sống của các samurai và chiến binh, nhưng ngày nay kiếm đạo dần được hiện đại hóa, trở thành hoạt động thể thao phổ biến dành cho cả sinh viên và người trưởng thành. ",
      en: "Kendo - 'Ken' means sword, 'Do' means way; Kendo, or the way of the sword, is a modern Japanese martial art of sword fighting, developed from the traditional techniques of Japanese swordsmen. While it was once suited only to the lifestyle of samurai and warriors, today Kendo has been modernized and become a popular sport for both students and adults."
    }
  },
  {
    question: {
      vi: "2. Kiếm đạo (Kendo) gồm mấy cấp bậc?",
      en: "2. How many ranks are there in Kendo?"
    },
    answer: {
      vi: "Trong kiếm võ Kendo gồm 8 cấp bậc.",
      en: "There are 8 ranks in Kendo."
    }
  },
  {
    question: {
      vi: "3. Trang phục khi sử dụng luyên tập Kiếm đạo (Kendo)?",
      en: "3. What equipment is used for Kendo practice?"
    },
    answer: {
      vi: `Trang phục sử dụng khi luyện tập Kiếm đạo (Kendo) là **Hakama**
    ***A.  Áo giáp bảo vệ (Kendo-bogu)***
    Phần đầu được bảo vệ bằng mũ bảo hộ Men , thiết kế từ tấm lưới kim loại giúp người đội có thể nhìn thấy xung quanh. Ngoài ra còn có mảnh da xòe rộng trước mũ để bảo vệ cổ họng, cùng đệm chêm dùng để bảo vệ phần vai và hai bên cổ.
    Cẳng tay, cổ tay và bàn tay được bảo vệ bằng loại găng tay dài, dày và có đệm ( kote). Phần thân được bảo vệ bằng áo giáp (Do ). Phần eo và phía trước háng được bảo vệ bằng vảy (tare) . Trang phục mặc bên trong áo giáp gồm có quần ống rộng hakama đơn giản và áo kendogi (hoặc keikogi).
    ***B. Kiếm Tre (Shinai)***
    Kiếm tre shinai, được làm từ thanh tre và da ghép lại. Bộ phận của kiếm tre Shinai gồm có tsuka (chuôi kiếm) và tsuba (kiếm cách) kết nối bốn thanh tre, được cố định bằng các phụ kiện từ da và sợi dây buộc lại. Dây buộc nakayui được buộc ở đoạn giữa 2/3 thân kiếm, vừa kết nối các thanh tre vừa tạo điểm nhấn cho kiếm. Phần đầu được cố định bằng nắp cao su, gọi là "saki-gawa".`,
      en: `The outfit for Kendo practice is called **Hakama**.
    ***A. Protective Armor (Kendo-bogu)***
    The head is protected by a Men helmet, designed with a metal mesh for visibility, a wide leather flap to protect the throat, and padding for the shoulders and sides of the neck.
    Forearms, wrists, and hands are protected by long, thick, padded gloves (kote). The torso is protected by a breastplate (Do). The waist and groin are protected by a skirt-like armor (tare). Under the armor, practitioners wear wide-legged hakama pants and a kendogi (or keikogi) jacket.
    ***B. Bamboo Sword (Shinai)***
    The shinai is made from strips of bamboo and leather. Its parts include the tsuka (handle) and tsuba (guard), which connect four bamboo slats, held together by leather fittings and string. The nakayui string is tied about two-thirds down the blade, both connecting the slats and marking the striking area. The tip is capped with a rubber piece called "saki-gawa."`
    }
  },
  {
    question: {
      vi: "4. Cách thức thi đấu và tính điểm trong Kiếm đạo ?",
      en: "4. How are matches conducted and scored in Kendo?"
    },
    answer: {
      vi: `***A. Cách thức thi đấu:***
    Trong khi thi đấu kendo gồm 2 đấu thủ. Cách phân xử và tính điểm sẽ được dựa trên quy định sẵn có. Các đấu thủ khi vào sàn đấu sẽ cần phải thực hiện những nghi lễ như: chào đối thủ, tiến lên 3 bước, tay luôn trong tư thế tay cầm kiếm thủ thế sẵn, khi trân đầu ra hiệu thì bắt đầu trận đấu.
    Sàn thi đấu hình chữ nhật có diện tích là 9mx11m. Mỗi hiệp thi đấu thông thường là 4 phút, thi đấu hiệp phụ là 3 phút. Ngoài ra thời gian có thể thay đổi tùy vào từng trận đấu mà thời gian quy định là khác nhau.
    Để tấn công và đánh đòn ghi điểm, phần đầu kiếm (datotsu-bu) phải chạm vào phần được quy định trên áo giáp đối thủ. Phần đầu kiếm datotsu-bu chỉ 1/3 thanh kiếm, được đánh dấu bởi dây buộc nakayui. Phần áo giáp va chạm bao gồm các bộ phận như mũ bảo hộ, hai bên cổ tay, hai bên thân mình và phía trước cổ họng. Tất cả đều được bảo vệ thích hợp. Ngoài ra khi tấn công và đánh đòn quyết định, người tập kiếm cần phải đóng dấu (fumikomu) và hô hào lấy thanh thế (kiai) để nhận được điểm
    ***B. Cách tính điểm trong môn võ:***
    Cách tính điểm trong các cuộc thi kiếm đạo dựa trên các cú đánh quyết định cũng như tư thế, ý thức và cách tiếp cận của võ sĩ kiếm đạo.
    Điểm được trọng tài trong trận đấu phán xét và phân định. Mỗi trận đấu có 3 trọng tài quan sát. Các trọng tài sử dụng cờ màu để biểu thị số điểm mà họ muốn trao, và thường thì 2 trong số 3 người phải đồng ý cho thì điểm mới được trao. Các cuộc thi áp dụng hệ thống thi đấu để giành lấy 3 điểm trong thời gian quy định. Có ba kết quả xảy ra nếu trận đấu kết thúc với tỷ số hòa: Hikiwake (hòa), Encho (Kéo dài thời gian đấu cho đến khi một bên giành được một điểm) hoặc Hantei (trọng tài bỏ phiếu cho người chiến thắng).
`,
      en: `***A. Match Procedure:***
    Kendo matches are between two competitors. Judging and scoring follow established rules. Upon entering the ring, competitors perform rituals such as bowing, taking three steps forward, and holding their swords in a ready stance. The match begins at the referee's signal.
    The ring is a rectangle, 9m x 11m. Each match usually lasts 4 minutes, with overtime (3 minutes) if needed. Times may vary by event.
    To score, the tip of the sword (datotsu-bu) must strike a designated area on the opponent's armor. Only the top third of the sword, marked by the nakayui string, is valid for scoring. Target areas include the helmet, wrists, torso, and throat, all properly protected. To earn a point, the strike must be accompanied by a strong stance (fumikomu) and a spirited shout (kiai).
    ***B. Scoring:***
    Points are awarded based on decisive strikes, posture, spirit, and approach. Three referees judge each match, using colored flags to indicate points. At least two of three must agree for a point to be awarded. Matches are typically to three points within the time limit. If tied, the result may be Hikiwake (draw), Encho (overtime until one scores), or Hantei (referee vote for winner).`
    }
  }
];

export const HomeQA = () => {
  const [openingIndex, setOpentingIndex] = useState<number | null>(null)
  const { language } = useLanguage();

  const renderQAItem = (question: string, answer: string, index: number) => (
    <div className='px-4 py-2 QAItem'>
      <div
        className="flex items-center justify-between gap-4 bg-[#f8f9fc] min-h-[50px]"
        onClick={() => setOpentingIndex(openingIndex === index ? null : index)}
      >
        <div className="flex items-center gap-3 flex-1">
          <div className="text-[#0d111c] flex items-center justify-center rounded-lg bg-[#e6eaf4] shrink-0 size-8" data-icon="Question" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24A104.11 104.11 0 0 1 232 128Zm-16 0a88 88 0 1 0 -88 88A88.1 88.1 0 0 0 216 128Z"
              ></path>
            </svg>
          </div>
          <p className="text-[#0d111c] text-base font-medium leading-normal line-clamp-1">{question}</p>
        </div>
        
        <div className="flex items-center ml-2">
          {openingIndex === index ? <ArrowDown /> : <ArrowRight />}
        </div>
      </div>
      {openingIndex === index && (
        <p className="text-[#47619e] text-sm font-normal ml-[50px] whitespace-pre-wrap text-justify">
          <ReactMarkdown>{answer}</ReactMarkdown>
        </p>
      )}
    </div>
  )

  return (
    <div className="mt-10 mb-10">
      <div className="leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        <h2 className="text-[#0d111c] text-[22px] font-bold mb-2">{header[language]}</h2>
        <p className="text-[#0d111c] text-justify">{subHeader[language]}</p>
      </div>
    {
      questionAnswers.map((qa, index) => (
        <div key={index}>
          {renderQAItem(qa.question[language], qa.answer[language], index)}
        </div>
      ))
    }
    </div>
  )
}