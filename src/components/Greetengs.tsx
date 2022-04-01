import React, { useContext } from "react";
import { actions } from "../state/actions";
import { AppContext, DispatchContext } from "../state/state";
import Button from "./Button";
import Figure from "./Figure";

const Greetengs = () => {
  const { isEndGame, winner } = useContext(AppContext);
  const dispatch = useContext(DispatchContext);
  const textColor = winner === "o" ? "text-yellow" : "text-cyan";
  const buttonColor = winner !== "o" ? "bg-yellow" : "bg-cyan";

  const handleQuit = () => {
    dispatch && dispatch(actions.reset());
  };
  const handleNextRound = () => {
    dispatch && dispatch(actions.resetBoard());
  };

  return isEndGame ? (
    <>
      <div className="z-index-9 absolute w-screen h-screen top-0 bg-black opacity-50"></div>
      <div
        className="z-index-8 w-screen h-60 absolute top-64
        flex flex-col justify-center items-center bg-darkCyan uppercase"
      >
        <span className="text-white flex justify-center items-end">
          {winner === "x" ? "You" : winner === "o" ? "CPU" : "nobody"} won!
        </span>
        <span
          className={`${textColor} flex justify-center items-center w-screen
          text-4xl font-bold tracking-wider`}
        >
          {winner === "" ? (
            <span className="mb-2">it's a tie</span>
          ) : (
            <>
              <Figure className="w-24 mx-4" figure={winner} />
              <span>takes the round</span>
            </>
          )}
        </span>
        <div className="flex gap-4">
          <Button onClick={handleQuit}>quit</Button>
          <Button onClick={handleNextRound} bgColor={`${buttonColor}`}>
            next round
          </Button>
        </div>
      </div>
    </>
  ) : null;
};

export default Greetengs;
