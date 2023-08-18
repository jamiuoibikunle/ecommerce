import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import Header from "@/components/category/Header";
import Container from "@/components/category/Container";

import Hierarchy from "./Hierarchy";
import Categories from "./Categories";
import useRender from "@/hooks/useRender";
import FilterOpeators from "./FilterOperators";

const Category = () => {
  const [render] = useRender();

  return (
    <Stack spacing={0}>
      <Header />
      <Container>
        {render !== "desktop" ? <Categories /> : null}
        {render === "desktop" ? <Hierarchy /> : null}
        <Flex w="100%" px={{ lg: 5 }}>
          {render === "desktop" ? <FilterOpeators /> : null}
        </Flex>
      </Container>
      {/* <Newsletter />
      <Footer /> */}
    </Stack>
  );
};

export default Category;
