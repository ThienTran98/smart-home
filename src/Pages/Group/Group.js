import React from "react";
import avatar from "../../assets/img/Frame 3365 (2).png";

export default function Group() {
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
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                >
                  <img
                    src={avatar}
                    className="w-9 h-9 object-cover mr-4"
                    alt=""
                  />
                  Thu Diễm
                </th>

                <td className="px-6 py-4 text-wrap">
                  Phòng khách , Phòng ngủ , Phòng bếp , Sân Trước
                </td>
                <td className="px-6 py-4">Quản trị viên</td>
                <td className="px-6 py-4">
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
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                >
                  <img
                    src={avatar}
                    className="w-9 h-9 object-cover mr-4"
                    alt=""
                  />
                  Diễm Trinh
                </th>

                <td className="px-6 py-4 text-wrap">Phòng khách , Phòng bếp</td>
                <td className="px-6 py-4">Truy cập</td>
                <td className="px-6 py-4">
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
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                >
                  <img
                    src={avatar}
                    className="w-9 h-9 object-cover mr-4"
                    alt=""
                  />
                  Quỳnh Anh
                </th>

                <td className="px-6 py-4 text-wrap">
                  Phòng ngủ , Phòng bếp , Sân Trước
                </td>
                <td className="px-6 py-4">Truy cập</td>
                <td className="px-6 py-4">
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
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                >
                  <img
                    src={avatar}
                    className="w-9 h-9 object-cover mr-4"
                    alt=""
                  />
                  Vân Anh
                </th>

                <td className="px-6 py-4 text-wrap">Phòng khách</td>
                <td className="px-6 py-4">Truy cập</td>
                <td className="px-6 py-4">
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
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                >
                  <img
                    src={avatar}
                    className="w-9 h-9 object-cover mr-4"
                    alt=""
                  />
                  Ngọc Quân
                </th>

                <td className="px-6 py-4 text-wrap">
                  Phòng khác , Phòng ngủ , Phòng bếp , Sân Trước
                </td>
                <td className="px-6 py-4">Quản trị viên</td>
                <td className="px-6 py-4">
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
