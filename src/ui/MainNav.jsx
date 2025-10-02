import { Link } from "react-router-dom";

function MainNav({ text }) {
  return (
    <div className="flex items-center">
      <Link>{text}</Link>
      <img
        src="src/assets/icons/arrow-gray.svg"
        className="h-[7px] w-[20px] rotate-180 inl"
      />
    </div>
  );
}

export default MainNav;
