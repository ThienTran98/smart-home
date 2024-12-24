import React from "react";
import logo from "../../assets/img/Group 3340.png";
import avatar from "../../assets/img/image 6.png";
import { useDispatch, useSelector } from "react-redux";
import { postLogout } from "../../Service/userService";
import { message } from "antd";
import { setListAllUsers, setUserLogOut } from "../../redux/userSlice";
import {
  listUserLocalStorage,
  userLocalStorage,
} from "../../Service/localstorageService";

export default function Header() {
  const user = useSelector((state) => state.userSlice.user);
  const dispatch = useDispatch();
  const handleShow = () => {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");
    // Mở/Đóng menu khi nhấn nút
    menuButton.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      menu.classList.toggle("scale-100"); // Hiển thị với hoạt ảnh
      menu.classList.toggle("scale-95"); // Ẩn với hoạt ảnh
    });
    // Đóng menu khi nhấn bên ngoài
    document.addEventListener("click", (e) => {
      if (!menuButton.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add("hidden");
        menu.classList.add("scale-95");
        menu.classList.remove("scale-100");
      }
    });
  };
  const handleLogOut = () => {
    postLogout()
      .then((res) => {
        dispatch(setUserLogOut(null));
        dispatch(setListAllUsers(null));
        userLocalStorage.remove();
        listUserLocalStorage.remove();
        message.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
        <h3 className="mx-4 text-black/[0.4] font-semibold">{user.username}</h3>
        <div className="relative">
          <button id="menuButton" onClick={handleShow}>
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
            id="menu"
            class="hidden absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white scale-95 origin-top-right  ring-1 ring-black ring-opacity-5 transform duration-150 ease-in-out transition-all "
          >
            <div
              class="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menuButton"
            >
              <a
                href="#"
                class="block px-4 py-2 font-semibold  text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Hồ sơ
              </a>
              <a
                href="#"
                class="block px-4 py-2 font-semibold  text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Cập nhật thông tin
              </a>
              <a
                href="#"
                onClick={handleLogOut}
                class="block px-4 py-2  font-semibold text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Đăng xuất
              </a>
              <a
                href="#"
                class="block px-4 py-2  font-semibold text-sm text-red-600 hover:bg-red-100"
                role="menuitem"
              >
                Xóa tài khoản
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
