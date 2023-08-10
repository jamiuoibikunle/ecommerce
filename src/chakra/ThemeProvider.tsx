"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { Children } from "@/types";

const theme = extendTheme({
  breakpoints: {
    "2xl": "1200px",
  },
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
      },
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
