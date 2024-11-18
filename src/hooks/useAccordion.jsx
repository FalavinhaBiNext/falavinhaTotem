import { useCallback, useState, useRef } from "react";

export default function useAccordion(data) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [page, setPage] = useState(0);
  const contentRef = useRef(null);

  const fieldsPage = 3;
  const start = page * fieldsPage;
  const end = start + fieldsPage;
  const sliced = data.slice(start, end);

  const nextPage = () => {
    if (end < data.length) setPage(page + 1);
  };

  const prevPage = () => {
    if (start > 0) setPage(page - 1);
  };

  const handleToggle = useCallback((index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return {
    sliced,
    nextPage,
    prevPage,
    page,
    end,
    activeIndex,
    handleToggle,
    contentRef,
  };
}
