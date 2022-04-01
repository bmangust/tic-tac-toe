import { IActionPayload } from "./AppContextProvider";

const setCell = (index: number): IActionPayload => ({
  type: "setCell",
  payload: { index },
});
const resetBoard = (): IActionPayload => ({ type: "resetBoard" });
const reset = (): IActionPayload => ({ type: "reset" });

export const actions = {
  setCell,
  reset,
  resetBoard,
};
