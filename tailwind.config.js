/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      StrongCyan: "hsl(172, 67%, 45%)",
      VeryDarkCyan: "hsl(183, 100%, 15%)",
      DarkGrayishCyan: "hsl(186, 14%, 43%)",
      GrayishCyan: "hsl(184, 14%, 56%)",
      LightGrayishCyan: "hsl(185, 41%, 84%)",
      VeryLightGrayishCyan: "hsl(189, 41%, 97%)",
      White: "hsl(0, 0%, 100%)",
      inputBG: "hsla(185, 38%, 97%, 1)",
      ButtonHoverCL: "hsla(173, 61%, 77%, 1)",
      InputFalse: "hsla(183, 78%, 24%, 1)",
      Red: "#c61306",
    },
    extend: {},
  },
  plugins: [],
};
