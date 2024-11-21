import { IoStar } from "react-icons/io5";

export default function YellowStar(icon) {
  const starCount = Math.min(Math.max(icon, 1), 5);
  return Array.from({ length: starCount }, (_, index) => (
    <IoStar key={index} className="w-12 h-12 text-yellow-500 sm:w-16 sm:h-16" />
  ));
}
