import { BoardContainer } from "./layouts/Game";
import { Greetings } from "./layouts/Greetings";
import { StartScreen } from "./layouts/StartScreen";
import AppContextProvider from "./state/AppState";

function App() {
  return (
    <AppContextProvider>
      <div className="bg-main w-screen min-w-[20rem] min-h-screen pt-10 pb-10 text-gray">
        <h1 className="w-full text-5xl text-center mb-10 font-black">
          Tic-Tac-Toe
        </h1>
        <StartScreen />
        {/* <BoardContainer />
        <Greetings /> */}
      </div>
    </AppContextProvider>
  );
}

export default App;
