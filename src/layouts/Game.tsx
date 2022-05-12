import { observer } from "mobx-react-lite";
import { Board } from "../components/Board";
import { Score } from "../components/Score";
import { TopBar } from "../components/TopBar";

export const BoardContainer = observer(() => {
  return (
    <div className="container mx-auto p-10 sm:w-full md:w-[31rem]">
      <TopBar />
      <Board />
      <Score />
    </div>
  );
});
