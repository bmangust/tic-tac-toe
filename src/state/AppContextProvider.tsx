import { FC, Reducer, ReducerAction, useReducer } from "react";
import { FigureType } from "../components/Figure";
import { AppContext, AppState, DispatchContext, initialState } from "./state";

export interface IActionPayload {
  type: "setCell" | "incrementScore" | "incrementTie" | "resetBoard" | "reset";
  payload?: {
    index?: number;
  };
}

type IAction = Reducer<AppState, IActionPayload>;

const checkWinner = (board: FigureType[]): boolean => {
  if (
    (board[0] !== "" && board[0] === board[1] && board[1] === board[2]) ||
    (board[3] !== "" && board[3] === board[4] && board[4] === board[5]) ||
    (board[6] !== "" && board[6] === board[7] && board[7] === board[8]) ||
    (board[0] !== "" && board[0] === board[3] && board[3] === board[6]) ||
    (board[1] !== "" && board[1] === board[4] && board[4] === board[7]) ||
    (board[2] !== "" && board[2] === board[5] && board[5] === board[8]) ||
    (board[0] !== "" && board[0] === board[4] && board[4] === board[8]) ||
    (board[2] !== "" && board[2] === board[4] && board[4] === board[6])
  )
    return true;
  return false;
};

const checkTie = (board: FigureType[]): boolean => {
  const isTie = board.reduce((prev, cur) => prev && cur !== "", true);
  return isTie;
};

export function AppReducer(state: AppState, action: ReducerAction<IAction>) {
  const currentTurn: FigureType = state.currentTurn === "o" ? "x" : "o";
  switch (action.type) {
    case "setCell":
      if (action?.payload?.index === undefined) return state;
      let board = [...state.board];
      const score = { ...state.score };
      if (board[action.payload.index] !== "") return state;
      board[action.payload.index] = state.currentTurn;

      if (checkWinner(board)) {
        // TODO: add congratulations
        score[state.currentTurn]++;
        board = initialState.board;
        return { board, score, currentTurn };
      } else if (checkTie(board)) {
        score.ties++;
        board = initialState.board;
        return { board, score, currentTurn };
      } else return { board, score, currentTurn };
    case "resetBoard":
      return { ...state, board: initialState.board, currentTurn };
    case "reset":
      return { ...initialState, currentTurn };
    default:
      throw new Error("Not a valid action type!");
  }
}

const AppContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
