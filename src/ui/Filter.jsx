import Brand from "../features/Brand";
import Ram from "../features/Ram";

function Filter() {
  return (
    <div>
      <div className="border-b-1 border-border-grey px-4 py-4 ">
        <p className="text-[17px] font-semibold ">Filters</p>
      </div>
      <div>
        <Brand />
        <Ram />
      </div>
    </div>
  );
}

export default Filter;
