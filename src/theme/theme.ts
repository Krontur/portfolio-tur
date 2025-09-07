import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0ea5e9",   // cian eléctrico
      light: "#38bdf8",
      dark: "#0369a1",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#22c55e",   // verde electrotecnia
      light: "#4ade80",
      dark: "#166534",
      contrastText: "#ffffff",
    },
    background: {
      default: "#05080f", // más oscuro para mayor contraste
      paper: "#232b3b",   // un poco más claro para contraste con default
    },
    text: {
      primary: "#fff", // blanco puro
      secondary: "#e0e0e0", // gris muy claro
    },
    error: {
      main: "#ef4444",
    },
    warning: {
      main: "#f59e0b",
    },
    info: {
      main: "#3b82f6",
    },
    success: {
      main: "#22c55e",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    h1: { fontWeight: 800, color: '#fff', fontSize: '4rem' },
    h2: { fontWeight: 700, color: '#fff', fontSize: '3rem' },
    h3: { fontWeight: 600, color: '#fff', fontSize: '2,5rem' },
    h4: { fontWeight: 500, color: '#fff', fontSize: '2rem' },
    button: { textTransform: "none" },
  },
});

