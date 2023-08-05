"use client";

import React, { useEffect, useState } from "react";
import { Stack, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Loader from "@/components/Loader";
import useMount from "@/hooks/useMount";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Head from "next/head";
import Container from "@/components/Container";
import Categories from "@/components/home/Categories";

const Page = () => {
  const [mount] = useMount();

  return (
    <Stack>
      <Head>
        <title>Pantha ecommerce | Homepage</title>
      </Head>
      {!mount && <Loader />}
      <Header />
      <Container>
        <Categories />
      </Container>
      {/* <Newsletter />
      <Footer /> */}
    </Stack>
  );
};

export default Page;
