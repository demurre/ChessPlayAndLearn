import { chessTerms, openings } from "../assets/store";
import { CardList } from "../components/CartList";

const LearnPage = () => {
  return (
    <div className="w-screen min-h-screen bg-zinc-800 ">
      <h1 className="text-white text-[24px] font-normal font-['Satoshi'] flex justify-center mt-[25px]">
        Chess Terms
      </h1>
      <div className="flex flex-wrap justify-center">
        <CardList list={chessTerms} />
      </div>

      <h1 className="text-white text-[24px] font-normal font-['Satoshi'] flex justify-center">
        Openings
      </h1>
      <div className="flex flex-wrap justify-center">
        <CardList list={openings} />
      </div>
    </div>
  );
};

export default LearnPage;
