import Figure, { FigureType } from "./Figure";

interface Props {
  item?: FigureType | "";
}

const Cell = ({ item = "" }: Props) => {
  return (
    <div className="rounded-2xl p-8 bg-cell shadow-md grid place-content-center">
      <Figure figure={item} />
    </div>
  );
};

export default Cell;
