import React, { Fragment, useState } from "react";
import logo from "../../assets/img/Group 3340.png";
import avatar from "../../assets/img/image 6.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, postLogout } from "../../Service/userService";
import { message } from "antd";
import { setListAllUsers, setUserLogOut } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.userSlice.user);
  const navigate = useNavigate();
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
        localStorage.clear();
        message.success(res.data.message);
        dispatch(setUserLogOut(null));
        dispatch(setListAllUsers(null));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleShowModal = () => {
    console.log("yes");
    setShow(!show);
  };
  const handleHideModal = () => {
    setShow(false);
  };

  const handleDeleteAccount = () => {
    const data = {
      password: "$2b$10$XkptpS6SN2C3T/8B.CsNDu.K0yTKigZfyj.Y/.dnITP6G0AuhDFpS",
    };
    deleteUser(data)
      .then((res) => {
        console.log("res: ", res);
        message.success(res.data.message);
      })
      .catch((err) => {
        message.error(err.response.data);
        console.log("err: ", err);
      });
    console.log("show:111 ", show);
  };

  return (
    <Fragment>
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center  ">
          <img
            src={logo}
            className="w-[130px] h-8 object-contain mr-6"
            alt=""
          />
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
            {user?.username ? user?.username : "Ẩn danh"}
          </h3>
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
              className="hidden absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white scale-95 origin-top-right  ring-1 ring-black ring-opacity-5 transform duration-150 ease-in-out transition-all "
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menuButton"
              >
                <button
                  className="block text-left w-full px-4 py-2 font-semibold  text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Hồ sơ
                </button>
                <button
                  className="block text-left w-full px-4 py-2 font-semibold  text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Cập nhật thông tin
                </button>
                <button
                  onClick={handleLogOut}
                  className="block text-left w-full px-4 py-2  font-semibold text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Đăng xuất
                </button>
                <button
                  className="block text-left w-full px-4 py-2  font-semibold text-sm text-red-600 hover:bg-red-100"
                  role="menuitem"
                  data-modal-target="default-modal"
                  data-modal-toggle="default-modal"
                  onClick={handleShowModal}
                >
                  Xóa tài khoản
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      {show && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          onClick={() => {
            setShow(false);
          }}
        >
          <div
            className="fixed inset-0 bg-gray-500/75 transition-opacity"
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                      <svg
                        className="size-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold text-gray-900"
                        id="modal-title"
                      >
                        Vô hiệu hóa tài khoản
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Bạn có chắc chắn muốn hủy kích hoạt tài khoản của mình
                          không? Tất cả dữ liệu của bạn sẽ bị xóa vĩnh viễn.
                          Không thể hoàn tác hành động này.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={handleDeleteAccount}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Xóa tài khoản
                  </button>
                  <button
                    type="button"
                    onClick={handleHideModal}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
