import useRender from "@/hooks/useRender";
import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  BsArchive,
  BsChevronLeft,
  BsChevronRight,
  BsDot,
  BsGridFill,
  BsHeart,
  BsSearch,
  BsStarFill,
  BsXLg,
} from "react-icons/bs";
import { BiShieldQuarter } from "react-icons/bi";
import { MdSend } from "react-icons/md";
import { PiListFill } from "react-icons/pi";
import FilterOpeators from "@/components/category/FilterOperators";
import useLayout from "@/hooks/useLayout";
import { ProductCard } from "../Main";

const Mobile = () => {
  const [layout] = useLayout();

  return (
    <Stack w="100%" py={5} spacing={3}>
      <Grid w="100%" templateColumns="repeat(1, 1fr)" gap={5} px={5}>
        {Array.from("123456789").map((item, index) => (
          <ProductCard layout={layout} key={index} />
        ))}
      </Grid>
      <HStack px={5} spacing={0} alignSelf="flex-end">
        <Button
          fontWeight={500}
          p={0}
          borderRadius={0}
          colorScheme="none"
          variant="outline"
          borderColor="gray.200"
        >
          <BsChevronLeft />
        </Button>
        {Array.from("123").map((item, index) => (
          <Button
            fontWeight={500}
            key={index}
            p={0}
            borderRadius={0}
            colorScheme="none"
            variant="outline"
            borderColor="gray.200"
          >
            {item}
          </Button>
        ))}
        <Button
          fontWeight={500}
          p={0}
          borderRadius={0}
          colorScheme="none"
          variant="outline"
          borderColor="gray.200"
        >
          <BsChevronRight />
        </Button>
      </HStack>
    </Stack>
  );
};

export default Mobile;
