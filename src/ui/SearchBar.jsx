import searchGray from "../assets/icons/search-gray.svg";

function SearchBar({ query, onSearch }) {
  return (
    <div className="relative">
      <img
        src={searchGray}
        alt="search icon"
        className="w-[12px] h-[20px] absolute top-1"
      />
      <input
        placeholder="Search Brand"
        type="text"
        className="outline-0 border-b-2 border-b-textbox-gray h-[20px] text-[13px] text-textbox-content w-full focus:border-brand-blue pl-[21px] placeholder:text-textbox-content "
        value={query}
        onChange={onSearch}
      />
    </div>
  );
}

export default SearchBar;
