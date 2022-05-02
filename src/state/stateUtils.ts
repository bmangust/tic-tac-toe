import { FigureType } from "../components/Figure";

export interface IWinner {
  winnerFound: boolean;
  isTie: boolean;
  winner: FigureType;
  winnerBoard: FigureType[];
}

export const checkWinner = (board: FigureType[]): IWinner => {
  const getWinner = (winner: FigureType, winnerCells: number[]): IWinner => {
    const result: IWinner = {
      winnerFound: true,
      isTie: false,
      winner: "",
      winnerBoard: [...board],
    };
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
    return getWinner(board[2], [2, 4, 6]);
  } else
    return {
      winnerFound: false,
      isTie: false,
      winner: "",
      winnerBoard: [...board],
    };
};

export const checkTie = (board: FigureType[]): boolean => {
  const isTie = board.reduce((prev, cur) => prev && cur !== "", true);
  return isTie;
};
