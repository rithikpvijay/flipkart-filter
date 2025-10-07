function ErrorPage() {
  return (
    <div className="p-[50px] flex flex-col justify-center items-center">
      <img
        src="assets/pictures/error.png"
        className="w-[286px] h-[184px] object-contain"
      />
      <div className="text-[26px] font-semibold mt-5 mb-2.5">
        Sorry, no results found!
      </div>
      <div className="text-textbox-content text-[20px] mt-2">
        Please check the spelling or try searching for something else
      </div>
    </div>
  );
}

export default ErrorPage;
