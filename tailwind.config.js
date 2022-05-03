module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1a2a32",
        cell: "#203540",
        "cell-shadow": "#121f28",
        gray: "#a7bfc9",
        cyan: "#2ec4bd",
        yellow: "#f4b037",
        darkCyan: "#203540",
      },
      dropShadow: {
        lg: "0 4px 1px rgba(0, 0, 0, 0.25)",
        xl: "0 8px 1px rgba(0, 0, 0, 0.25)",
        yellow: "0 6px 1px #f4b03780",
        cyan: "0 6px 1px #2ec4bd80",
        gray: "0 6px 1px #a7bfc980",
        lgcyan: "0 8px 3px #2ec4bd80",
        lgyellow: "0 8px 3px #f4b03780",
        lggray: "0 8px 3px #a7bfc980",
        smgray: "0 4px 1px #a7bfc980",
      },
    },
    container: {
      center: true,
    },
  },
  safelist: [
    {
      pattern: /(drop-shadow|bg)-(lg)?(cyan|yellow|gray)/,
      variants: ["hover"],
    },
  ],
  plugins: [],
};
