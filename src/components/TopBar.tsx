import { ResetButton } from "./Button";
import { CurrentTurn } from "./CurrentTurn";
import { Figure } from "./Figure";

export const TopBar = () => {
  return (
    <div className="m-1 grid gap-4 grid-cols-3 mb-12">
      <div className="flex items-center">
        <div className="flex h-7">
          <Figure figure="x" className="w-10" />
          <Figure figure="o" className="w-10" />
        </div>
      </div>
      <CurrentTurn />
      <ResetButton />
    </div>
  );
};
