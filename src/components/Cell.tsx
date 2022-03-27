import Figure, { FigureType } from "./Figure";

interface Props {
  item?: FigureType | "";
}

const Cell = ({ item = "" }: Props) => {
  return (
    <div className="rounded-2xl p-8 bg-cell shadow-md grid place-content-center min-w-[8rem] min-h-[8rem]">
      <Figure figure={item} />
    </div>
  );
};

export default Cell;
