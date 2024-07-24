import Carousel from "../../component/carousel";

export default function Home() {
  return (
    <>
      <div className="bg-[#F1F1F1] mt-4 h-full">
        <div className="flex justify-between store-biz-container">
          <div className="w-[27%] border">Menu</div>
          <div className="w-[70%] h-full border">
            <Carousel />
          </div>
        </div>
      </div>
      
      <div className="store-biz-container">
          Top Deals
      </div>
    </>
  )
}