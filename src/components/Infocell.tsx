import { useEffect, useState } from "react";
import { FigureType } from "./Figure";

interface Props {
  score: number;
  figure: FigureType;
}

const Infocell = ({ score, figure }: Props) => {
  const [ping, setPing] = useState("");
  const bgColor =
    figure === "x" ? "bg-cyan" : figure === "o" ? "bg-yellow" : "bg-gray";
  const text = figure === "x" ? "X (YOU)" : figure === "o" ? "O (CPU)" : "TIES";

  // adds animation for short time when score changes
  useEffect(() => {
    setPing("animate-ping");
    setTimeout(() => setPing(""), 500);
  }, [score]);

  return (
    <div
      className={`text-center rounded-xl p-3
      ${bgColor} text-main grid place-content-center`}
    >
      <div className="text-sm font-bold">{text}</div>
      <div className={`text-lg font-black ${ping}`}>{score}</div>
    </div>
  );
};

export default Infocell;
