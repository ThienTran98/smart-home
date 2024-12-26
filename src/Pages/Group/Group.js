import React, { useState } from "react";
import avatar from "../../assets/img/Frame 3365 (2).png";
import { useSelector } from "react-redux";

export default function Group() {
  const listUser = useSelector((state) => state.userSlice.listUser);
  const renderListUserMember = () => {
    return listUser?.map((item, index) => {
      return item.id !== listUser.length - 1 ? (
        <tr
          key={index}
          className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
        >
          <th
            scope="row"
            className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center"
          >
            <img src={avatar} className="w-9 h-9 object-cover mr-4" alt="" />
            {item?.username ? item?.username : "Ẩn danh"}
          </th>
          <td className="px-6 py-4 text-wrap">
            Phòng khách , Phòng ngủ , Phòng bếp , Sân Trước
          </td>
          <td className="px-6 py-4">
            {item?.role === "ADMIN" ? "Quản trị viên" : "Truy cập "}
          </td>
          <td className="px-6 py-4 relative">
            <button className="show-btn" onClick={handleShow}>
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
            </button>
            <div
              className={`absolute show-popup hidden right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white scale-95 origin-top-right  ring-1 ring-black ring-opacity-5 transform duration-150 ease-in-out transition-all`}
            >
              <div className="py-1">
                <button className="block text-left w-full px-4 py-2  font-semibold text-sm text-gray-700 hover:bg-gray-100">
                  Chỉnh sửa
                </button>
                <button className="block text-left w-full px-4 py-2  font-semibold text-sm text-red-600 hover:bg-red-100">
                  Xóa
                </button>
              </div>
            </div>
          </td>
        </tr>
      ) : (
        <tr>
          <th
            scope="row"
            className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center"
          >
            <img src={avatar} className="w-9 h-9 object-cover mr-4" alt="" />
            {item?.username ? item?.username : "Ẩn danh"}
          </th>

          <td className="px-6 py-4 text-wrap">
            Phòng khác , Phòng ngủ , Phòng bếp , Sân Trước
          </td>
          <td className="px-6 py-4">
            {item?.role === "ADMIN" ? "Quản trị viên" : "Truy cập "}
          </td>
          <td className="px-6 py-4">
            <button className="show-btn" onClick={handleShow}>
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
            </button>
            <div
              className={` absolute show-popup hidden right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white scale-95 origin-top-right  ring-1 ring-black ring-opacity-5 transform duration-150 ease-in-out transition-all`}
            >
              <div className="py-1">
                <button className="block text-left w-full px-4 py-2  font-semibold text-sm text-gray-700 hover:bg-gray-100">
                  Chỉnh sửa
                </button>
                <button className="block text-left w-full px-4 py-2  font-semibold text-sm text-red-600 hover:bg-red-100">
                  Xóa
                </button>
              </div>
            </div>
          </td>
        </tr>
      );
    });
  };
  const handleShow = () => {
    document.querySelectorAll(".show-btn").forEach((button) => {
      button.addEventListener("click", function (event) {
        // Close any open popups
        document.querySelectorAll(".show-popup").forEach((popup) => {
          if (!popup.classList.contains("hidden")) {
            popup.classList.add("hidden");
          }
        });

        // Toggle the popup for the clicked button
        const popup = this.nextElementSibling;
        popup.classList.toggle("hidden");

        // Stop event propagation to prevent closing the popup immediately
        event.stopPropagation();
      });
    });

    document.addEventListener("click", function () {
      document.querySelectorAll(".show-popup").forEach((popup) => {
        popup.classList.add("hidden");
      });
    });
  };
  const handleDeleteUser = () => {};
  const handleAddUser = () => {};

  return (
    <div className="m-6 ">
      <div className="bg-white h-screen pl-10 pt-10 pr-16 rounded-t-xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[22px] font-bold">Members</h2>
          <div className="flex items-center justify-center text-white bg-blue-600 rounded-lg p-[10px] hover:opacity-70 hover:cursor-pointer hover:transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <button className="text-base font-medium ml-2">
              Thêm thành viên
            </button>
          </div>
        </div>
        <div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Thiết bị
                </th>
                <th scope="col" className="px-6 py-3">
                  Phòng
                </th>
                <th scope="col" className="px-6 py-3">
                  Vai trò
                </th>

                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>{renderListUserMember()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
