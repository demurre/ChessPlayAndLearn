import React from "react";
import { Link } from "react-router-dom";

const PlayCard = () => {
  return (
    <div className="mr-4">
      <div className="w-[284px] p-6 bg-neutral-900 rounded-[10px] flex-col items-center justify-center gap-4 inline-flex">
        <div>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/CHESScom/phphK5JVu.png"
            alt={`Preview`}
          />
        </div>
        <div>
          <Link
            to="/play"
            className="w-[236px] h-[57.77px] relative inline-block mt-6"
          >
            <button className="w-full h-[40px] bg-zinc-300 rounded-[20px] text-black text-[18px] font-normal font-['Satoshi'] hover:bg-zinc-400 hover:shadow-md">
              Play
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayCard;
