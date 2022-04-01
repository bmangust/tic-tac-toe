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

interface IWinner {
  winnerFound: boolean;
  isTie: boolean;
  winner: FigureType;
  winnerBoard: FigureType[];
}

const checkWinner = (board: FigureType[]): IWinner => {
  const getWinner = (winner: FigureType, winnerCells: number[]): IWinner => {
    const result: IWinner = {
      winnerFound: false,
      isTie: false,
      winner: "",
      winnerBoard: [...board],
    };
    result.winnerFound = true;
    result.winner = winner;
    winnerCells.forEach(
      (i) => (result.winnerBoard[i] = winner === "x" ? "X" : "O")
    );
    return result;
  };

  if (board[0] !== "" && board[0] === board[1] && board[1] === board[2]) {
    return getWinner(board[0], [0, 1, 2]);
  } else if (
    board[3] !== "" &&
    board[3] === board[4] &&
    board[4] === board[5]
  ) {
    return getWinner(board[3], [3, 4, 5]);
  } else if (
    board[6] !== "" &&
    board[6] === board[7] &&
    board[7] === board[8]
  ) {
    return getWinner(board[6], [6, 7, 8]);
  } else if (
    board[0] !== "" &&
    board[0] === board[3] &&
    board[3] === board[6]
  ) {
    return getWinner(board[0], [0, 3, 6]);
  } else if (
    board[1] !== "" &&
    board[1] === board[4] &&
    board[4] === board[7]
  ) {
    return getWinner(board[1], [1, 4, 7]);
  } else if (
    board[2] !== "" &&
    board[2] === board[5] &&
    board[5] === board[8]
  ) {
    return getWinner(board[2], [2, 5, 8]);
  } else if (
    board[0] !== "" &&
    board[0] === board[4] &&
    board[4] === board[8]
  ) {
    return getWinner(board[0], [0, 4, 8]);
  } else if (
    board[2] !== "" &&
    board[2] === board[4] &&
    board[4] === board[6]
  ) {
    return getWinner(board[0], [2, 4, 6]);
  } else
    return {
      winnerFound: false,
      isTie: false,
      winner: "",
      winnerBoard: [...board],
    };
};

const checkTie = (board: FigureType[]): boolean => {
  const isTie = board.reduce((prev, cur) => prev && cur !== "", true);
  return isTie;
};

export function AppReducer(
  state: AppState,
  action: ReducerAction<IAction>
): AppState {
  const currentTurn: FigureType = state.currentTurn === "o" ? "x" : "o";
  switch (action.type) {
    case "setCell":
      if (action?.payload?.index === undefined) return state;
      let board = [...state.board];
      const score = { ...state.score };
      if (board[action.payload.index] !== "") return state;
      board[action.payload.index] = state.currentTurn;

      const winner = checkWinner(board);
      if (winner.winnerFound) {
        console.log(winner);

        score[state.currentTurn]++;
        board = [...winner.winnerBoard];
        return {
          ...state,
          isEndGame: true,
          winner: winner.winner,
          board,
          score,
          currentTurn,
        };
      } else if (checkTie(board)) {
        score.ties++;
        return {
          ...state,
          isEndGame: true,
          board: initialState.board,
          score,
          currentTurn,
        };
      } else return { ...state, board, score, currentTurn };
    case "resetBoard":
      return {
        ...initialState,
        score: state.score,
        board: initialState.board,
        currentTurn,
      };
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
