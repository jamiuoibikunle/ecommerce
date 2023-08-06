import React from "react";
import { Stack } from "@chakra-ui/react";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Categories from "@/components/home/Categories";

const Home = () => {
  return (
    <Stack>
      <Header />
      <Container>
        <Categories />
      </Container>
      {/* <Newsletter />
      <Footer /> */}
    </Stack>
  );
};

export default Home;
