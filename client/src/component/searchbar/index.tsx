import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="relative items-center">
      <input className="border border-gray-300 rounded-md py-2 px-4 w-[600px] pr-10" type="search" placeholder="Search" />
      <button className="text-black font-bold py-2 px-4 rounded absolute top-0 right-0 mt-1">
        <CiSearch />
      </button>
    </div>
  )
}