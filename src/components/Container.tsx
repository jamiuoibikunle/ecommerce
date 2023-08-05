import { Children } from "@/types";
import { Stack } from "@chakra-ui/react";
import React from "react";

const Container = ({ children }: Children) => {
  return (
    <Stack w="100%" p={{ lg: 10 }} spacing={10} bg="gray.100">
      {children}
    </Stack>
  );
};

export default Container;
