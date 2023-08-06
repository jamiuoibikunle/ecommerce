"use client";

import Loader from "@/components/Loader";
import Home from "@/components/home/Home";
import useMount from "@/hooks/useMount";
import React from "react";

const page = () => {
  const [mount] = useMount();

  switch (mount) {
    case true:
      return <Home />;

    default:
      return <Loader />;
  }
};

export default page;
