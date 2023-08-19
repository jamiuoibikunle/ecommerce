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
import React from "react";
import {
  BsArchive,
  BsGridFill,
  BsSearch,
  BsStarFill,
  BsXLg,
} from "react-icons/bs";
import { BiShieldQuarter } from "react-icons/bi";
import { MdSend } from "react-icons/md";
import { PiListFill } from "react-icons/pi";
import FilterOpeators from "./FilterOperators";

const Main = () => {
  const [render] = useRender();

  switch (render) {
    case "desktop":
      return (
        <Flex w="100%" px={{ lg: 5 }} gap={5}>
          {render === "desktop" ? (
            <Box w="16rem">
              <FilterOpeators />
            </Box>
          ) : null}
          <Box as="span" flex="1">
            <Desktop />
          </Box>
        </Flex>
      );

    case "tablet":
      return <Tablet />;

    default:
      return <Mobile />;
  }
};

const Mobile = () => {
  return (
    <Stack w="100%" spacing={5} px={4} py={5}>
      <Heading fontSize="1.5rem" fontWeight={500}>
        Our extra services
      </Heading>
      <Box overflow="auto" scrollSnapType="x mandatory">
        <Flex w="5xl" gap={3}>
          {[
            {
              title: "Source from Industry Hubs",
              image: "/extraservices01.png",
              icon: <BsSearch size={15} />,
            },
            {
              title: "Customize Your Products",
              image: "/extraservices02.png",
              icon: <BsArchive size={18} />,
            },
            {
              title: "Fast, reliable shipping by ocean or air",
              image: "/extraservices03.png",
              icon: <MdSend size={18} />,
            },
            {
              title: "Product monitoring and inspection",
              image: "/extraservices04.png",
              icon: <BiShieldQuarter size={20} />,
            },
          ].map(({ icon, image, title }, index) => (
            <ProductCard key={index} />
          ))}
        </Flex>
      </Box>
    </Stack>
  );
};

const Tablet = () => {
  return (
    <Stack w="100%" maxW="7xl" spacing={5} p={{ base: 5, lg: 0 }}>
      <Heading fontSize="1.5rem" fontWeight={500}>
        Our extra services
      </Heading>
      <Box overflow="auto" scrollSnapType="x mandatory">
        <Flex w="5xl" gap={3}>
          {[
            {
              title: "Source from Industry Hubs",
              image: "/extraservices01.png",
              icon: <BsSearch size={15} />,
            },
            {
              title: "Customize Your Products",
              image: "/extraservices02.png",
              icon: <BsArchive size={18} />,
            },
            {
              title: "Fast, reliable shipping by ocean or air",
              image: "/extraservices03.png",
              icon: <MdSend size={18} />,
            },
            {
              title: "Product monitoring and inspection",
              image: "/extraservices04.png",
              icon: <BiShieldQuarter size={20} />,
            },
          ].map(({ icon, image, title }, index) => (
            <ProductCard key={index} />
          ))}
        </Flex>
      </Box>
    </Stack>
  );
};

const Desktop = () => {
  return (
    <Stack w="100%" spacing={5}>
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
        <Button colorScheme="none" bg="blackAlpha.100" color="black" p={1}>
          <BsGridFill />
        </Button>
        <Button colorScheme="none" color="black" p={1}>
          <PiListFill />
        </Button>
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
      <Grid templateColumns="repeat(3, 1fr)" gap={5}>
        {Array.from("123456789").map((item, index) => {
          return <ProductCard key={index} />;
        })}
      </Grid>
    </Stack>
  );
};

const ProductCard = () => {
  return (
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
      <Stack borderTopWidth={1} borderColor="gray.200" p={5}>
        <HStack>
          <Stack>
            <HStack>
              <Text>$99.50</Text>
              <Text>$1128.00</Text>
            </HStack>
            <HStack>
              {Array.from("1234").map((item, index) => (
                <BsStarFill key={index} color="#ff9017" />
              ))}
              <BsStarFill color="#bdc4cd" />
            </HStack>
          </Stack>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default Main;
