import React from "react";

const ChessCard = ({ name, preview, learn }) => {
  return (
    <div className="mr-8">
      <div className="w-[284px] p-6 bg-neutral-900 rounded-[10px] flex-col items-center justify-center gap-4 inline-flex">
        <div>
          <img src={preview} alt={`${name} Preview`} />
          <div className="text-white text-[18px] font-normal font-['Satoshi']">
            {name}
          </div>
        </div>
        <div>
          <a
            href={learn}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[236px] h-[57.77px] relative inline-block"
          >
            <button className="w-full h-[40px] bg-zinc-300 rounded-[20px] text-black text-[18px] font-normal font-['Satoshi'] hover:bg-zinc-400 hover:shadow-md">
              Learn
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChessCard;
