import { useReducer } from "react";
import Board from "../components/Board/Board";
import AppContext from "../contexts/context";
import { initGameState } from "../constants";
import { reducer } from "../reducer/reduser";
import Control from "../components/Control/Control";
import MovesList from "../components/Control/MovesList";
import TakeBack from "../components/Control/TakeBack";

const PlayPage = () => {
  const [appState, dispatch] = useReducer(reducer, initGameState);

  const providerState = { appState, dispatch };

  return (
    <AppContext.Provider value={providerState}>
      <div className="w-screen h-screen relative bg-zinc-800 flex place-content-center ">
        <Board />

        <div className="flex col-2">
          <Control>
            <MovesList />
            <TakeBack />
          </Control>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default PlayPage;
