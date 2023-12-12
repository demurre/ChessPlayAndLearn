import { chessTerms, openings } from "../assets/store";
import ChessCard from "../components/ChessCard";

const LearnPage = () => {
  return (
    <div className="w-screen min-h-screen bg-zinc-800 flex items-center justify-center">
      <div className="ml-4 mt-4">
        <h1 className="text-white text-[24px] font-normal font-['Satoshi'] flex justify-center">
          Chess Terms
        </h1>
        <div className="flex flex-wrap">
          {chessTerms.map((data, index) => (
            <ChessCard key={index} {...data} />
          ))}
        </div>

        <h1 className="text-white text-[24px] font-normal font-['Satoshi'] flex justify-center">
          Openings
        </h1>
        <div className="flex flex-wrap">
          {openings.map((data, index) => (
            <ChessCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnPage;
