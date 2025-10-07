import { useSearchParams } from "react-router-dom";
import scrollToTop from "../helper/scrollToTop";

const PAGE_SIZE = import.meta.env.VITE_PAGE_SIZE;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  let currentPage = Number(searchParams.get("page")) || 1;
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (currentPage > pageCount) throw new Error();

  console.log(count);
  console.log(pageCount);

  if (pageCount < 2) return null;

  function handleNext() {
    const next = currentPage !== pageCount ? currentPage + 1 : pageCount;
    searchParams.set("page", next);
    setSearchParams(searchParams);

    window.scrollTo({
      top: 0,
      behavior: `${next === pageCount ? "auto" : "smooth"}`,
    });
  }

  function handlePrevious() {
    const prev = currentPage === 1 ? 1 : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleClick(e) {
    console.log(e);
    searchParams.set("page", e.target.dataset.value);
    setSearchParams(searchParams);

    window.scrollTo({
      top: 0,
      behavior: `${
        Number(e.target.dataset.value) === pageCount ? "auto" : "smooth"
      }`,
    });
  }

  return (
    <div className="border-t border-textbox-gray flex justify-between text-[14px] p-2.5 items-center ">
      <span>
        Page {currentPage} of {pageCount}
      </span>
      <div className="flex gap-7 items-center font-semibold">
        <div
          onClick={handlePrevious}
          className={`text-brand-blue uppercase cursor-pointer ${
            currentPage === 1 ? "hidden" : ""
          }`}
        >
          Previous
        </div>
        <div className="flex items-center ">
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((pageNum) => (
            <div
              key={pageNum}
              onClick={handleClick}
              data-value={pageNum}
              className={` cursor-pointer w-8 h-8 flex items-center justify-center   ${
                currentPage === pageNum ? "pagination-active" : ""
              }`}
            >
              {pageNum}
            </div>
          ))}
        </div>
        <div
          onClick={handleNext}
          className={`text-brand-blue uppercase cursor-pointer ${
            currentPage === pageCount ? "hidden" : ""
          }`}
        >
          Next
        </div>
      </div>
      <span className="w-1"></span>
    </div>
  );
}

export default Pagination;
