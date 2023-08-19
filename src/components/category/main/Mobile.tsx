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

const ProductCard = ({ layout }: { layout: string }) => {
  return layout === "list" ? (
    <Flex
      bg="white"
      p={5}
      borderWidth={1}
      borderColor="gray.200"
      borderRadius={5}
      gap={5}
    >
      <Flex w="7rem" justifyContent="center" alignItems="center">
        <Image src="/deals-smartwatches.png" />
      </Flex>
      <Stack as="span" flex="1" spacing={2}>
        <Text>Canon Camera EOS 2000, Black 19x zoom</Text>
        <HStack>
          <Text fontWeight={600}>$99.50</Text>
          <Text as="s" color="blackAlpha.600">
            $1128.00
          </Text>
        </HStack>
        <HStack spacing={0}>
          <HStack spacing={0}>
            {Array.from("1234").map((item, index) => (
              <BsStarFill key={index} color="#ff9017" />
            ))}
            <BsStarFill color="#bdc4cd" />
            <Text ml={2} color="#ff9017">
              4.2
            </Text>
          </HStack>
        </HStack>
        <Text color="teal.300">Free shipping</Text>
      </Stack>
    </Flex>
  ) : (
    <Stack
      bg="white"
      borderColor="gray.200"
      borderWidth={1}
      borderRadius={5}
      spacing={3}
    >
      <Flex h="15rem" p={5} alignItems="center" justifyContent="center">
        <Image h="100%" src="/deals-smartwatches.png" />
      </Flex>
      <Stack borderTopWidth={1} borderColor="gray.200" p={5} spacing={4}>
        <HStack justifyContent="space-between">
          <Stack spacing={0}>
            <HStack>
              <Text fontWeight={600}>$99.50</Text>
              <Text as="s" color="blackAlpha.600">
                $1128.00
              </Text>
            </HStack>
            <HStack spacing={1}>
              {Array.from("1234").map((item, index) => (
                <BsStarFill key={index} color="#ff9017" />
              ))}
              <BsStarFill color="#bdc4cd" />
              <Text ml={2} color="#ff9017">
                4.2
              </Text>
            </HStack>
          </Stack>
          <Button
            color="blue.500"
            variant="outline"
            borderColor="gray.200"
            p={0}
          >
            <BsHeart />
          </Button>
        </HStack>
        <Text>GoPro HERO6 4K Action Camera - Black</Text>
      </Stack>
    </Stack>
  );
};

export default Mobile;
