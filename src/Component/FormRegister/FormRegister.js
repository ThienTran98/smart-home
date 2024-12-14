import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { postRegister } from "../../Service/userService";
import { useFormik } from "formik";
import * as Yup from "yup";
import { message } from "antd";

export default function FormRegister() {
  const regexNumber = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/;
  const regexName = /^[a-zA-Z0-9\s]+$/;
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/;
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      roll: "ADMIN",
      name: "",
      address: "123 Maple Ave, Springfield",
      bio: "Book enthusiast and yoga lover",
      email: "",
      phone: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(6, "Vui lòng nhập ít nhất 6 ký tự")
        .required("Vui lòng nhập trường này! "),
      password: Yup.string()
        .min(8, "Vui lòng nhập ít nhất 8 ký tự")
        .matches(
          regexPassword,
          "Mật khẩu phải chứa ít nhất một số và cả chữ hoa và chữ thường."
        )
        .required("Vui lòng nhập trường này! "),
      name: Yup.string()
        .matches(regexName, "Trường này phải là chữ viết không dấu")
        .required("Vui lòng nhập trường này! "),
      phone: Yup.string()
        .matches(regexNumber, "Trường này phải là số!")
        .required("Vui lòng nhập trường này! "),
      email: Yup.string()
        .matches(regexEmail, "Email không hợp lệ, vui lòng thử lại!")
        .required("Vui lòng nhập trường này! "),
    }),
    onSubmit: (values) => {
      postRegister(values)
        .then((response) => {
          message.success(response.data.message);
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        })
        .catch((error) => {
          console.log("error: ", error);
          message.error(`${error.response.data} please try again!`);
        });
    },
  });
  return (
    <div>
      <h2 className="leading-8 font-bold text-[28px]">Chào mừng</h2>
      <p className="leading-8 font-medium text-2xl text-black/[0.4] mt-2">
        Chỉ với 1 bước để có thể trở thành thành viên của SmartHome
      </p>

      <form className="mt-9" onSubmit={formik.handleSubmit}>
        <div className="relative z-0 w-full mb-8 group">
          <input
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-base text-gray-500 font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            placeholder=""
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && (
            <h2 className="text-red-500 text-xs font-semibold">
              {formik.errors.name}
            </h2>
          )}
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Họ và tên
          </label>
        </div>
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
            <h2 className="text-red-500 text-xs font-semibold">
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
            type="phone"
            name="phone"
            id="phone"
            className="block py-2.5 px-0 w-full text-base text-gray-500 font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            placeholder=" "
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone && (
            <h2 className="text-red-500 text-xs font-semibold">
              {formik.errors.phone}
            </h2>
          )}
          <label
            htmlFor="phone"
            className="peer-focus:font-medium absolute text-sm font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            SĐT
          </label>
        </div>
        <div className="relative z-0 w-full mb-8 group">
          <input
            type="username"
            name="username"
            id="username"
            className="block py-2.5 px-0 w-full text-base text-gray-500 font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            placeholder=" "
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username && (
            <h2 className="text-red-500 text-xs font-semibold">
              {formik.errors.username}
            </h2>
          )}
          <label
            htmlFor="username"
            className="peer-focus:font-medium absolute text-sm font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Tài khoản
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
            <h2 className="text-red-500 text-xs font-semibold">
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
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Tạo tài khoản
          </button>
          <p className="mt-4 flex items-center">
            Đã có tài khoản
            <span className="text-[#6B6BF9] font-medium hover:cursor-pointer hover:opacity-75 hover:transition-all ml-2">
              <NavLink className="block" to="/login">
                Đăng nhập
              </NavLink>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
