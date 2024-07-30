import { CiCamera, CiHeadphones } from "react-icons/ci";
import { GiHealthNormal } from "react-icons/gi";
import { GrUserFemale } from "react-icons/gr";
import { IoWatchOutline } from "react-icons/io5";
import { LuSofa } from "react-icons/lu";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { PiCarLight, PiTelevisionSimpleBold, PiTShirt } from "react-icons/pi";
import { TfiBasketball } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

const category = [
  { name: "Women's Fashion", key: "women-fashion", icon: <GrUserFemale /> },
  { name: "Health & Beauty", key: "health-beauty", icon: <GiHealthNormal /> },
  { name: "Men's Fashion", key: "men-fashion", icon: <PiTShirt /> },
  { name: "Watches & Accessories", key: "watches-accessories", icon: <IoWatchOutline /> },
  { name: "TV & Home Appliances", key: "tv-home-appliances", icon: <PiTelevisionSimpleBold /> },
  { name: "Electronic Devices", key: "electronic-devices", icon: <CiCamera /> },
  { name: "Electronic Accessories", key: "electronic-accessories", icon: <CiHeadphones /> },
  { name: "Groceries & Pets", key: "groceries-pets", icon: <MdOutlineLocalGroceryStore /> },
  { name: "Home & Lifestyle", key: "home-lifestyle", icon: <LuSofa /> },
  { name: "Sports & Outdoor", key: "sports-outdoor", icon: <TfiBasketball /> },
  { name: "Motors, Tools & DIY", key: "motors-tools-diy", icon: <PiCarLight /> },
];

export default function Category() {
  const navigate = useNavigate()

  const handleClick = (key: string) => {
    navigate(`/category/${key}`);
  }

  return (
    <div className="py-3">
      {
        category.map((item, index) => 
          <div className="flex items-center ps-10 text-xl h-[49px] gap-5 cursor-pointer hover:bg-[#D2D9F0] hover:text-[#185CFF]" key={ index } onClick={() => handleClick(item.key)}>
            { item.icon }{ item.name }
          </div>
        )
      }
    </div>
  )
}