import Header from "./Header";

function Applayout() {
  return (
    <div className="grid grid-cols-[16rem_1fr] items-start ">
      <Header />
      <div className="mr-2 bg-white shadow-box">sidebar</div>
      <main className="bg-white shadow-box">main</main>
      <footer className="bg-white col-span-full mt-3 shadow-box">footer</footer>
    </div>
  );
}

export default Applayout;
