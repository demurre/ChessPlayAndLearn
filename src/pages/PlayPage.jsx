import { useReducer } from "react";
import Board from "../components/Board/Board";
import AppContext from "../contexts/Context";
import { reducer } from "../reducer/reduser";
import { initGameState } from "../constant";

const PlayPage = () => {
  const [appState, dispatch] = useReducer(reducer, initGameState);

  const providerState = { appState, dispatch };

  return (
    <AppContext.Provider value={providerState}>
      <div className="w-screen h-screen relative bg-zinc-800">
        <Board />
      </div>
    </AppContext.Provider>
  );
};

export default PlayPage;
