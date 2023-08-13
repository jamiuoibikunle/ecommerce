import useMount from "@/hooks/useMount";
import { Children } from "@/types";
import { Box } from "@chakra-ui/react";
import React from "react";

const Holder = ({ children }: Children) => {
  const [mount] = useMount();

  return (
    <Box
      h={!mount ? "100vh" : "fit-content"}
      w={!mount ? "100vw" : "100%"}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default Holder;
