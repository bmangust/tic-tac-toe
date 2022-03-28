import { createContext, Dispatch } from "react";
import { FigureType } from "../components/Figure";
import { IActionPayload } from "./AppContextProvider";

export const board: FigureType[] = ["", "", "", "", "", "", "", "", ""];

export interface AppState {
  board: FigureType[];
  score: {
    x: number;
    o: number;
    ties: number;
  };
  currentTurn: FigureType;
}

export const initialState: AppState = {
  board,
  score: {
    x: 0,
    o: 0,
    ties: 0,
  },
  currentTurn: "",
};

export const AppContext = createContext<AppState>(initialState);
export const DispatchContext = createContext<Dispatch<IActionPayload> | null>(
  null
);
