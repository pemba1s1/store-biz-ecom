import { CiCamera, CiHeadphones } from "react-icons/ci";
import { GiHealthNormal } from "react-icons/gi";
import { GrUserFemale } from "react-icons/gr";
import { IoWatchOutline } from "react-icons/io5";
import { LuSofa } from "react-icons/lu";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { PiCarLight, PiTelevisionSimpleBold, PiTShirt } from "react-icons/pi";
import { TfiBasketball } from "react-icons/tfi";

const category = [
  { name: "Women's Fashion", icon: <GrUserFemale /> },
  { name: "Health & Beauty", icon: <GiHealthNormal /> },
  { name: "Men's Fashion", icon: <PiTShirt /> },
  { name: "Watches & Accessories", icon: <IoWatchOutline /> },
  { name: "TV & Home Appliances", icon: <PiTelevisionSimpleBold /> },
  { name: "Electronic Devices", icon: <CiCamera /> },
  { name: "Electronic Accessories", icon: <CiHeadphones /> },
  { name: "Groceries & Pets", icon: <MdOutlineLocalGroceryStore /> },
  { name: "Home & Lifestyle", icon: <LuSofa /> },
  { name: "Sports & Outdoor", icon: <TfiBasketball /> },
  { name: "Motors, Tools & DIY", icon: <PiCarLight /> },
];

export default function Category() {
  return (
    <div className="py-3">
      {
        category.map((item, index) => 
          <div className="flex items-center ps-10 text-xl h-[49px] gap-5 cursor-pointer hover:bg-[#D2D9F0] hover:text-[#185CFF]" key={ index }>
            { item.icon }{ item.name }
          </div>
        )
      }
    </div>
  )
}