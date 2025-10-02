import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Applayout() {
  return (
    <div className="grid grid-cols-[280px_1fr] items-start ">
      <Header />
      <Sidebar />
      <Main />

      <footer className="bg-white col-span-full mt-3 shadow-box">footer</footer>
    </div>
  );
}

export default Applayout;
