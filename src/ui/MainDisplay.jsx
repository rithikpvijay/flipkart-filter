import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import MainFilter from "./MainFilter";
import MainData from "./MainData";

function MainDisplay({ filterValue, handleClick, filteredData }) {
  return (
    <>
      <MainFilter handleClick={handleClick} filterValue={filterValue} />
      {filteredData.map((item) => (
        <MainData item={item} key={item.id} />
      ))}
    </>
  );
}

export default MainDisplay;
