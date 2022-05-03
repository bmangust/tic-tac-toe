import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { AppContext } from "../state/AppState";
import { Infocell } from "./Infocell";

export const Score = observer(() => {
  const { score } = useContext(AppContext);

  return (
    <div className="m-1 grid grid-cols-3 grid-rows-1 gap-2 md:gap-4">
      <Infocell score={score.x} figure={"x"} />
      <Infocell score={score.ties} figure={""} />
      <Infocell score={score.o} figure={"o"} />
    </div>
  );
});
