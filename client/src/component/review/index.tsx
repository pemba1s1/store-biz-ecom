import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

export default function Review({ rating = 0 }: { rating: number | undefined }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex gap-1 mt-3">
      {Array(fullStars).fill(0).map((_, index) => (
        <IoIosStar key={`full-${fullStars}-${index}`} className="text-yellow-500" />
      ))}
      {halfStar && <IoIosStarHalf key="half" className="text-yellow-500 opacity-50" />}
      {Array(emptyStars).fill(0).map((_, index) => (
        <IoIosStarOutline key={`empty-${emptyStars}-${index}`} className="text-gray-300" />
      ))}
    </div>
  );
}