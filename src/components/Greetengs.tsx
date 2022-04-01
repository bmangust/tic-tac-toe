import React, { useContext } from "react";
import { AppContext } from "../state/state";
import Button from "./Button";
import Figure from "./Figure";

const Greetengs = () => {
  const { isEndGame, winner } = useContext(AppContext);
  const textColor = winner === "x" ? "text-cyan" : "text-yellow";

  return isEndGame ? (
    <>
      <div className="z-index-9 absolute w-screen h-screen top-0 bg-black opacity-50"></div>
      <div
        className="z-index-8 w-screen h-60 absolute top-64
        flex flex-col justify-center items-center bg-darkCyan uppercase"
      >
        <span className="text-white flex justify-center items-end">
          {winner === "x" ? "You" : "CPU"} won!
        </span>
        <span
          className={`${textColor} flex justify-center items-center w-screen
          text-4xl font-bold tracking-wider`}
        >
          <Figure className="w-24 mx-4" figure="x" /> takes the round
        </span>
        <div className="flex gap-4">
          <Button>quit</Button>
          <Button bgColor="bg-yellow">next round</Button>
        </div>
      </div>
    </>
  ) : null;
};

export default Greetengs;
