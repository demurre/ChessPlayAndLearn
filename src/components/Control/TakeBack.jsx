import { useAppContext } from "../../contexts/Context";
import { takeBack } from "../../reducer/actions/Move";

const TakeBack = () => {
  const { dispatch } = useAppContext();

  return (
    <div>
      <button
        className="w-[150px] h-[40px] bg-yellow-800 rounded-[20px] text-black text-[18px] font-normal font-['Satoshi'] hover:bg-yellow-700 hover:shadow-md"
        onClick={() => dispatch(takeBack())}
      >
        Take Back
      </button>
    </div>
  );
};

export default TakeBack;
