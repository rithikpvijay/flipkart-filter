import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [navData, setNavData] = useState(null);
  useEffect(() => {
    async function fetchNav() {
      try {
        const res = await fetch("/mobiles.json");

        if (!res.ok) throw new Error("Something went wrong with fetching nav");
        const data = await res.json();

        setNavData(data.nav);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchNav();
  }, []);

  if (!navData) return null;

  const {
    explore,
    plus,
    navText,
    navIcon1,
    navIcon2,

    icons,
  } = navData;

  return (
    <div className="bg-brand-blue w-full fixed z-10">
      <div className="flex items-center  h-[56px] max-w-[1200px] mx-auto">
        <div className="text-white flex flex-col ml-13 mr-[12px]">
          <img
            src={`src/${icons.flipkartText}`}
            alt="icon of flipkart"
            className="w-[75px]"
          />
          <Link className="italic relative text-[10px] hover:underline">
            {explore}
            <span className="text-plus-gold font-semibold"> {plus}</span>
            <img
              src={`src/${icons.plusIcon}`}
              alt="text of plus"
              className="w-[10px] block absolute left-15 top-0"
            />
          </Link>
        </div>

        <div className="w-[553px] flex shadow-text-box rounded-l-sm  ">
          <input
            type="text"
            className="bg-white px-[16px] h-[36px] w-full outline-0 text-[13px]  border-0 "
          />
          <button className="cursor-pointer h-[36px] w-[44px]  bg-white flex items-center justify-center">
            <img
              src={`src/${icons.searchBlue}`}
              alt="image of search icon"
              className="h-5 w-5"
            />
          </button>
        </div>

        <div>
          <Link className="bg-white text-brand-blue font-semibold py-[5px] px-[40px] rounded-xs cursor-pointer border [border-color:#dbdbdb] mx-5">
            Login
          </Link>
        </div>

        <Link>
          <div className="text-white text-[15px] font-semibold mx-5">
            {navText[0]}
          </div>
        </Link>
        <Link className="flex items-center justify-center gap-2 mx-5 group">
          <div className="text-white text-[15px] font-semibold">
            {navText[1]}
          </div>

          <img
            src={`src/${navIcon1}`}
            //   src="src/assets/icons/arrow-white.svg"
            alt="image of search icon"
            className="h-[8px] w-[4.7px] rotate-270  group-hover:rotate-90 transition-transform duration-100"
          />
        </Link>
        <Link className="flex items-center justify-center gap-2 mx-5">
          <img
            src={`src/${navIcon2}`}
            //   src="src/assets/icons/arrow-white.svg"
            alt="image of search icon"
            className="h-[16px] w-[16px]"
          />
          <div className="text-white text-[15px] font-semibold">
            {navText[2]}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
