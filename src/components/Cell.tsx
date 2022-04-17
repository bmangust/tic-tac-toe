import { useContext } from "react";
import { actions } from "../state/actions";
import { AppContext, DispatchContext } from "../state/state";
import Figure, { FigureType } from "./Figure";

interface Props {
  figure?: FigureType | "";
  index: number;
}

const Cell = ({ figure = "", index }: Props) => {
  const dispatch = useContext(DispatchContext);
  const { currentTurn } = useContext(AppContext);
  // if 'x' or 'o' use dark bg
  // else use color of figure
  const bg =
    figure === "x" || figure === "o" || figure === ""
      ? "bg-cell"
      : figure === "X"
      ? "bg-cyan"
      : "bg-yellow";

  const handleClick = () => {
    if (!dispatch) return;
    dispatch(actions.setCell(index));
  };

  return (
    <div
      className={`rounded-2xl ${bg} shadow-md grid
    place-content-center min-w-[4rem] min-h-[4rem] p-6
    md:p-8 md:min-w-[8rem] md:min-h-[8rem]
    cursor-pointer group drop-shadow-xl`}
      onClick={handleClick}
    >
      {/* preview on hover */}
      {figure === "" && (
        <Figure
          figure={currentTurn}
          className="opacity-0 duration-200 group-hover:opacity-50"
        />
      )}
      {/* actual figure */}
      <Figure figure={figure} />
    </div>
  );
};

export default Cell;
