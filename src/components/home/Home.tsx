import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Categories from "@/components/home/Categories";
import Deals from "@/components/home/Deals";
import FeaturedCategoriesOne from "@/components/home/FeaturedCategoriesOne";
import FeaturedCategoriesTwo from "@/components/home/FeaturedCategoriesTwo";
import SendInquiry from "@/components/home/SendInquiry";

const Home = () => {
  return (
    <Stack>
      <Header />
      <Container>
        <Categories />
        <Deals />
        <FeaturedCategoriesOne />
        <FeaturedCategoriesTwo />
        <SendInquiry />
      </Container>
      {/* <Newsletter />
      <Footer /> */}
    </Stack>
  );
};

export default Home;
