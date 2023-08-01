"use client";

import React, { useEffect, useState } from "react";
import { Stack, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Loader from "@/components/Loader";
import useMount from "@/hooks/useMount";

const Page = () => {

  const [mount] = useMount()

  return (
    <Stack>
      {!mount && <Loader />}
      <Header />
    </Stack>
  );
};

export default Page;
