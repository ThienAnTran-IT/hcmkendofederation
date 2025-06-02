import image15 from '../../assets/images/homeGallery/image15.svg'

export const OurStory = () => {
  return (
    <div>
      <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Câu chuyện về KENDO</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/7f9faafc-6891-405f-9320-c1fdb3969978.png");'
            style={{ backgroundImage: `url(${image15})` }}
          ></div>
        </div>
      </div>
      <p className="text-[#0d111c] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Sự xuất hiện của Nihonto, hay còn gọi là kiếm Nhật vào thời Heian (794 - 1185) là bắt nguồn cho sự ra đời của môn võ kiếm đạo. Lưỡi kiếm cong đặc trưng cùng đường kiếm độc đáo tạo nên nghệ thuật kiếm đạo chuyên biệt được các võ sĩ đạo Samurai thời bấy giờ phát triển. Kiếm thuật kết hợp với nhiều kỹ thuật võ đạo khác, áp dụng kỹ năng được sử dụng trong các cuộc chinh chiến đường dài cũng như đấu võ trên lưng ngựa.
      </p>
      <p className="text-[#0d111c] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Trong suốt thời kỳ Edo (1603 - 1867) yên bình, ý nghĩa trọng tâm của kiếm thuật chuyển từ vũ lực sang việc tu dưỡng nhân cách con người, tập trung vào lối sống có kỷ luật và phát triển khái niệm Katsunin-ken , mang ý nghĩa "thanh kiếm mang lại sự sống". 
      </p>
      <p className="text-[#0d111c] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Kiếm tre bắt đầu phổ biến vào thế kỷ 18 để người bình thường có thể luyện tập mà không bị thương. Và cũng trong một thời gian này, kiếm đạo được đưa vào môn học bắt buộc tại các trường học Nhật Bản.Vào năm 1952 Liên đoàn Kiếm đạo Nhật Bản được thành lập và chính thức được công nhận vào năm 1954. Cho đến năm 1970, Liên đoàn Kiếm đạo Quốc tế được thành lập và Giải vô địch Kiếm đạo Thế giới đầu tiên được tổ chức tại thủ đô Tokyo cùng năm đó. Ngày nay, có đến hơn 50 quốc gia tham gia. Cuộc thi được tổ chức 3 năm một lần, tại các địa điểm trên toàn thế giới.
      </p>
    </div>
  )
}