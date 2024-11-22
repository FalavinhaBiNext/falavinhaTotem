import { useState } from "react";

export default function useAccordion(data) {
  const [page, setPage] = useState(0);

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

  return {
    sliced,
    nextPage,
    prevPage,
    page,
    end,
  };
}
