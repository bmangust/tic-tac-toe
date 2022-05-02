import { action, makeAutoObservable } from "mobx";
import { createContext, FC } from "react";
import { type FigureType } from "../components/Figure";
import { checkTie, checkWinner, type IWinner } from "./stateUtils";

class AppState {
  board: FigureType[] = ["", "", "", "", "", "", "", "", ""];
  score: {
    x: number;
    o: number;
    ties: number;
  } = {
    x: 0,
    o: 0,
    ties: 0,
  };
  currentTurn: "x" | "o" = "x";
  winner: FigureType = "";
  isEndGame: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setCell = (index: number) => {
    if (index === undefined) return;
    if (this.board[index] !== "") return;
    this.board[index] = this.currentTurn;

    const winner = checkWinner(this.board);
    if (winner.winnerFound) {
      this.setWinner(winner);
    } else if (checkTie(this.board)) {
      this.setTie();
    }
    this.setNextTurn();
  };

  @action
  setWinner = (winner: IWinner) => {
    this.score[this.currentTurn]++;
    this.board = winner.winnerBoard;
    this.winner = winner.winner;
    this.isEndGame = true;
  };

  @action
  setTie = () => {
    this.score.ties++;
    this.isEndGame = true;
  };

  @action
  setNextTurn = () => {
    this.currentTurn = this.currentTurn === "o" ? "x" : "o";
  };

  @action
  resetBoard = () => {
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.winner = "";
    this.isEndGame = false;
  };

  @action
  reset = () => {
    this.resetBoard();
    this.score = {
      x: 0,
      o: 0,
      ties: 0,
    };
    this.currentTurn = "x";
    this.winner = "";
    this.isEndGame = false;
  };
}

const state = new AppState();

export const AppContext = createContext<AppState>(state);
const AppContextProvider: FC = ({ children }) => {
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
