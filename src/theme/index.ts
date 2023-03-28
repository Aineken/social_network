// eslint-disable-next-line

const theme = {
  // Temp fonts
  fonts: {
    title: "Source Sans Pro, sans-serif",
    main: "Source Sans Pro, sans-serif",
  },
  // Colors for layout
  colors: {
    primary: "#0f141a",
    button: "#1d9bf0",
    buttonText: "#fff",
    accent1: "#fff",
    accent2: "",
    hover: "#8fcdf7",
    background: "#fff",
  },

  // Breakpoints for responsive design
  breakpoints: {
    sm: "screen and (max-width: 580px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1400px)",
  },
};

export default theme;


export type ThemeType = {theme:typeof theme}



