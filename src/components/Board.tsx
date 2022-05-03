import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { AppContext } from "../state/AppState";
import { Cell } from "./Cell";

export const Board = observer(() => {
  const { board } = useContext(AppContext);

  return (
    <div className="grid mx-auto gap-2 md:gap-4 grid-cols-3 grid-rows-3 my-4">
      {board.map((figure, index) => (
        <Cell figure={figure} index={index} key={index} />
      ))}
    </div>
  );
});
