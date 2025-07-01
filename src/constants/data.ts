import { NewsItemDetail, NewsItemSummary } from "../types/types"
import news_6th_championship from '../assets/images/news/news_6th_championships.jpg'
import news_kata_training from '../assets/images/news/news_kata_training.jpg'
import image14 from '../assets/images//homeGallery/image14.svg'
import image13 from '../assets/images//homeGallery/image13.jpg'
import VOKCs_2025 from '../assets/images/news/VOKCs_2025.jpg'
import news_20250701 from '../assets/images/news/news_20250701.jpg'
import news_20250701_2 from '../assets/images/news/news_20250701_2.jpg'

const DIVIDER_STRING ='\n\n_______________\n\n'

export const newsItemHome: NewsItemSummary[] = [
  {
    uid: "4387a58f-b1e5-45a7-8b20-6987f6be8c0d",
    title: 'CHẤP THUẬN CHÍNH THỨC CHO GIẢI KIẾM ĐẠO QUỐC TẾ THÀNH PHỐ HỒ CHÍ MINH NĂM 2025\nOFFICIALLY APPROVAL FOR HO CHI MINH CITY INTERNATIONAL KENDO TOURNAMENT 2025',
    //summary: 'Ngày 27/06/2025, Ủy ban Nhân dân Thành phố Hồ Chí Minh đã chính thức chấp thuận cho Liên đoàn Kiếm đạo Thành phố Hồ Chí Minh tổ chức Giải Kiếm đạo Quốc tế Thành phố Hồ Chí Minh năm 2025.',
    link: "/news/4387a58f-b1e5-45a7-8b20-6987f6be8c0d",
    image: VOKCs_2025
  },
  {
    uid: "e3331b50-8b6d-41e5-aedb-d2b94b1a8042",
    title: `LIÊN ĐOÀN KIẾM ĐẠO THÀNH PHỐ HỒ CHÍ MINH BỔ NHIỆM CHÁNH VĂN PHÒNG`,
    //summary: 'Ban Chấp Hành Liên đoàn Kiếm đạo TPHCM đã công bố quyết định bổ nhiệm Thạc sỹ Nguyễn Minh Trung vào chức vụ Chánh Văn phòng Liên đoàn Kiếm đạo TPHCM',
    link: "/news/e3331b50-8b6d-41e5-aedb-d2b94b1a8042",
    image: news_20250701
  },
  {
    uid: "599f12eb-89a4-41a8-870b-efe37c395ffa",
    title: `Giải Kiếm đạo Quốc tế Thành phố Hồ Chí Minh năm 2025 - Cúp Chiến Thắng \nHo Chi Minh City International Kendo Tournament 2025 – Victory Cup`,
    // summary: 'Thông tin mới nhất về Giải Kiếm đạo Quốc tế Thành phố Hồ Chí Minh năm 2025 - Cúp Chiến Thắng',
    link: "/news/599f12eb-89a4-41a8-870b-efe37c395ffa",
    image: VOKCs_2025
  },
  {
    uid: "4",
    title: `Quy chế thi thăng cấp và đẳng, công nhận cấp và đẳng`,
    // summary: 'Quy chế thi thăng cấp và đẳng, công nhận cấp và đẳng của Liên đoàn Kiếm đạo Thành phố Hồ Chí Minh',
    link: "https://drive.google.com/file/d/1uei0gVrkoAYZl5dT2wRLGwjvnd9vun6X/view?usp=drive_link",
    image: image13
  },
  {
    uid: "3e966d44-84a7-4965-bf89-5beb81bfb0e6",
    title: `Giải vô địch kiếm đạo Quốc tế TP. Hồ Chí Minh năm 2025 – Cúp VOKCs\ nHo Chi Minh City International Kendo Tournament 2025 – VOKCs Cup`,
    // summary: 'Thư mời tham dự “Giải vô địch kiếm đạo Quốc tế TP. Hồ Chí Minh năm 2025 – Cúp VOKCs”/Invitation for “Ho Chi Minh City International Kendo Tournament 2025 – VOKCs Cup"',
    link: `/news/3e966d44-84a7-4965-bf89-5beb81bfb0e6`,
    image: "https://cdn.usegalileo.ai/sdxl10/63edc027-361c-4e76-a5d6-d466de44b41b.png"
  },
  {
    uid: "2",
    title: "Chương trình bồi dưỡng về Kendo Kata & Shinai Kendo Waza",
    // summary: "Chương trình bồi dưỡng về Kendo Kata & Shinai Kendo Waza sẽ được tổ chức tại TP. Hồ Chí Minh vào ngày 10 tháng 1 năm 2024.",
    link: "https://www.facebook.com/hochiminhcitykendofederation/posts/pfbid035JHfGR8GXivimPNjWwBTnzwZA2Zm1hKikDwd96CFWeXAXPc5QFukbFcVtaEYYyjYl",
    image: news_kata_training
  },
  {
    uid: "3",
    title: "Thông báo về Giải Vô địch Kiếm đạo Việt Nam Mở rộng lần thứ 6",
    // summary: "Giải Vô địch Kiếm đạo Việt Nam Mở rộng lần thứ 6 sẽ diễn ra tại TP. Hồ Chí Minh vào ngày 5 tháng 2 năm 2024.",
    link: "https://www.facebook.com/story.php?story_fbid=pfbid032MgFY6V5xyWcLiu5kCUH9fE1hC8TpMKj3v9vv4FWMRiEk3TBGZJe9rXxos5eHaxQl&id=100049786183240&mibextid=Nif5oz&_rdr",
    image: news_6th_championship
  }
]

