interface InfoCardProps {
  title: string
  subtitle: string
  image: string
  link?: string
  onClick?: () => void
}


export const InfoCard = ({title, subtitle, image, link, onClick}: InfoCardProps) => (
  <a
    className="flex items-center gap-4 bg-[#f8f9fc] px-4 py-3 hover:bg-[#e0e4f0] transition-colors duration-200 ease-in-out rounded-lg cursor-pointer"
    href={link || "#"}
    target="_blank"
    rel="noreferrer"
    onClick={onClick}
  >
    <div
      className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit"
    >
      <img
        src={image} alt={title}
        loading="lazy"
        className="h-full w-full object-cover rounded-lg"
      />
    </div>
    <div className="flex flex-col justify-center">
      <p className="text-[#0d111c] text-base font-medium leading-normal">{title}</p>
      <p className="text-[#47619e] text-sm font-normal leading-normal whitespace-pre-wrap">{subtitle}</p>
    </div>
  </a>
)