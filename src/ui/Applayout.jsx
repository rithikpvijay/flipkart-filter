import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import ErrorPage from "./ErrorPage";
import LoginDisplay from "./LoginDisplay";
import MoreDisplay from "./MoreDisplay";

function Applayout() {
  return (
    <div className="min-h-screen overflow-x-auto">
      <div className="grid grid-cols-[280px_1fr] items-start ">
        <Header />
        <Sidebar />

        <Main />
      </div>
    </div>
  );
}

export default Applayout;
