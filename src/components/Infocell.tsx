import { FigureType } from "./Figure";

interface Props {
  score: number;
  figure: FigureType;
}

const Infocell = ({ score, figure }: Props) => {
  const bgColor =
    figure === "x" ? "bg-cyan" : figure === "o" ? "bg-yellow" : "bg-gray";
  const text = figure === "x" ? "X (YOU)" : figure === "o" ? "O (CPU)" : "TIES";

  return (
    <div
      className={`text-center rounded-xl p-3
      ${bgColor} text-main grid place-content-center`}
    >
      <div className="text-sm font-bold">{text}</div>
      <div className="text-lg font-black">{score}</div>
    </div>
  );
};

export default Infocell;
