import React from "react";

const ChessCard = ({ name, preview, learn }) => {
  return (
    <div className="mr-16">
      <div className="w-[284px] p-6 bg-neutral-900 rounded-[30px] flex-col justify-start items-start gap-4 inline-flex">
        <img className="relative" src={preview} alt={`${name} Preview`} />
        <div className="flex-col justify-start items-start flex">
          <div className="text-white text-[18px] font-normal font-['Satoshi']">
            {name}
          </div>
        </div>
        <a
          href={learn}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[236px] h-[57.77px] relative inline-block"
        >
          <button className="w-full h-[40px] bg-zinc-300 rounded-[30px] text-black text-[18px] font-normal font-['Satoshi'] hover:bg-zinc-400 hover:shadow-md">
            Learn
          </button>
        </a>
      </div>
    </div>
  );
};

export default ChessCard;