export const newsItemDetail: NewsItemDetail[] = [
  {
    uid: "3e966d44-84a7-4965-bf89-5beb81bfb0e6",
    title: `Giải vô địch kiếm đạo Quốc tế TP. Hồ Chí Minh năm 2025 – Cúp VOKCs \nHo Chi Minh City International Kendo Tournament 2025 – VOKCs Cup`,
    content: `
**THÔNG BÁO GIẢI KIẾM ĐẠO QUỐC TẾ TP. HỒ CHÍ MINH NĂM 2025 - CÚP VOKCS**
**_HO CHI MINH CITY INTERNATIONAL KENDO TOURNAMENT 2025 – VOKCS CUP_**

Giải Vô địch Kiếm đạo Việt Nam mở rộng (Vietnam Open Kendo Championships - VOKCs) đã trở thành giải thi đấu quốc tế truyền thống và uy tín do Liên đoàn Kiếm đạo Thành phố Hồ Chí Minh tổ chức từ năm 2014 đến nay. Với thành công đó, Liên đoàn Kiếm đạo Thành phố Hồ Chí Minh quyết định nâng tầm giải đấu thành một giải đấu quốc tế.
_Vietnam Open Kendo Championships (VOKCs) has become a traditional and reputable international tournament organized by Ho Chi Minh City Kendo Federation since 2014 till date. Building on this success, Ho Chi Minh City Kendo Federation has decided to elevate the event to an international tournament._

Liên đoàn Kiếm đạo Thành phố Hồ Chí Minh thông báo “Giải vô địch kiếm đạo Quốc tế TP. Hồ Chí Minh năm 2025 – Cúp VOKCs” với các thông tin như sau:
_Ho Chi Minh City Kendo Federation would like to announce “Ho Chi Minh City International Kendo Tournament 2025 – VOKCs Cup” with the details as follows:_

1.&nbsp;Tên giải đấu: “Giải vô địch kiếm đạo Quốc tế TP. Hồ Chí Minh năm 2025 – Cúp VOKCs”.\ 
&nbsp;&nbsp;&nbsp;&nbsp;_Competition name: "Ho Chi Minh City International Kendo Tournament 2025 – VOKCs Cup"._

2.&nbsp;Thời gian: Thứ Bảy và Chủ Nhật, ngày 09 và 10 tháng 08 năm 2025.\ 
&nbsp;&nbsp;&nbsp;&nbsp;_Time: Saturday and Sunday, 09 and 10 August 2025._

3.&nbsp;Địa điểm: Nhà Thi Đấu Đa Năng Quận 7, số 504-506, đường Huỳnh Tấn Phát, phường Bình Thuận, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.\ 
&nbsp;&nbsp;&nbsp;&nbsp;_Location: District 7 Sports Complex, No. 504 Huynh Tan Phat Street, Binh Thuan Ward, District 7, Ho Chi Minh City, Vietnam_\  

&nbsp;&nbsp;&nbsp;&nbsp;Đường dẫn to the location: <u>https://maps.app.goo.gl/hChFFTVQYaQUgbLU9</u>
&nbsp;&nbsp;&nbsp;&nbsp;_Link to the location: <u>https://maps.app.goo.gl/hChFFTVQYaQUgbLU9_</u>

4.&nbsp;Cơ quan chỉ đạo: Sở văn hóa và thể thao Tp. Hồ Chí Minh
&nbsp;&nbsp;&nbsp;&nbsp;_Directing agency: Ho Chi Minh City Department of Culture and Sports_

5.&nbsp;Cơ quan điều hành: Liên đoàn Kiếm đạo Thành phố Hồ Chí Minh
&nbsp;&nbsp;&nbsp;&nbsp;_Managing body: Ho Chi Minh City Kendo Federation_

6.&nbsp;Các nội dung thi đấu:
&nbsp;&nbsp;&nbsp;&nbsp;_Competition events:_ 

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;**Cá Nhân Nam Trẻ em**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_Children Individual (Boys)_**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không giới hạn số lượng các vận động viên tham gia. Các vận động viên phải từ đủ 12 tuổi đến dưới 16 tuổi.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_There is no limit to the number of athletes participating. Athletes must be from 12 to under 16 years of age._

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;**Cá Nhân Nữ Trẻ em**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_Children Individual (Girls)_**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không giới hạn số lượng các vận động viên tham gia. Các vận động viên phải từ đủ 12 tuổi đến dưới 16 tuổi.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_There is no limit to the number of athletes participating. Athletes must be from 12 to under 16 years of age._

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;**Cá nhân nam (dưới 01 đẳng)**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_Men individual (under 01 dan)_**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không giới hạn số lượng các vận động viên tham gia. Các vận động viên phải từ 16 tuổi trở lên.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_There is no limit to the number of athletes participating. Athletes must be from 16 years of age and more._

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;**Cá nhân nam (01 đẳng)**\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_Men individual (01 dan)_**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không giới hạn số lượng các vận động viên tham gia.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_There is no limit to the number of athletes participating._

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;**Cá nhân nam (02 đẳng)**\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_Men individual (02 dan)_**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không giới hạn số lượng các vận động viên tham gia.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_There is no limit to the number of athletes participating._

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;**Cá nhân nam (03 đẳng)**\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_Men individual (03 dan)_**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không giới hạn số lượng các vận động viên tham gia.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_There is no limit to the number of athletes participating._

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;**Cá nhân nam (4 đẳng trở lên)**\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_Men individual (4 dan and above)_**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không giới hạn số lượng các vận động viên tham gia.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_There is no limit to the number of athletes participating._

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;**Cá nhân nữ (dưới 01 đẳng)**\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_Women individual (under 01 dan)_**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không giới hạn số lượng các vận động viên tham gia. Các vận động viên phải từ 16 tuổi trở lên.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_There is no limit to the number of athletes participating. Athletes must be from 16 years of age and more._

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;**Cá nhân nữ (01 đẳng)**\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_Women individual (01 dan)_**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không giới hạn số lượng các vận động viên tham gia.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_There is no limit to the number of athletes participating._

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;**Cá nhân nữ (2 đẳng trở lên)**\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_Women individual (2 dan and above)_**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không giới hạn số lượng các vận động viên tham gia.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_There is no limit to the number of athletes participating._

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;**Ðồng đội nam (03 thành viên/đội)**\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_Men team (3 members/team)_**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không giới hạn số lượng đội tham gia. Các vận động viên phải từ đủ 16 tuổi trở lên.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_There is no limit to the number of teams participating. Athletes must be from 16 years of age and more._

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;**Ðồng đội nữ (03 thành viên/đội)**\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_Women team (3 members/team)_**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không giới hạn số lượng đội tham gia. Các vận động viên phải từ đủ 16 tuổi trở lên.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_There is no limit to the number of teams participating. Athletes must be from 16 years of age and more._

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;**Ðồng đội nam (05 thành viên/đội)**\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_Men team (5 members/team)_**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không giới hạn số lượng đội tham gia. Các vận động viên phải từ đủ 16 tuổi trở lên.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_There is no limit to the number of teams participating. Athletes must be from 16 years of age and more._

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;**Ðồng đội nữ (05 thành viên/đội)**\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_Women team (5 members/team)_**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không giới hạn số lượng đội tham gia. Các vận động viên phải từ đủ 16 tuổi trở lên.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_There is no limit to the number of teams participating. Athletes must be from 16 years of age and more._



&nbsp;**Lưu ý quan trọng:**\ 
&nbsp;**_Important notes:_**

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp; Mỗi vận động viên được quyền đăng ký tối đa **<u>01 nội dung thi đấu cá nhân và 01 nội dung thi đấu đồng đội;</u>**\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Each athlete is allowed to register for a maximum of **<u>01 individual and 01 team competition category.</u>**_
 

&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp; Ban Tổ chức có quyền hủy nội dung thi đấu nếu không đủ số lượng vận động viên hoặc đội tham dự hoặc lý do khác theo quyết định của Ban Tổ chức.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_The Organizing Committee reserves the right to cancel an event if there are insufficient athletes or teams participating, or for other reasons as decided by the Organizing Committee._


**7.&nbsp;Khen thưởng**\ 
&nbsp;&nbsp;&nbsp;&nbsp;**_Prizes_**

&nbsp;&nbsp;a. Các nội dung cá nhân:\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Prizes for men/women’s singles:_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp; 01 Giải Vô địch: Cúp vô địch và Huy chương vàng\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_01 Championship: Champion Trophy and Gold Medal_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp; 01 Giải Á quân: Huy chương bạc\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_01 Runner-up: Silver Medal_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp; 02 Giải Hạng Ba: Huy chương đồng\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_02 Third Place Prizes: Bronze Medals_

&nbsp;&nbsp;b. Các nội dung đồng đội:\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Prizes for teams:_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp; 01 Giải Vô địch: cúp vô địch và huy chương vàng cho từng thành viên\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_01 Championship: Championship trophy and gold medal for each member_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp; 01 Giải Á quân:  Huy chương bạc cho từng thành viên\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_01 Runner-up: Silver medal for each member_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp; 02 Giải Hạng Ba: Huy chương đồng cho từng thành viên\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_02 Third Place Prize: Bronze medal for each member_


**8.&nbsp;Phí tham dự:**\ 
&nbsp;&nbsp;&nbsp;&nbsp;**_Participation fee:_**

&nbsp;&nbsp;* Đối với VĐV Việt Nam: 500.000đồng/VĐV/ mỗi nội dung thi đấu.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_For Vietnamese players: VND500,000/player/each competition category._

&nbsp;&nbsp;* Đối với VĐV Nước ngoài: 25USD/VĐV/mỗi nội dung thi đấu.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_For foreigner players: USD25/player/each competition category._

&nbsp;&nbsp;* Tài khoản thanh toán phí tham dự:\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Bank account for the payment of the participation fee:_


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Số tài khoản: **1027136033** tại Ngân hàng TMCP Ngoại Thương Việt Nam – Chi nhánh Tân Định (Vietcombank Tân Định)\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Account No.: **1027136033** at Foreign Trade Joint Stock Bank of Vietnam, Tan Dinh Branch (Vietcombank Tan Dinh)_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chủ tài khoản: Liên đoàn Kiếm đạo Thành phố Hồ Chí Minh\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Account name: Ho Chi Minh City Kendo Federation_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nội dung: “**[Tên người tham dự][Phí tham dự Giải vô địch kiếm đạo Quốc tế TP. Hồ Chí Minh năm 2025 – Cúp VOKCs]**”\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Description: “**[Full name] [Participation fee for ”Ho Chi Minh City International Kendo Tournament 2025 – VOKCs Cup"]**_"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mã Swift code của Ngân hàng TMCP Ngoại Thương Việt Nam – Chi nhánh Tân Định (Vietcombank Tân Định): **BFTVVNVX037**\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Swift code of Foreign Trade Joint Stock Bank of Vietnam, Tan Dinh Branch (Vietcombank Tan Dinh): **BFTVVNVX037**_


**9.&nbsp;Hồ sơ đăng ký tham dự**\ 
**_Application for registration_**
 
&nbsp;&nbsp;a. Hồ sơ tham dự:\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Attendance application:_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(i)&nbsp;&nbsp; Đơn tham dự giải (có ảnh);\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    _Competition registration form (with photo);_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(ii)&nbsp;&nbsp; CMND, CCCD hoặc Hộ chiếu (đối với người Việt Nam); hộ chiếu (đối với người nước ngoài).\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     _ID Card or Passport (for Vietnamese); passport (for foreigner)._


&nbsp;&nbsp;b. Đăng ký\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Registration_
    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hạn chót đăng ký tham dự: hết ngày 15/06/2025.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Deadline for registration: end of 15 June 2025._

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hồ sơ gửi về email **<u>admin@kcmkendo.org.vn</u>** hoặc gửi bưu điện về Trụ sở Liên đoàn Kiếm đạo TPHCM, số 725/14 Trường Chinh, Tây Thạnh, Tân Phú, TPHCM, Việt Nam.\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Application files should be sent via email to **<u>admin@kcmkendo.org.vn</u>** or sent by post to the Headquarters of Ho Chi Minh City Kendo Federation, 725/14 Truong Chinh, Tay Thanh, Tan Phu, Ho Chi Minh City, Vietnam.._\
 



Liên đoàn Kiếm đạo Thành phố Hồ Chí Minh trân trọng kính mời các thành viên của quý câu lạc bộ tham gia giải đấu trên.\ 
_Ho Chi Minh City Kendo Federation respectfully invites the members of your esteemed club to participate in the tournament as above mentioned._


Trong trường hợp quý kiếm hữu cần thêm bất cứ thông tin hoặc hỗ trợ nào từ chúng tôi, xin vui lòng liên hệ:
_In case your esteemed kendo practitioners need any further information or assistance from us, please feel free to contact:_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     Ông Trần Thanh Tùng – Chủ tịch Liên đoàn Kiếm đạo TPHCM\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     _Mr. Tran Thanh Tung – President of Ho Chi Minh City Kendo Federation_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     ĐT: (84) (0) 903170317\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     _Telephone No:  (84) (0) 903170317_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     Email: **<u>tung.tran@hcmkendo.org.vn</u>** hoặc **<u>admin@kcmkendo.org.vn</u>**\ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     _Email: **<u>tung.tran@hcmkendo.org.vn</u>** or **<u>admin@kcmkendo.org.vn</u>**_


Trân trọng
_Yours respectfully_

LIÊN ĐOÀN KIẾM ĐẠO THÀNH PHỐ HỒ CHÍ MINH
_HO CHI MINH CITY KENDO FEDERATION_`,
    date: "June 1, 2025",
    attachmentLinks: [
      {name: "HKF - Charter HIK 2025 (VOKs Cup) B", url: "https://drive.google.com/file/d/1q1goaZC3hwA4TVTTRduwp2B4wTS2qh1k/view?usp=drive_link"},
      {name: "VOKCs Application EV", url: "https://docs.google.com/document/d/1IsUxDVoWqEqlKaGjaptgCD_vWHQQUIwH/edit?usp=drive_link&ouid=113280824326192510471&rtpof=true&sd=true"}
    ],
    image: image14
  },
  {
    uid: "599f12eb-89a4-41a8-870b-efe37c395ffa",
    title: `Giải Kiếm đạo Quốc tế Thành phố Hồ Chí Minh năm 2025 - Cúp Chiến Thắng \nHo Chi Minh City International Kendo Tournament 2025 – Victory Cup`,
    content: 'Ngày 25/06/2025, Liên đoàn Kiếm đạo Thành phố Hồ Chí Minh đã nhận được Công văn số 939/TDTTVN-TTTC của Cục Thể dục Thể thao Việt Nam, Bộ Văn Hóa Thể thao và Du lịch về việc tổ chức Giải Kiếm đạo Quốc tế Thành phố Hồ Chí Minh, theo đó, Cục Thể dục Thể thao Việt Nam đồng ý cho Liên đoàn Kiếm đạo Thành phố Hồ Chí Minh tổ chức Giải Kiếm đạo Quốc tế Thành phố Hồ Chí Minh năm 2025.\n\nNhân dịp 50 năm ngày thống nhất đất nước, Giải Kiếm đạo Quốc tế Thành phố Hồ Chí Minh năm 2025 sẽ có tên riêng là “Giải Kiếm đạo Quốc tế Thành phố Hồ Chí Minh năm 2025 - Cúp Chiến Thắng).  Đây là giải đấu trong khuôn khổ hệ thống giải đấu quốc tế “Vietnam Open Kendo Championships” (VKOCs) đã được Liên đoàn Kiếm đạo Thành phố Hồ Chí Minh tổ chức từ năm 2014 đến nay.\n\nGiải dự kiến quy tụ hơn 200 vận động viên và huấn luyện viên đến từ quốc gia và vùng lãnh thổ: Việt Nam, Hàn Quốc, Nhật Bản, Trung Quốc, Liên bang Nga, Philippines, Cambodia, Nam Phi, Đài Loan.\n\nSẵn sàng cho Giải Kiếm đạo Quốc tế Thành phố Hồ Chí Minh năm 2025!\n\n_______________\n\nOn June 25, 2025, Ho Chi Minh City Kendo Federation officially received Official Letter No. 939/TDTTVN-TTTC from Vietnam Sports Administration under the Ministry of Culture, Sports and Tourism regarding the organization of the Ho Chi Minh City International Kendo Tournament. Accordingly, Vietnam Sports Administration has approved for Ho Chi Minh City Kendo Federation to organize Ho Chi Minh City International Kendo Tournament 2025.\n\nOn the occasion of the 50th anniversary of national reunification, the tournament will bear the special title: "Ho Chi Minh City International Kendo Tournament 2025 – Victory Cup."\n\nThis event is part of the international competition system known as  Vietnam Open Kendo Championships (VKOCs), which has been organized by Ho Chi Minh City Kendo Federation since 2014.\n\nThe tournament is expected to attract over 200 athletes and coaches from various countries and territories, including Vietnam, South Korea, Japan, China, the Russian Federation, the Philippines, Cambodia, South Africa, and Taiwan.\n\nGet ready for Ho Chi Minh City International Kendo Tournament 2025!',
    date: "June 26, 2025",
    attachmentLinks: [],
    image: VOKCs_2025
  },
  {
    uid: "e3331b50-8b6d-41e5-aedb-d2b94b1a8042",
    title: `LIÊN ĐOÀN KIẾM ĐẠO THÀNH PHỐ HỒ CHÍ MINH BỔ NHIỆM CHÁNH VĂN PHÒNG`,
    content: 'Chiều ngày 26/06/2025, tại Văn phòng Trung tâm Huấn luyện và Thi đấu Thể dục Thể thao TPHCM, số 02 Lê Đại Hành, Phường 15, Quận 11, TPHCM,  theo sự đề nghị của Tổng Thư Ký, Ban Chấp Hành Liên đoàn Kiếm đạo TPHCM đã công bố quyết định bổ nhiệm Thạc sỹ Nguyễn Minh Trung vào chức vụ Chánh Văn phòng Liên đoàn Kiếm đạo TPHCM. Việc bổ nhiệm Chánh Văn phòng nhằm tiếp tục củng cố cơ cấu tổ chức và tăng cường hoạt động của Liên đoàn Kiếm đạo TPHCM, chuẩn bị cho nhiệm kỳ tiếp theo.\n\nChánh Văn phòng là người đứng đầu Văn phòng Liên đoàn, có trách nhiệm chỉ đạo, điều hành Văn phòng Liên đoàn và chịu trách nhiệm trực tiếp trước Tổng Thư Ký và Chủ tịch đối với các hoạt động của Văn phòng.\n\nThạc sỹ Nguyễn Minh Trung hiện là giảng viên của Đại học Công Thương Thành phố Hồ Chí Minh với gần 20 năm kinh nghiệm chuyên môn về giảng dạy và nghiên cứu, ông đồng thời đã đạt đệ nhị đẳng kiếm đạo và đã tích cực tham gia tổ chức nhiều giải đấu, sự kiện và các hoạt động khác của Liên đoàn trong thời gian qua.\n\nTrong buổi công bố quyết định bổ nhiệm, đại diện cho Ban Chấp hành Liên đoàn Kiếm đạo TPHCM, Ông Trần Thanh Tùng, Chủ tịch Liên đoàn chúc mừng Thạc sỹ Nguyễn Minh Trung được tín nhiệm cho vị trí mới, tin tưởng rằng Ông là sự chọn lựa phù hợp đối với vị trí này, mong muốn Ông tích cực hỗ trợ Tổng Thư ký và Liên đoàn chuẩn bị thật tốt cho Giải Kiếm đạo Quốc tế TPHCM năm 2025 vào tháng 8 sắp tới.\n\nTrong lời đáp từ, Ông Trung cảm ơn sự tin tưởng của Ban Chấp hành Liên đoàn đối với ông và hứa sẽ hỗ trợ thật tốt cho Tổng Thư ký trong việc quản trị văn phòng và chuẩn bị cho Giải Kiếm đạo Quốc tế TPHCM năm 2025.\n\n#kiếmđạo #kendo #hcmkendo #KiếmđạoTPHCM',
    date: "June 29, 2025",
    attachmentLinks: [],
    image: news_20250701
  },
  {
    uid: "4387a58f-b1e5-45a7-8b20-6987f6be8c0d",
    title: `CHẤP THUẬN CHÍNH THỨC CHO GIẢI KIẾM ĐẠO QUỐC TẾ THÀNH PHỐ HỒ CHÍ MINH NĂM 2025\nOFFICIALLY APPROVAL FOR HO CHI MINH CITY INTERNATIONAL KENDO TOURNAMENT 2025`,
    content: `Ngày 27/06/2025, Ủy ban Nhân dân Thành phố Hồ Chí Minh đã chính thức chấp thuận cho Liên đoàn Kiếm đạo Thành phố Hồ Chí Minh tổ chức Giải Kiếm đạo Quốc tế Thành phố Hồ Chí Minh năm 2025.
\nĐây là giải đấu trong khuôn khổ hệ thống giải đấu quốc tế  truyền thống “Giải Vô địch Kiếm đạo Việt Nam mở rộng (Vietnam Open Kendo Championships – VKOCs)” do Liên đoàn Kiếm đạo Thành phố Hồ Chí Minh tổ chức từ năm 2014 đến nay. Nhân dịp 50 năm ngày thống nhất đất nước, Giải năm nay sẽ mang tên “Giải Kiếm đạo Quốc tế Thành phố Hồ Chí Minh năm 2025 - Cúp Chiến Thắng”.
\nCho đến hiện nay, đã có hơn 200 vận động viên và huấn luyện viên trong nước và nước ngoài đăng ký tham gia giải đấu.
\nLiên đoàn Kiếm đạo Thành Phố Hồ Chí Minh đang hoàn thiện công tác hậu cần nhằm mang đến cho vận động viên và huấn luyện viên một giải đấu hoành tráng và đáng nhớ.
\n#VietnamOpenKendoChampionships #VOKCs  #GiảiKiếmđạoQuốctếTPHCM #HCMCInternationalKendoTournament
${DIVIDER_STRING}
\nOn June 27, 2025, Ho Chi Minh City People’s Committee officially approved the Ho Chi Minh City Kendo Federation to organize Ho Chi Minh City International Kendo Tournament 2025.
\nThis tournament is part of the traditional international competition series known as “Vietnam Open Kendo Championships (VKOCs)”, which has been organized by the Ho Chi Minh City Kendo Federation since 2014. In celebration of the 50th anniversary of national reunification, this year's tournament will be titled: “Ho Chi Minh City International Kendo Tournament 2025 – Victory Cup”.
\nTo date, over 200 athletes and coaches from both domestic and international teams have registered to participate in the tournament.
\nHo Chi Minh City Kendo Federation is currently finalizing logistics arrangements and preparations to deliver a splendid and memorable event for all athletes and coaches.
\n#VietnamOpenKendoChampionships #VOKCs  #GiảiKiếmđạoQuốctếTPHCM #HCMCInternationalKendoTournament`,
    date: "June 29, 2025",
    attachmentLinks: [{
      name: "Chấp thuận chính thức cho giải Kiếm Đạo Quốc Tế Thành Phố Hồ Chí Minh năm 2025",
      url: "https://www.facebook.com/share/p/15oPZJEtks/"
    }],
    image: VOKCs_2025,
    additionalImages: [news_20250701_2]
  }
]

