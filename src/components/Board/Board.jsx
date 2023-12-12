import arbiter from "../../arbiter/Arbiter";
import { getKingPosition } from "../../arbiter/GetMoves";
import { useAppContext } from "../../contexts/Context";
import Pieces from "../Pieces/Pieces";
import GameEnds from "../Popup/GameEnds";
import Popup from "../Popup/Popup";
import PromotionBox from "../Popup/PromotionBox";
import Files from "./Files";
import Ranks from "./Ranks";

const Board = () => {
  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i);
  const files = Array(8)
    .fill()
    .map((x, i) => i + 1);

  const { appState } = useAppContext();
  const position = appState.position[appState.position.length - 1];

  const isChecked = (() => {
    const isInCheck = arbiter.isPlayerInCheck({
      positionAfterMove: position,
      player: appState.turn,
    });

    if (isInCheck) return getKingPosition(position, appState.turn);

    return null;
  })();

  const getClassName = (i, j) => {
    let classes = "tile";

    classes += (i + j) % 2 === 0 ? " bg-orange-300" : " bg-yellow-800";

    if (appState.candidateMoves?.find((m) => m[0] === i && m[1] === j)) {
      if (position[i][j])
        classes +=
          " after:absolute after:content-[''] after:w-[100px] after:h-[100px] after:rounded-[50%] after:border-[6px] after:border-solid after:border-zinc-800 after:border-opacity-25";
      else
        classes +=
          " after:absolute after:content-[''] after:w-[100px] after:h-[100px] after:rounded-[50%] after:bg-zinc-800 after:opacity-25";
    }

    if (isChecked && isChecked[0] === i && isChecked[1] === j)
      classes +=
        " after:absolute after:content-[''] after:w-[100px] after:h-[100px] after:rounded-[50%] after:bg-red-600 after:opacity-50";
    return classes;
  };

  return (
    <div className="grid relative grid-cols-[25px_800px] max-h-[800px] top-[70px]">
      <Ranks ranks={ranks} />

      <div className="grid grid-cols-8 grid-rows-8 w-[800px] h-[800px]">
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <div
              key={file + "-" + rank}
              className={getClassName(7 - i, j)}
            ></div>
          ))
        )}
      </div>

      <Pieces />

      <Popup>
        <PromotionBox />
        <GameEnds />
      </Popup>

      <Files files={files} />
    </div>
  );
};

export default Board;
