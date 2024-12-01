import React from "react";
import logo from "../../assets/img/Group 3340.png";
import avatar from "../../assets/img/image 6.png";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <div className="flex items-center  ">
        <img src={logo} className="w-[130px] h-8 object-contain mr-6" alt="" />
        <div className="flex items-center w-[496px] border rounded  border-black/[0.1] px-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 hover:cursor-pointer mr-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            className="block focus:outline-none focus:border-none py-2"
            type="text"
            placeholder="Tìm kiếm"
          />
        </div>
      </div>
      <div className="flex items-center">
        <img src={avatar} alt="" />
        <h3 className="mx-4 text-black/[0.4] font-semibold">
          Dương Xuân Chính
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 hover:cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>
      </div>
    </div>
  );
}
