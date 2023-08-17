import React from "react";
import { Stack } from "@chakra-ui/react";
import Header from "@/components/home/Header";
import Container from "@/components/Container";
import Categories from "@/components/home/Categories";
import Deals from "@/components/home/Deals";
import FeaturedCategoriesOne from "@/components/home/FeaturedCategoriesOne";
import FeaturedCategoriesTwo from "@/components/home/FeaturedCategoriesTwo";
import SendInquiry from "@/components/home/SendInquiry";
import RecommendedItems from "@/components/home/RecommendedItems";
import ExtraServices from "@/components/home/ExtraServices";
import SuppliersByRegion from "@/components/home/SuppliersByRegion";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <Stack spacing={0}>
      <Header />
      <Container>
        <Categories />
        <Deals />
        <FeaturedCategoriesOne />
        <FeaturedCategoriesTwo />
        <SendInquiry />
        <RecommendedItems />
        <ExtraServices />
        <SuppliersByRegion />
      </Container>
      <Newsletter />
      <Footer />
    </Stack>
  );
};

export default Home;
