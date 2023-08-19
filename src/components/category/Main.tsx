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
import { BsArchive, BsGridFill, BsSearch } from "react-icons/bs";
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
            <ProductCard key={index} icon={icon} image={image} title={title} />
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
            <ProductCard key={index} icon={icon} image={image} title={title} />
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
    </Stack>
  );
};

const ProductCard = ({ icon, image, title }: any) => {
  return (
    <Stack
      w="100%"
      bg="white"
      borderWidth={1}
      borderColor="gray.300"
      borderRadius={5}
      cursor="pointer"
      _hover={{
        borderColor: "blue.300",
      }}
      transitionDuration="0.5s"
      pos="relative"
      scrollSnapAlign="start"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        bgColor="gray.300"
        h="3rem"
        w="3rem"
        borderRadius="100%"
        pos="absolute"
        right="1rem"
        top="6.5rem"
        borderWidth={2}
        borderColor="white"
      >
        {icon}
      </Flex>
      <Image src={image} draggable={false} objectFit="cover" h="8rem" />
      <Text w="15rem" p={5} fontWeight={500}>
        {title}
      </Text>
    </Stack>
  );
};

export default Main;
