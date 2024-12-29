import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

export default function Loading() {
  const Loading = useSelector((state) => {
    return state.loadingSlice.isLoading;
  });
  return (
    Loading && (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-400/[0.2] flex items-center justify-center z-50">
        <RingLoader color="#ae47ac" size={50} />
      </div>
    )
  );
}
