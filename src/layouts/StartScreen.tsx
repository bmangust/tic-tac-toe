export const StartScreen = () => {
  return (
    <div className="container mx-auto sm:w-full md:w-[31rem]">
      <div
        className="p-3 mb-5 rounded-md bg-darkCyan
    drop-shadow-lg
    flex "
      >
        <span className="text-gray font-bold text-lg uppercase mx-auto">
          Pick player 1's mark
        </span>
        <fieldset className="relative">
          <label htmlFor="x" className="">
            <div
              className="can-toggle__switch"
              data-checked="x"
              data-unchecked="o"
            ></div>
          </label>
          <input
            type="checkbox"
            name="x"
            id="x"
            className="opacity-0 w-0 h-0"
          />
        </fieldset>
      </div>
    </div>
  );
};
