"use client";

import { HStack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";

const Hierarchy = () => {
  console.log(window.location.pathname.split("/"));

  return (
    <HStack
      w="100%"
      maxW="7xl"
      py={3}
      spacing={3}
      borderBottomWidth={1}
      borderColor="gray.300"
      color="gray.500"
    >
      <Text>Home</Text>
      <BsChevronRight size={12} />
      <Text>Clothings</Text>
      <BsChevronRight size={12} />
      <Text>Men's wear</Text>
    </HStack>
  );
};

export default Hierarchy;
