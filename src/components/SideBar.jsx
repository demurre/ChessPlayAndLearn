import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex">
      <div className="w-[111px] h-screen relative bg-neutral-900">
        <Link
          to="/learn"
          className="left-[12px] top-[515px] absolute text-white text-[32px] font-normal font-['Satoshi']"
        >
          <button className="bg-transparent border-none">Learn</button>
        </Link>
        <Link
          to="/main"
          className="left-[8px] top-[14px] absolute text-white text-[32px] font-normal font-['Satoshi']"
        >
          <button className="bg-transparent border-none">Chess</button>
        </Link>
        <Link
          to="/play"
          className="left-[22px] top-[467px] absolute text-white text-[32px] font-normal font-['Satoshi']"
        >
          <button className="bg-transparent border-none">Play</button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
