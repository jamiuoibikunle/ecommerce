import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  BsChevronLeft,
  BsChevronRight,
  BsDot,
  BsGridFill,
  BsHeart,
  BsStarFill,
  BsXLg,
} from "react-icons/bs";
import { PiListFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types";
import { handleLayout } from "@/features/slices/layoutSlice";
import { useQuery } from "@pantha/query";
import useFetchFilters from "@/hooks/useFetchFilters";

const Desktop = () => {
  const dispatch = useDispatch();

  const { layout } = useSelector((state: RootState) => state.layout);

  const query = useQuery();
  const [queries] = useFetchFilters(query);

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
              onClick={() => dispatch(handleLayout(item.title))}
            >
              {item.icon}
            </Button>
          );
        })}
      </HStack>
      <Box w="100%" overflowX="auto" pb={3}>
        <HStack w="fit-content">
          {queries.map((item, index) => {
            return (
              <HStack
                key={index}
                borderWidth={1}
                borderColor="blue.500"
                borderRadius={5}
                px={4}
                py={2}
                w="fit-content"
              >
                <Text noOfLines={1}>{item}</Text>
                <Box
                  cursor="pointer"
                  onClick={() => {
                    window.location.replace(
                      window.location.search.replace(
                        item.replaceAll(" ", "%20"),
                        ""
                      )
                    );
                  }}
                >
                  <BsXLg />
                </Box>
              </HStack>
            );
          })}
          {queries.length === 0 ? null : (
            <Button
              variant="link"
              colorScheme="blue"
              fontWeight={500}
              ml={4}
              onClick={() => {
                window.location.replace(window.location.pathname);
              }}
            >
              Clear all filter
            </Button>
          )}
        </HStack>
      </Box>
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
      <Flex w="10rem" justifyContent="center" alignItems="center">
        <Image src="/deals-smartwatches.png" />
      </Flex>
      <Stack as="span" flex="1" spacing={2}>
        <HStack w="100%" justifyContent="space-between">
          <Text>Canon Camera EOS 2000, Black 19x zoom</Text>
          <Button
            color="blue.500"
            variant="outline"
            borderColor="gray.200"
            p={0}
          >
            <BsHeart />
          </Button>
        </HStack>
        <HStack>
          <Text fontWeight={600}>$99.50</Text>
          <Text as="s" color="blackAlpha.600">
            $1128.00
          </Text>
        </HStack>
        <HStack spacing={3}>
          <HStack spacing={1}>
            {Array.from("1234").map((item, index) => (
              <BsStarFill key={index} color="#ff9017" />
            ))}
            <BsStarFill color="#bdc4cd" />
            <Text ml={2} color="#ff9017">
              4.2
            </Text>
          </HStack>
          <BsDot color="gray" />
          <Text color="blackAlpha.500">154 orders</Text>
          <BsDot color="gray" />
          <Text color="teal.300">Free shipping</Text>
        </HStack>
        <Text w="90%">
          Lorep ipsum dolor sit amet, consectetur adipiscing elit, sed do
          elusmod tempor incididunt ut labore et dolore magna aliqua
        </Text>
        <Button
          colorScheme="blue"
          variant="link"
          w="fit-content"
          fontWeight={500}
        >
          View details
        </Button>
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

export default Desktop;
