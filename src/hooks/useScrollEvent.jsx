import { useEffect, useState } from "react";

export default function useScrollEvent() {
  const [isScrolling, setIsScrolling] = useState(false);
  const handleScroll = () => setIsScrolling(window.scrollY > 0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrolling };
}
