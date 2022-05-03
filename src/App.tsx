import { BoardContainer } from "./components/BoardContainer";
import { Greetengs } from "./components/Greetengs";
import AppContextProvider from "./state/AppState";

function App() {
  return (
    <AppContextProvider>
      <div className="bg-main w-screen min-w-[20rem] min-h-screen pt-10 pb-10 text-gray">
        <h1 className="w-full text-5xl text-center mb-10 font-black">
          Tic-Tac-Toe
        </h1>
        <BoardContainer />
        <Greetengs />
      </div>
    </AppContextProvider>
  );
}

export default App;
