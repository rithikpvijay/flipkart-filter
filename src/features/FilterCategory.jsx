function FilterCategory() {
  return (
    <div className=" text-black-text p-4 border-b border-border-grey">
      <div className="text-[11px] font-semibold uppercase mb-[4px]">
        <span>Categories</span>
      </div>
      <div className="py-[5px] flex items-center">
        <span className="flex items-center">
          <img
            src="assets/icons/arrow-gray.svg"
            alt="icon-arrow"
            className="w-[10px] h-[10px] inline-block mr-[5px] cursor-pointer"
          />
        </span>
        <div className="text-textbox-content text-[13px] cursor-pointer">
          Mobiles & Accessories
        </div>
      </div>
      <div>
        <div className="p-[5px] text-[13px] font-semibold ml-[10px] cursor-pointer">
          Mobiles
        </div>
      </div>
    </div>
  );
}

export default FilterCategory;
