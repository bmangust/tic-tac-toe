import Board from "./components/Board";
import Greetengs from "./components/Greetengs";
import AppContextProvider from "./state/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <div className="bg-main w-screen min-w-min min-h-screen  pt-10 pb-10 text-gray">
        <h1 className="w-full text-5xl text-center mb-10 font-black">
          Tic-Tac-Toe
        </h1>
        <Board />
        <Greetengs />
      </div>
    </AppContextProvider>
  );
}

export default App;
