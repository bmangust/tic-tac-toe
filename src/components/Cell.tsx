import { useContext } from "react";
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
    dispatch({ type: "setCell", payload: { index } });
  };

  return (
    <div
      className={`rounded-2xl p-8 ${bg} shadow-md
    grid place-content-center min-w-[8rem] min-h-[8rem]
    cursor-pointer group`}
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
