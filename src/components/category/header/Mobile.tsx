import React from "react";
import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { BsArrowLeft, BsCart, BsPerson, BsSearch } from "react-icons/bs";

const Mobile = () => {
  return (
    <Stack px={5}>
      <HStack py={5} spacing={5}>
        <Box cursor="pointer">
          <BsArrowLeft size={30} />
        </Box>
        <Spacer />
        <BsCart size={25} />
        <BsPerson size={25} />
      </HStack>
      <InputGroup size="lg">
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input placeholder="Search" />
      </InputGroup>
    </Stack>
  );
};

export default Mobile;
