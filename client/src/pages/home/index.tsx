import Banner from "../../component/banner";
import Carousel from "../../component/carousel";
import Category from "../../component/category";
import Feature from "../../component/feature";
import ProductCardContainer from "../../component/product-card-container";

export default function Home() {
  return (
    <>
      <div className="bg-[#F1F1F1] h-full">
        <div className="flex justify-between store-biz-container py-5">
          <div className="w-[23%] border bg-white rounded-lg">
            <Category />
          </div>
          <div className="w-[75%] h-full rounded-lg">
            <Carousel />
          </div>
        </div>
      </div>
      
      <ProductCardContainer title="Top Deals" url="/deal" endpoint="/product"/>

      <div className="store-biz-container mt-10 flex justify-between">
        <Banner title="Clearance Sale" description="Starting July 23 (Up to 50%)" image="/images/banner/discount.png" />
        <Banner title="Credit Card" description="Get Biz Points When Using Credit Card" image="/images/banner/credit.png" />
      </div>

      <ProductCardContainer title="New Arrivals" url="/deal" endpoint="/new-arrival"/>

      <div className="relative mt-10">
        <img src="/images/hero.png" alt="ads" className="w-full h-[633px] object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end pr-20">
          <div className="h-[524px] w-[524px] bg-white p-5">
            <div className="border-2 border-black h-full w-full py-6 px-8">
              <div>
                <p className="text-2xl font-bold">Join The Club</p>
                <p className="font-bold">Subscribe today to receive offers available only to our subscribers.</p>
              </div>
              <form className="flex flex-col mt-7">
                <input type="text" placeholder="Enter your name" className="w-full border-b-2 border-black text-2xl p-3" />
                <input type="email" placeholder="Enter your email" className="w-full border-b-2 border-black text-2xl mt-5 p-3" />
                <p className="text-xs mt-4 mb-6">
                  By subscribing, you agree to our <a href="/terms" className="underline">Terms and Conditions</a> and <a href="/privacy" className="underline">Privacy Policy</a>.
                </p>
                <div>
                  <input type="checkbox" id="terms" name="terms" className="mr-2" /> 
                  <label htmlFor="terms">I agree to the terms and conditions</label>
                </div>
                <div>
                  <input type="checkbox" id="offers" name="offers" className="mr-2" /> 
                  <label htmlFor="offers">I want to receive special offers.</label>
                </div>
                <button onClick={e => e.preventDefault()} className="bg-white text-black border-2 border-black py-3 font-bold text-lg w-full mt-4 hover:bg-black hover:text-white">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Feature />      
    </>
  )
}