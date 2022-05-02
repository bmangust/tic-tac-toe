import { FC, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLButtonElement> {
  bgColor?: string;
}

const Button: FC<Props> = ({ className, bgColor, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-center rounded-xl p-3 px-6
    text-main grid place-content-center ${className || ""} ${
        bgColor || "bg-gray"
      }`}
    >
      <div className={`text-lg font-black uppercase`}>{children}</div>
    </button>
  );
};

export default Button;
