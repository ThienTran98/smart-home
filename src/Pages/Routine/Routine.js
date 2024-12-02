import React from "react";
import Button from "../../Component/Button/Button";
import image from "../../assets/img/cooling-fan.png";
import image_1 from "../../assets/img/Mask group (1).png";
import image_2 from "../../assets/img/Mask group (2).png";
import image_3 from "../../assets/img/Mask group.png";
import image_4 from "../../assets/img/laundry.png";
import image_5 from "../../assets/img/Mask group 1.png";

export default function Routine() {
  return (
    <div className="pt-9 pl-6 pr-[126px]">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-[28px] leading-10">Lịch hoạt động</h2>
        <div className="min-w-[148px] flex items-center justify-center cursor-pointer opacity-80 text-white py-2 bg-blue-600 rounded-lg hover:opacity-100 hover:transition-all">
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
          <button className="outline-none focus:border-none ml-1 font-bold text-base">
            Thêm mới
          </button>
        </div>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-2 gap-5">
          <div className="pl-6 py-5 pr-12 bg-white rounded-xl">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-[18px] leading-5">
                Thể dục buổi sáng
              </h2>
              <Button />
            </div>
            <p className="opacity-50 text-black font-semibold">
              5:30 am to 6:15 am
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <img className="w-6 h-6 object-cover mx-2" src={image} alt="" />
                <img
                  className="w-6 h-6 object-cover mx-2"
                  src={image_1}
                  alt=""
                />
                <img
                  className="w-6 h-6 object-cover mx-2"
                  src={image_2}
                  alt=""
                />
                <img
                  className="w-6 h-6 object-cover mx-2"
                  src={image_3}
                  alt=""
                />
              </div>
              <div className="flex items-center">
                <div className="flex items-center group  hover:cursor-pointer text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 group-hover:opacity-70 group-hover:transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>

                  <button className="font-bold text-xs ml-2 group-hover:opacity-70 group-hover:transition-all">
                    Xóa
                  </button>
                </div>
                <div className="flex items-center group  hover:cursor-pointer ml-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 group-hover:opacity-70 group-hover:transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>

                  <button className="font-bold text-xs group-hover:opacity-70 group-hover:transition-all ml-2">
                    Sửa
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-6 py-5 pr-12 bg-white rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center ">
                <h2 className="font-semibold text-[18px] leading-5">
                  Trở về nhà
                </h2>
                <h3 className=" ml-9 text-[#D4A626] text-xs font-semibold py-[3px] px-[22px] bg-[#F5F2D7] rounded-3xl flex items-center justify-center">
                  Awaiting approval
                </h3>
              </div>
              <Button />
            </div>
            <p className="opacity-50 text-black font-semibold">
              4:50 pm to 5:15 pm
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="w-6 h-6 object-cover mx-2"
                  src={image_2}
                  alt=""
                />
                <img
                  className="w-6 h-6 object-cover mx-2"
                  src={image_4}
                  alt=""
                />
              </div>
              <div className="flex items-center">
                <div className="flex items-center group  hover:cursor-pointer text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 group-hover:opacity-70 group-hover:transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>

                  <button className="font-bold text-xs ml-2 group-hover:opacity-70 group-hover:transition-all">
                    Xóa
                  </button>
                </div>
                <div className="flex items-center group  hover:cursor-pointer ml-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 group-hover:opacity-70 group-hover:transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>

                  <button className="font-bold text-xs group-hover:opacity-70 group-hover:transition-all ml-2">
                    Sửa
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-6 py-5 pr-12 bg-white rounded-xl">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-[18px] leading-5">Bơm nước</h2>
              <Button />
            </div>
            <p className="opacity-50 text-black font-semibold">
              8:00 am to 6:15 am
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="w-6 h-6 object-cover mx-2"
                  src={image_5}
                  alt=""
                />
                <img
                  className="w-6 h-6 object-cover mx-2"
                  src={image_3}
                  alt=""
                />
                <img
                  className="w-6 h-6 object-cover mx-2"
                  src={image_1}
                  alt=""
                />
              </div>
              <div className="flex items-center">
                <div className="flex items-center group  hover:cursor-pointer text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 group-hover:opacity-70 group-hover:transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>

                  <button className="font-bold text-xs ml-2 group-hover:opacity-70 group-hover:transition-all">
                    Xóa
                  </button>
                </div>
                <div className="flex items-center group  hover:cursor-pointer ml-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 group-hover:opacity-70 group-hover:transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>

                  <button className="font-bold text-xs group-hover:opacity-70 group-hover:transition-all ml-2">
                    Sửa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
