import Categories from "./Categories";

import Nav from "./Nav";

function Header() {
  return (
    <div className="bg-white col-span-full mb-2 shadow-box ">
      <Nav />
      <Categories />
    </div>
  );
}

export default Header;
