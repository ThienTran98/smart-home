import React, { useEffect, useState } from "react";
import avt from "../../assets/img/Tech Life Communication.png";
import door from "../../assets/img/Group 3341.png";
import pic from "../../assets/img/profile pic.png";
import pic1 from "../../assets/img/image 6.png";
import pic2 from "../../assets/img/Frame 3365 (1).png";
import pic3 from "../../assets/img/Frame 3365 (2).png";
import water from "../../assets/img/drop.png";
import temp from "../../assets/img/thermometer.png";
import mark from "../../assets/img/Mask group.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "./../../Service/userService";
import { setListAllUsers } from "../../redux/userSlice";
import { listUserLocalStorage } from "../../Service/localstorageService";
import { postTurnOffOrOffAirConditioner } from "../../Service/iotService";

const fetch__data = [
  { id: 1, img: pic, name: "Phương Linh", role: "Truy cập" },
  { id: 2, img: pic1, name: "Xuân Chính", role: "Quản trị viên" },
  { id: 3, img: pic2, name: "Thùy", role: "Truy cập" },
  { id: 4, img: pic3, name: "Anh", role: "Truy cập" },
];
export default function HomePage() {
  const [listUser, setListUser] = useState([]);
  const [checked, setChecked] = useState(false);
  const user = useSelector((state) => state.userSlice.user);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllUser()
      .then((res) => {
        dispatch(setListAllUsers(res.data));
        listUserLocalStorage.set(res.data);
        setListUser(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  const renderMemberAccess = () => {
    return listUser?.slice(0, 4).map((item, index) => {
      return (
        <div
          key={item?.id}
          className="flex items-center justify-center flex-col"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <h2 className="text-sm font-bold my-3">{item.name}</h2>
          <p className="text-xs opacity-45">
            {item.role === "ADMIN" ? "Quản trị viên" : "Truy cập"}
          </p>
        </div>
      );
    });
  };

  const handleChange = () => {
    setChecked(!checked);

    if (checked) {
      postTurnOffOrOffAirConditioner({
        value: 1,
      })
        .then((res) => {
          console.log("res: ", res);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    } else {
      postTurnOffOrOffAirConditioner({
        value: 0,
      })
        .then((res) => {
          console.log("res:1 ", res);
        })
        .catch((err) => {
          console.log("err:1 ", err);
        });
    }
  };

  return (
    <div className="px-5">
      <div className="py-4 grid grid-cols-3 gap-4">
        <div className="col-span-2 flex items-center justify-between bg-white rounded-2xl p-6">
          <div>
            <h2 className="leading-7 font-bold text-2xl mb-3">
              Xin chào, {user?.username ? user?.username : "Ẩn danh"}
            </h2>
            <p className="text-sm font-medium leading-4 opacity-40 mb-8">
              Chào mừng bạn trở về, chất lượng không khí thật trong lành. Hãy
              thư giãn.
            </p>
            <div className="flex items-center mb-4">
              <img src={door} alt="" />
              <p className="ml-2 text-sm font-bold leading-4 opacity-50">
                Cửa của bạn đã được khoá
              </p>
            </div>
            <div className="flex">
              <div className="flex items-center font-bold mr-4 justify-center min-w-[180px] max-w-[180px] border-2 border-black/[0.4] hover:border-teal-500 rounded-lg h-[36px] cursor-pointer opacity-85 hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5  text-black/[0.5]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <span className="ml-2 text-black/[0.5] text-sm">Khóa</span>
              </div>

              <div className="flex items-center justify-center min-w-[180px] max-w-[180px] text-white font-bold bg-blue-600 rounded-lg h-[36px] cursor-pointer opacity-85 hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>

                <span className="ml-2 text-sm">Mở khóa</span>
              </div>
            </div>
          </div>
          <div>
            <img src={avt} alt="" />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-[20px]"> Thành viên</h1>
            <div className="flex items-center">
              <div className="flex items-center px-4 py-2 bg-white rounded-lg cursor-pointer text-sm font-bold hover:opacity-80 hover:transition-all hover:bg-teal-500 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="ml-1">Thêm</span>
              </div>
              <div className="ml-3 hover:cursor-pointer hover:opacity-75">
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
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className="bg-white mt-[10px] rounded-2xl px-5 py-6 flex items-center justify-between
          "
          >
            {renderMemberAccess()}
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex items-center justify-between">
            <h2 className="font-bold text-2xl">
              Nhà của {user?.username ? user?.username : "Ẩn danh"}
            </h2>
            <div className=" flex items-center">
              <div className=" flex items-center">
                <img src={water} alt="" />
                <span className="font-bold text-sm ml-1">78%</span>
              </div>
              <div className=" flex items-center pl-3">
                <img src={temp} alt="" />
                <span className="font-bold text-sm ml-1">25C</span>
              </div>
              <div className="pl-3">
                <form class="max-w-sm mx-auto">
                  <select
                    id="countries"
                    class="bg-white-50 border focus:border-none focus:outline-none cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="US">Phòng khách</option>
                    <option value="CA">Phòng ngủ</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center">
        <div className="p-5 bg-white rounded-lg w-[166px] h-[156px] mr-5">
          <div className="flex items-center justify-between mb-2">
            <p>Off</p>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                onChange={handleChange}
                defaultValue
                className="sr-only peer focus:border-none focus:outline-none"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
            </label>
          </div>
          <img src={mark} alt="" />
          <p className="font-semibold opacity-40 mt-2">Điều hoà</p>
        </div>
        <div className="p-5 bg-white rounded-lg w-[166px] h-[156px] flex items-center justify-center text-blue-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <h2 className="font-semibold ml-1 ">Thêm mới</h2>
        </div>
      </div>
    </div>
  );
}
