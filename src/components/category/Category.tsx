import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Header from "@/components/category/Header";
import Container from "@/components/category/Container";

import Hierarchy from "./Hierarchy";
import Categories from "./Categories";
import useRender from "@/hooks/useRender";
import FilterOpeators from "./FilterOperators";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import Main from "./Main";

const Category = () => {
  const [render] = useRender();

  return (
    <Stack spacing={0}>
      <Header />
      <Container>
        {render !== "desktop" ? <Categories /> : null}
        {render === "desktop" ? <Hierarchy /> : null}
        <Main />
      </Container>
      <Newsletter />
      <Footer />
    </Stack>
  );
};

export default Category;
