import { FC, Reducer, ReducerAction, useReducer } from "react";
import { FigureType } from "../components/Figure";
import { AppContext, AppState, DispatchContext, initialState } from "./state";

export interface IActionPayload {
  type: "setCell" | "incrementScore" | "resetBoard" | "reset";
  payload: {
    figure: FigureType;
    index?: number;
  };
}

type IAction = Reducer<AppState, IActionPayload>;

export function AppReducer(state: AppState, action: ReducerAction<IAction>) {
  const currentTurn: FigureType = state.currentTurn === "o" ? "x" : "o";
  switch (action.type) {
    case "setCell":
      if (!action.payload.index) return state;
      const board = [...state.board];
      board[action.payload.index] = action.payload.figure;
      return { ...state, board, currentTurn };
    case "resetBoard":
      return { ...state, board: initialState.board, currentTurn };
    case "incrementScore":
      const score = { ...state.score };
      if (action.payload.figure === "") score.ties++;
      else score[action.payload.figure]++;
      return { ...state, score, currentTurn };
    case "reset":
      return initialState;
    default:
      throw new Error("Not valid action type!");
  }
}

const AppContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log(state, dispatch);
  return (
    <AppContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
