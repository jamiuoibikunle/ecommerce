"use client";

import Holder from "@/components/Holder";
import Loader from "@/components/Loader";
import Home from "@/components/home/Home";
import useMount from "@/hooks/useMount";
import React from "react";

const Page = () => {
  const [mount] = useMount();

  return (
    <Holder>
      {!mount && <Loader />}
      <Home />
    </Holder>
  );
};

export default Page;
