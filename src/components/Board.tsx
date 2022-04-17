import { useContext } from "react";
import { AppContext } from "../state/state";
import Cell from "./Cell";
import Infocell from "./Infocell";
import TopBar from "./TopBar";

const Board = () => {
  const { board, score } = useContext(AppContext);

  return (
    <div className="container mx-auto p-10 sm:w-full md:w-[31rem]">
      <TopBar />
      <div className="grid mx-auto gap-2 md:gap-4 grid-cols-3 grid-rows-3 my-4">
        {board.map((figure, index) => (
          <Cell figure={figure} index={index} key={index} />
        ))}
      </div>
      <div className="m-1 grid grid-cols-3 grid-rows-1 gap-2 md:gap-4">
        <Infocell score={score.x} figure={"x"} />
        <Infocell score={score.ties} figure={""} />
        <Infocell score={score.o} figure={"o"} />
      </div>
    </div>
  );
};

export default Board;
