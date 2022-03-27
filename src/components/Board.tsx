import Cell from "./Cell";
import { FigureType } from "./Figure";
import Infocell from "./Infocell";
import TopBar from "./TopBar";

const Board = () => {
  const board: FigureType[] = new Array(9).fill("");

  return (
    <div className="container mx-auto p-10 sm:w-full md:w-[31rem]">
      <TopBar />
      <div className="grid mx-auto gap-4 grid-cols-3 grid-rows-3 my-4">
        {board.map((item) => (
          <Cell item={item} />
        ))}
      </div>
      <div className="m-1 columns-3">
        <Infocell score={10} figure={"x"} />
        <Infocell score={2} figure={""} />
        <Infocell score={34} figure={"o"} />
      </div>
    </div>
  );
};

export default Board;
