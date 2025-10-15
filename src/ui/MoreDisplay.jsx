import { IoMdDownload } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { RiArrowUpFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function MoreDisplay() {
  return (
    <div className="bg-white mt-6 shadow-menu-box relative w-[220px]">
      <RiArrowUpFill className="text-white w-8 h-8 absolute left-1/2 -translate-x-1/2 -top-4" />

      <ul className="border-t border-border-grey text-[13px]">
        <li className="border-b border-border-grey">
          <Link className="flex items-center gap-2 px-3 py-4 hover:bg-menu-hover">
            <IoNotifications className="text-brand-blue w-[16px] h-[14px]" />
            <div>Notification Preferences</div>
          </Link>
        </li>

        <li className="border-b border-border-grey">
          <Link className="flex items-center gap-2 px-3 py-4 hover:bg-menu-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              class=""
              viewBox="0 0 14 17"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#2874F0"
                  fill-rule="nonzero"
                  d="M12.25.542H1.75c-.833 0-1.5.675-1.5 1.5v10.5c0 .825.667 1.5 1.5 1.5h3L7 16.292l2.25-2.25h3c.825 0 1.5-.675 1.5-1.5v-10.5c0-.825-.675-1.5-1.5-1.5zm-4.5 12h-1.5v-1.5h1.5v1.5zM9.303 6.73l-.676.69c-.54.547-.877.997-.877 2.122h-1.5v-.375c0-.825.338-1.575.877-2.123l.93-.945c.278-.27.443-.646.443-1.058 0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5H4c0-1.658 1.342-3 3-3s3 1.342 3 3c0 .66-.27 1.26-.697 1.687z"
                ></path>
              </g>
            </svg>
            <div>24x7 Customer Care</div>
          </Link>
        </li>

        <li className="border-b border-border-grey">
          <Link className="flex items-center gap-2 px-3 py-4 hover:bg-menu-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              class=""
              viewBox="0 0 18 10"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#2874F0"
                  fill-rule="nonzero"
                  d="M12.333 0l1.91 1.908-4.068 4.067-3.333-3.333L.667 8.825 1.842 10l5-5 3.333 3.333 5.25-5.24L17.333 5V0"
                ></path>
              </g>
            </svg>
            <div>Advertise</div>
          </Link>
        </li>

        <li className="border-b border-border-grey">
          <Link className="flex items-center gap-2 px-3 py-4 hover:bg-menu-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              class=""
              viewBox="0 0 12 14"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M-4-3h20v20H-4z"></path>
                <path
                  fill="#2874F0"
                  fill-rule="nonzero"
                  d="M12 4.94H8.57V0H3.43v4.94H0l6 5.766 6-5.765zM0 12.354V14h12v-1.647H0z"
                ></path>
              </g>
            </svg>
            <div>Download App</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MoreDisplay;
