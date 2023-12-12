import { useReducer } from "react";
import Board from "../components/Board/Board";
import AppContext from "../contexts/Context";
import { initGameState } from "../constants";
import { reducer } from "../reducer/Reduser";
import Control from "../components/Control/Control";
import MovesList from "../components/Control/MovesList";
import TakeBack from "../components/Control/TakeBack";

const PlayPage = () => {
  const [appState, dispatch] = useReducer(reducer, initGameState);

  const providerState = { appState, dispatch };

  return (
    <AppContext.Provider value={providerState}>
      <div className="w-screen h-screen relative bg-zinc-800 ">
        <Board />
        <Control>
          <MovesList />
          <TakeBack />
        </Control>
      </div>
    </AppContext.Provider>
  );
};

export default PlayPage;
