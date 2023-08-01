"use client";

import React, { useEffect, useState } from "react";
import { Stack, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Loader from "@/components/Loader";

const Page = () => {
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setMount(true)
    }, 3000)
  }, [])

  return (
    <Stack>
      {!mount && <Loader />}
      <Header />
    </Stack>
  );
};

export default Page;
