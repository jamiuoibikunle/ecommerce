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

const Desktop = () => {
  const [layout] = useLayout();

  return (
    <Stack w="100%" spacing={5} pb={36}>
      <HStack
        bg="white"
        p={2}
        borderRadius={5}
        borderColor="gray.200"
        borderWidth={1}
      >
        <Text>
          12,911 items in <b>Mobile accessory</b>
        </Text>
        <Spacer />
        {[
          { title: "grid", icon: <BsGridFill /> },
          { title: "list", icon: <PiListFill /> },
        ].map((item, index) => {
          return (
            <Button
              key={index}
              colorScheme="none"
              bg={layout === item.title ? "blackAlpha.100" : "transparent"}
              color="black"
              p={1}
              onClick={() => localStorage.setItem("layout", item.title)}
            >
              {item.icon}
            </Button>
          );
        })}
      </HStack>
      <HStack>
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
        <Button variant="link" colorScheme="blue" fontWeight={500} ml={4}>
          Clear all filter
        </Button>
      </HStack>
      <Grid
        templateColumns={
          layout === "list" ? "repeat(1, 1fr)" : "repeat(3, 1fr)"
        }
        gap={5}
      >
        {Array.from("123456789").map((item, index) => {
          return <ProductCard key={index} layout={layout} />;
        })}
      </Grid>
      <HStack spacing={0} alignSelf="flex-end">
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

export default Desktop;
