import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex">
      <div className="w-[111px] min-h-screen relative bg-neutral-900">
        <Link
          to="/main"
          className="left-[8px] top-[14px] absolute text-zinc-200 text-[32px] font-normal font-['Satoshi']"
        >
          <button className="hover:text-zinc-400">Chess</button>
        </Link>
        <Link
          to="/learn"
          className="left-[12px] top-[515px] absolute text-zinc-200 text-[32px] font-normal font-['Satoshi']"
        >
          <button className="hover:text-zinc-400">Learn</button>
        </Link>
        <Link
          to="/play"
          className="left-[22px] top-[467px] absolute text-zinc-200 text-[32px] font-normal font-['Satoshi']"
        >
          <button className="hover:text-zinc-400">Play</button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
