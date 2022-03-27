import Board from "./components/Board";

function App() {
  return (
    <div className="bg-main w-screen h-screen pt-10 pb-10 text-gray">
      <h1 className="w-full text-5xl text-center mb-10 font-black">
        Tic-Tac-Toe
      </h1>
      <Board />
    </div>
  );
}

export default App;
