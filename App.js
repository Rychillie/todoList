import React from "react";
import { ThemeProvider } from "styled-components";
import { useColorScheme } from "react-native";

import Home from "./src/screens/Home";

import themes from "./src/components/themes";

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || theme.dark;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
