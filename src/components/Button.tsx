import { FC, HTMLProps, useContext } from "react";
import { AppContext } from "../state/AppState";

interface Props extends HTMLProps<HTMLButtonElement> {
  color?: "yellow" | "cyan" | "gray";
}

export const Button: FC<Props> = ({
  className,
  color = "gray",
  children,
  onClick,
}) => {
  const classname = `bg-${color} 
drop-shadow-${color} hover:drop-shadow-lg${color} 
text-lg font-black uppercase text-main 
rounded-xl p-3 px-6 duration-100
${className || ""}`;
  console.log(classname);
  return (
    <button onClick={onClick} className={classname}>
      {children}
    </button>
  );
};

export const ResetButton = () => {
  const { reset } = useContext(AppContext);

  const handleReset = () => {
    reset();
  };
  return (
    <div className="flex justify-end items-center">
      <button
        onClick={handleReset}
        className="w-9 h-9 rounded-lg bg-gray text-main
            flex justify-center items-center drop-shadow-smgray"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={0.5}
        >
          <path d="M13.1459 11.0499L12.9716 9.05752L15.3462 8.84977C14.4471 7.98322 13.2242 7.4503 11.8769 7.4503C9.11547 7.4503 6.87689 9.68888 6.87689 12.4503C6.87689 15.2117 9.11547 17.4503 11.8769 17.4503C13.6977 17.4503 15.2911 16.4771 16.1654 15.0224L18.1682 15.5231C17.0301 17.8487 14.6405 19.4503 11.8769 19.4503C8.0109 19.4503 4.87689 16.3163 4.87689 12.4503C4.87689 8.58431 8.0109 5.4503 11.8769 5.4503C13.8233 5.4503 15.5842 6.24474 16.853 7.52706L16.6078 4.72412L18.6002 4.5498L19.1231 10.527L13.1459 11.0499Z" />
        </svg>
      </button>
    </div>
  );
};
