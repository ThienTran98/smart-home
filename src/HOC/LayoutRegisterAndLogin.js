import React from "react";
import logo from "../assets/img/Group 3340.png";
import vector1 from "../assets/img/Vector 3015 (1).png";
import vector2 from "../assets/img/Vector 3015 (2).png";
import vector3 from "../assets/img/Vector 3015.png";
import vector4 from "../assets/img/Vector 3015 (3).png";
import vector5 from "../assets/img/Happy Bunch Desk.png";

export default function LayoutRegisterAndLogin({ children }) {
  return (
    <div className="w-full h-full relative">
      <div className="pt-14 pl-16">
        <img src={logo} alt="" />
      </div>
      <img
        className="absolute top-0 left-1/2 right-[-50%] translate-x-[-50%] "
        src={vector3}
        alt=""
      />
      <img src={vector1} className="absolute top-0 right-0" alt="" />
      <img src={vector2} className="absolute bottom-0 right-0" alt="" />

      <div className=" px-40 py-36">
        <div className="flex items-center ">
          <div className="h-[500px] mr-[220px]">{children}</div>
          <div className="w-1/2 relative h-[500px] ">
            <img className="absolute top-0 left-0" src={vector4} alt="" />
            <img className="absolute" src={vector5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
