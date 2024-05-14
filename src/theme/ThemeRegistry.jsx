"use client";

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  weight: ['300', '400', '500'],
  style: ["normal", "italic"],
  subsets: ["latin"]
})

const themeOptions = {
  typography:{
    fontFamily: poppins.style.fontFamily,
    fontSize: 12
  },
  palette:{
    primary: {
      main: "#ecbc4d",
    },
    secondary: {
      light: "#ac9f83",
      main: "#635020",
    },
    info: {
      light: "#61F3F3",
      main: "#00B8D9",
      dark: "#006C9C",
      contrastText: "#FFFFFF"
    },
    success: {
      light: "#77ED8B",
      main: "#22C55E",
      dark: "#118D57",
      contrastText: "#FFFFFF"
    },
    warning: {
      light: "#FFD666",
      main: "#FFAB00",
      dark: "#B76E00",
      contrastText: "#FFFFFF"
    },
    error: {
      light: "#FFAC82",
      main: "#FF5630",
      dark: "#B71D18",
      contrastText: "#FFFFFF"
    },
    grey: {
      100: "#F9FAFB",
      200: "#F4F6F8",
      300: "#DFE3E8",
      400: "#C4CDD5",
      500: "#919EAB",
      600: "#637381",
      700: "#454F5B",
      800: "#212B36",
      900: "#161C24"
    },
    
    background:{
      default: "#FFFFFF"
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" // Example shadow for MuiPaper component
        }
      }
    },
    // You can add more components here with their respective shadow styles
  }
}

const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }) {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
  )
}