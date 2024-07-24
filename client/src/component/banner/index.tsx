
interface BannerProps {
  title: string;
  description: string;
  image: string;
}

export default function Banner({ title, description, image } : BannerProps) {
  return (
    <div className="bg-[#F1F1F1] w-[49%]">
      <div className="text-center py-5">
        <p className="text-2xl font-bold">{ title }</p>
        <p className="font-bold">{ description }</p>
      </div>
      <img src={image} alt="banner" className="w-full h-[633px] object-cover" />
    </div>
  )
}