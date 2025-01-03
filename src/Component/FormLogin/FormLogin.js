import { useFormik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { message } from "antd";
import { postLogin } from "../../Service/userService";
import { userLocalStorage } from "../../Service/localstorageService";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../../redux/userSlice";
export default function FormLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Vui lòng nhập trường này! "),
      password: Yup.string().required("Vui lòng nhập trường này! "),
    }),
    onSubmit: (values) => {
      postLogin(values)
        .then((res) => {
          dispatch(setUserLogin(res.data));
          userLocalStorage.set(res.data);
          message.success({
            content: `${res.data?.message} !`,
            duration: 1,
          });
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch((err) => {
          console.log("err: ", err);
          message.error(`${err.response?.data} please try again`, 2);
        });
    },
  });
  return (
    <div>
      <h2 className="leading-8 font-bold text-[28px]">Chào mừng trở lại</h2>
      <p className="leading-8 font-medium text-2xl text-black/[0.4] mt-2">
        SmartHome đã sẵn sàng phục vụ bạn !
      </p>

      <form className="mt-9" onSubmit={formik.handleSubmit}>
        <div className="relative z-0 w-full mb-8 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-base text-gray-500 font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            placeholder=" "
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && (
            <h2 className="text-red-600 font-semibold text-xs">
              {formik.errors.email}
            </h2>
          )}
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-8 group">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-base text-gray-500 font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            placeholder=" "
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && (
            <h2 className="text-red-600 font-semibold text-xs">
              {formik.errors.password}
            </h2>
          )}
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mật khẩu
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Đăng nhập
          </button>
          <p className="mt-4 flex items-center">
            Bạn chưa có tài khoản ?
            <span className="text-[#6B6BF9] font-medium hover:cursor-pointer hover:opacity-75 hover:transition-all ml-2">
              <NavLink className="block" to="/register">
                Tạo tài khoản
              </NavLink>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
