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
        cyan: "0 4px 1px rgb(46 196 189, 0.25)",
        yellow: "0 4px 1px rgba(244 176 55, 0.25)",
        gray: "0 4px 1px #a7bfc980",
      },
      boxShadow: {
        gray: "0 35px 60px -15px #a7bfc980",
        cyan: "0 35px 60px -15px #188b87",
        yellow: "0 35px 60px -15px #ca8c14",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
