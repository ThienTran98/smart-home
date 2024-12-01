import React from "react";
import Header from "../Component/Header/Header";
import SideBar from "../Component/SideBar/SideBar";

export default function LayoutDefault({ children }) {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="grow bg-[#f3f5f4] w-screen h-screen">{children}</div>
      </div>
    </div>
  );
}
