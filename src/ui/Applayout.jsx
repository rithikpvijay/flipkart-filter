import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import ErrorPage from "./ErrorPage";

function Applayout() {
  return (
    <div className="min-h-screen overflow-x-auto">
      <div className="grid grid-cols-[280px_1fr] items-start ">
        <Header />
        <Sidebar />

        <Main />

        <footer className="bg-white col-span-full mt-3 shadow-box">
          footer
        </footer>
      </div>
    </div>
  );
}

export default Applayout;
