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
  BsSortDown,
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
      <HStack py={3} px={5} bg="white">
        <HStack
          px={3}
          py={2}
          borderWidth={1}
          borderColor="gray.200"
          borderRadius={5}
        >
          <Text>Sort: Newest</Text>
          <BsSortDown />
        </HStack>
        <Spacer />
        <HStack>
          {[
            { title: "grid", icon: <BsGridFill size={20} /> },
            { title: "list", icon: <PiListFill size={20} /> },
          ].map((item, index) => {
            return (
              <Button
                key={index}
                colorScheme="none"
                bg={layout === item.title ? "blackAlpha.100" : "transparent"}
                color="black"
                p={0}
                onClick={() => localStorage.setItem("layout", item.title)}
              >
                {item.icon}
              </Button>
            );
          })}
        </HStack>
      </HStack>
      <Box w="100%" overflowX="auto" pb={3}>
        <HStack px={5} w="fit-content">
          {["Samsung", "Apple", "Poco", "Metallic", "4 star", "3 star"].map(
            (item, index) => {
              return (
                <Button
                  key={index}
                  variant="outline"
                  colorScheme="blue"
                  fontWeight={500}
                  borderColor="blue.500"
                  bg="white"
                  color="black"
                  rightIcon={<BsXLg />}
                >
                  {item}
                </Button>
              );
            }
          )}
        </HStack>
      </Box>
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
