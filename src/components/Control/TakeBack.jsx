import { useAppContext } from "../../contexts/context";
import { takeBack } from "../../reducer/actions/move";

const TakeBack = () => {
  const { dispatch } = useAppContext();

  return (
    <div>
      <button
        className="w-[150px] h-[40px] bg-yellow-800 rounded-[20px] text-zinc-200 text-[18px] font-normal font-['Satoshi'] hover:bg-yellow-700 hover:shadow-md"
        onClick={() => dispatch(takeBack())}
      >
        Take Back
      </button>
    </div>
  );
};

export default TakeBack;
