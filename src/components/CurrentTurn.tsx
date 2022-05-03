import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { AppContext } from "../state/AppState";
import { Figure } from "./Figure";

export const CurrentTurn = observer(() => {
  const { currentTurn } = useContext(AppContext);
  return (
    <div
      className="rounded-xl p-2 bg-cell drop-shadow-lg
    shadow-md flex items-center justify-center text-gray"
    >
      <span className="h-4 w-4 mr-2">
        <Figure figure={currentTurn} color="#a7bfc9" />
      </span>
      <span className="text-md font-bold">TURN</span>
    </div>
  );
});
