"use client";

import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Loader from "@/components/Loader";
import useMount from "@/hooks/useMount";

const page = () => {
  const mount = useMount()

  return (
    <Stack>
      {!mount && <Loader />}
      <Header />
    </Stack>
  );
};

export default page;
