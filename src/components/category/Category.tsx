import React from "react";
import { Stack } from "@chakra-ui/react";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Hierarchy from "./Hierarchy";

const Category = () => {
  return (
    <Stack spacing={0}>
      <Header />
      <Container>
        <Hierarchy />
      </Container>
      {/* <Newsletter />
      <Footer /> */}
    </Stack>
  );
};

export default Category;
