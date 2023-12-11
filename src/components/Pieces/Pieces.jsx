import { useRef } from "react";
import Piece from "./Piece";
import { useAppContext } from "../../contexts/Context";
import { clearCandidates, makeNewMove } from "../../reducer/actions/move";
import arbiter from "../../arbiter/Arbites";
import { openPromotion } from "../../reducer/actions/Popup";

const Pieces = () => {
  const ref = useRef();

  const { appState, dispatch } = useAppContext();

  const currentPosition = appState.position[appState.position.length - 1];

  const calculateCoords = (e) => {
    const { width, left, top } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top) / size);
    return { x, y };
  };

  const openPromotionBox = ({ rank, file, x, y }) =>
    dispatch(openPromotion({ rank: Number(rank), file: Number(file), x, y }));

  const move = (e) => {
    const { x, y } = calculateCoords(e);
    const [piece, rank, file] = e.dataTransfer.getData("text").split(",");
    if (appState.candidateMoves?.find((m) => m[0] === x && m[1] === y)) {
      if ((piece === "wp" && x === 7) || (piece === "bp" && x === 0)) {
        openPromotionBox({ rank, file, x, y });
        return;
      }
      const newPosition = arbiter.performMove({
        position: currentPosition,
        piece,
        rank,
        file,
        x,
        y,
      });
      dispatch(makeNewMove({ newPosition }));
    }
    dispatch(clearCandidates());
  };

  const onDrop = (e) => {
    e.preventDefault();

    move(e);
  };

  const onDragOver = (e) => e.preventDefault();

  return (
    <div
      ref={ref}
      onDrop={onDrop}
      onDragOver={onDragOver}
      className="absolute left-[25px] right-0 top-0 bottom-[25px]"
    >
      {currentPosition.map((r, rank) =>
        r.map((f, file) =>
          currentPosition[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={currentPosition[rank][file]}
            />
          ) : null
        )
      )}
    </div>
  );
};
export default Pieces;
