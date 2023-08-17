"use client";

import Holder from "@/components/Holder";
import Loader from "@/components/Loader";
import Category from "@/components/category/Category";
import useMount from "@/hooks/useMount";
import React from "react";

const Page = () => {
  const [mount] = useMount();

  return (
    <Holder>
      {!mount && <Loader />}
      <Category />
    </Holder>
  );
};

export default Page;
