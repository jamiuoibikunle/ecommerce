import React from "react";
import { Stack } from "@chakra-ui/react";
import Header from "@/components/category/Header";
import Container from "@/components/Container";

import Hierarchy from "./Hierarchy";
import Categories from "./Categories";
import useRender from "@/hooks/useRender";

const Category = () => {
  const [render] = useRender();

  return (
    <Stack spacing={0}>
      <Header />
      <Container>
        {render !== "desktop" ? <Categories /> : null}
        {render === "desktop" ? <Hierarchy /> : null}
      </Container>
      {/* <Newsletter />
      <Footer /> */}
    </Stack>
  );
};

export default Category;
