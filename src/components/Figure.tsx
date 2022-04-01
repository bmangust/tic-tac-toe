export type FigureType = "x" | "o" | "" | "X" | "O";

interface Props {
  figure: FigureType;
  color?: string;
  width?: string;
  className?: string;
}
const Figure = ({ figure, color, width = "100%", className }: Props) => {
  if (figure === "o" || figure === "O")
    return (
      <svg
        viewBox="0 0 500 500"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height="100%"
        className={className}
      >
        <circle
          fill="none"
          stroke={color || figure === "o" ? "#f4b037" : "#203540"}
          strokeWidth="145"
          cx="250"
          cy="250"
          r="160"
        />
      </svg>
    );
  if (figure === "x" || figure === "X")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width={width}
        height="100%"
        className={className}
        fill={color || figure === "x" ? "#2ec4bd" : "#203540"}
        viewBox="0 0 490 490"
      >
        <polygon points="386.813,0 245,141.812 103.188,0 0,103.188 141.813,245 0,386.812 103.187,489.999 245,348.187 386.813,490   490,386.812 348.187,244.999 490,103.187 " />
      </svg>
    );
  return null;
};

export default Figure;
