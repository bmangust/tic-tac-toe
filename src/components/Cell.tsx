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

  const handleClick = () => {
    if (!dispatch) return;
    dispatch({ type: "setCell", payload: { index } });
  };

  return (
    <div
      className="rounded-2xl p-8 bg-cell shadow-md
    grid place-content-center min-w-[8rem] min-h-[8rem]
    cursor-pointer group"
      onClick={handleClick}
    >
      {figure === "" && (
        <Figure
          figure={currentTurn}
          className="opacity-0 duration-200 group-hover:opacity-50"
        />
      )}
      <Figure figure={figure} />
    </div>
  );
};

export default Cell;
