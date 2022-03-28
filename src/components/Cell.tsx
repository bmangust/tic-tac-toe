import { useContext } from "react";
import { DispatchContext } from "../state/state";
import Figure, { FigureType } from "./Figure";

interface Props {
  figure?: FigureType | "";
  index: number;
}

const Cell = ({ figure = "", index }: Props) => {
  const dispatch = useContext(DispatchContext);

  const handleClick = () => {
    if (!dispatch) return;
    dispatch({ type: "setCell", payload: { index } });
  };

  return (
    <div
      className="rounded-2xl p-8 bg-cell shadow-md
    grid place-content-center min-w-[8rem] min-h-[8rem]
    cursor-pointer"
      onClick={handleClick}
    >
      <Figure figure={figure} />
    </div>
  );
};

export default Cell;
