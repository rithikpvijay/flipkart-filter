import { useSearchParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function MainText({ count }) {
  const [searchParams] = useSearchParams();

  const PAGE_SIZE = import.meta.env.VITE_PAGE_SIZE;
  const page = Number(searchParams.get("page")) || 1;
  console.log(page, PAGE_SIZE);
  return (
    <div className="mt-2">
      <span className="font-semibold text-[16px]">
        Showing {(page - 1) * PAGE_SIZE + 1} –{" "}
        {page * PAGE_SIZE > count ? count : page * PAGE_SIZE} of {count} results
        for "smartphone"
      </span>
    </div>
  );
}

export default MainText;
