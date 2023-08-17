import React from "react";
import { Stack } from "@chakra-ui/react";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
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
