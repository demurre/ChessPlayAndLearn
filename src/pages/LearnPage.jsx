import openings from "../assets/openings";
import ChessCard from "../components/ChessCard";

const LearnPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-zinc-800">
      {openings.map((data, index) => (
        <ChessCard key={index} {...data} />
      ))}
    </div>
  );
};

export default LearnPage;
