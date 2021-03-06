import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { AppContext } from "../state/AppState";
import { Button } from "../components/Button";
import { Figure } from "../components/Figure";

export const Greetings = observer(() => {
  const { isEndGame, winner, resetBoard, reset } = useContext(AppContext);
  const textColor = winner === "o" ? "yellow" : "cyan";
  const buttonColor = winner !== "o" ? "yellow" : "cyan";

  const handleQuit = () => {
    reset();
  };
  const handleNextRound = () => {
    resetBoard();
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
          className={`text-${textColor} flex justify-center items-center w-screen
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
          <Button onClick={handleNextRound} color={`${buttonColor}`}>
            next round
          </Button>
        </div>
      </div>
    </>
  ) : null;
});
