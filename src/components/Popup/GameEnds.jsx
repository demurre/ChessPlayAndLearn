import { Status } from "../../constants";
import { useAppContext } from "../../contexts/Context";
import { setupNewGame } from "../../reducer/actions/Game";

const GameEnds = ({ onClosePopup }) => {
  const {
    appState: { status },
    dispatch,
  } = useAppContext();

  if (status === Status.ongoing || status === Status.promoting) return null;

  const newGame = () => {
    dispatch(setupNewGame());
  };

  const isWin = status.endsWith("wins");

  return (
    <div className="popup-inner popup-inner__center">
      <h1>{isWin ? status : "Draw"}</h1>
      <p>{!isWin && status}</p>
      <div className={`${status}`} />
      <button
        className="w-[50%] h-[40px] bg-yellow-800 rounded-[30px] text-black text-[18px] font-normal font-['Satoshi'] hover:bg-yellow-700 hover:shadow-md"
        onClick={newGame}
      >
        New Game
      </button>
    </div>
  );
};

export default GameEnds;
