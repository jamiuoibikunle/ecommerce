import { Children } from "@/types";
import { Stack } from "@chakra-ui/react";
import React from "react";

const Container = ({ children }: Children) => {
  return (
    <Stack
      w="100%"
      p={{ lg: 10 }}
      spacing={{ base: 0, lg: 10 }}
      bg="brand.lighter"
      alignItems="center"
    >
      {children}
    </Stack>
  );
};

export default Container;
