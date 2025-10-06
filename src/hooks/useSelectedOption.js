import { useSearchParams } from "react-router-dom";

function useSelectedOption(title, items) {
  const [searchParam] = useSearchParams();

  let selected = searchParam.getAll(title);

  selected = selected.map((value) =>
    !isNaN(Number(value)) ? Number(value) : value
  );

  let queryItems = [
    ...items.filter((item) => selected.includes(item)),
    ...items.filter((item) => !selected.includes(item)),
  ];
  return { queryItems };
}

export default useSelectedOption;
