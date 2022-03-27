export type FigureType = "x" | "o" | "";

interface Props {
  figure: FigureType;
  color?: string;
  width?: string;
  className?: string;
}
const Figure = ({ figure, color, width = "100%", className }: Props) => {
  if (figure === "o")
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
          stroke={color || "#f4b037"}
          strokeWidth="145"
          cx="250"
          cy="250"
          r="160"
        />
      </svg>
    );
  if (figure === "x")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        width={width}
        height="100%"
        className={className}
        fill={color || "#2ec4bd"}
        viewBox="0 0 490 490"
        //   style="enable-background:new 0 0 490 490;"
        xmlSpace="preserve"
      >
        <polygon points="386.813,0 245,141.812 103.188,0 0,103.188 141.813,245 0,386.812 103.187,489.999 245,348.187 386.813,490   490,386.812 348.187,244.999 490,103.187 " />
      </svg>
    );
  return (
    // <svg
    //   x="0px"
    //   y="0px"
    //   width="94px"
    //   height="94px"
    //   viewBox="0 0 94 94"
    //   //   style="enable-background:new 0 0 94 94;"
    //   xml:space="preserve"
    // >
    //   <g>
    //     <path d="M47,94C21.084,94,0,72.916,0,47S21.084,0,47,0s47,21.084,47,47S72.916,94,47,94z M47,12.186    c-19.196,0-34.814,15.618-34.814,34.814c0,19.195,15.618,34.814,34.814,34.814c19.195,0,34.814-15.619,34.814-34.814    C81.814,27.804,66.195,12.186,47,12.186z" />
    //   </g>
    // </svg>
    null
  );
};

export default Figure;
