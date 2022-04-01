import React, { FC } from "react";

type Props = {
  className?: string;
  bgColor?: string;
};

const Button: FC<Props> = ({ className, bgColor, children }) => {
  return (
    <button
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
