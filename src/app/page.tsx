"use client";

import Loader from "@/components/Loader";
import Home from "@/components/home/Home";
import useMount from "@/hooks/useMount";
import { Box } from "@chakra-ui/react";
import React from "react";

const Page = () => {
  const [mount] = useMount();

  return (
    <Box
      h={!mount ? "100vh" : "fit-content"}
      w={!mount ? "100vw" : "100%"}
      overflow="hidden"
    >
      {!mount && <Loader />}
      <Home />
    </Box>
  );
};

export default Page;
