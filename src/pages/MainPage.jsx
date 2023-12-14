import React from "react";
import ChessCard from "../components/ChessCard";
import { openings } from "../assets/store";
import PlayCard from "../components/PlayCard";

const MainPage = () => {
  const randomIndex = Math.floor(Math.random() * openings.length);
  const randomChessOpening = openings[randomIndex];

  return (
    <div className="w-screen h-screen bg-zinc-800">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-zinc-200 text-[40px] font-normal font-['Satoshi']">
          Welcome back!
        </h1>
        <div className="flex flex-row justify-center">
          <div className="mr-4">
            <h1 className="text-zinc-200 text-[32px] font-normal font-['Satoshi']">
              Learn today
            </h1>
            <ChessCard {...randomChessOpening} />
          </div>
          <div>
            <h1 className="text-zinc-200 text-[32px] font-normal font-['Satoshi']">
              Wanna play?
            </h1>
            <PlayCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
