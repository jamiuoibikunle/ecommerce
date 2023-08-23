"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { Children } from "@/types";

const theme = extendTheme({
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
      },
      body: {
        "::-webkit-scrollbar": {
          width: "5px",
        },
        "::-webkit-scrollbar-track": {
          "border-radius": 20,
        },
        "::-webkit-scrollbar-thumb": {
          background: "blue.500",
          "border-radius": 20,
        },
      },
    },
  },
  colors: {
    brand: {
      lighter: "#f7fafc",
      light: "#eff2fe",
    },
  },
});

export const ThemeProvider = ({ children }: Children) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};
