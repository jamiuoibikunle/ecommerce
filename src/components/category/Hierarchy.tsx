import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

const Hierarchy = () => {
  return (
    <HStack
      w="100%"
      maxW="7xl"
      px={4}
      spacing={3}
      borderBottomWidth={1}
      borderColor="gray.300"
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
