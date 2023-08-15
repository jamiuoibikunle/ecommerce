import useRender from "@/hooks/useRender";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowRight, BsChevronRight } from "react-icons/bs";

const FeaturedCategoriesTwo = () => {
  const [render] = useRender();

  switch (render) {
    case "desktop":
      return <Desktop />;

    case "tablet":
      return <Tablet />;

    default:
      return <Mobile />;
  }
};

const Mobile = () => {
  return (
    <Stack
      bg="white"
      w="100%"
      borderWidth={1}
      borderColor="gray.300"
      mt={2}
      py={5}
      spacing={3}
    >
      <Heading px={5} fontSize="1.5rem" fontWeight={500}>
        Consumer electronics and gadgets
      </Heading>
      <Box overflowX="auto">
        <Stack
          bg="gray.200"
          spacing={0.5}
          flexDir="row"
          w="fit-content"
          borderTopWidth={0.5}
          borderBottomWidth={0.5}
          borderColor="gray.200"
        >
          <CategoryCardMobile />
          <CategoryCardMobile />
          <CategoryCardMobile />
          <CategoryCardMobile />
        </Stack>
      </Box>
      <HStack
        px={5}
        fontSize="1.3rem"
        color="blue.500"
        cursor="pointer"
        w="fit-content"
      >
        <Text>Source now</Text>
        <BsArrowRight />
      </HStack>
    </Stack>
  );
};

const Tablet = () => {
  return (
    <Stack
      bg="white"
      w="100%"
      maxW="7xl"
      borderWidth={1}
      borderColor="gray.300"
      borderRadius={5}
      mt={2}
    >
      <Heading p={5} fontSize="1.5rem" fontWeight={500}>
        Consumer electronics and gadgets
      </Heading>
      <Stack
        w="100%"
        bg="gray.300"
        spacing={0.5}
        flexDir="row"
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="gray.100"
      >
        <CategoryCardDesktop />
        <CategoryCardDesktop />
        <CategoryCardDesktop />
        <CategoryCardDesktop />
      </Stack>
      <HStack
        p={5}
        fontSize="1.3rem"
        color="blue.500"
        cursor="pointer"
        w="fit-content"
      >
        <Text>Source now</Text>
        <BsArrowRight />
      </HStack>
    </Stack>
  );
};

const Desktop = () => {
  return (
    <Stack
      bg="white"
      w="100%"
      maxW="7xl"
      borderWidth={1}
      borderColor="gray.300"
      borderRadius={5}
      flexDir="row"
      spacing={0}
      overflow="hidden"
      my={{ md: 5, lg: 0 }}
    >
      <Stack
        w={{ md: "10rem", lg: "15rem" }}
        p={5}
        boxSizing="content-box"
        bgImage="/homeandoutdoor.png"
        bgPos="center"
        bgSize="cover"
        spacing={5}
      >
        <Heading w="12rem" fontSize="1.6rem" fontWeight={500}>
          Consumer electronics and gadgets
        </Heading>
        <Button w="fit-content" colorScheme="none" color="black" bg="white">
          Source now
        </Button>
      </Stack>
      <Stack
        w={{ md: "calc(100% - 10rem)", lg: "calc(100% - 15rem)" }}
        bg="gray.300"
        spacing={0.5}
      >
        <HStack w="100%" h="50%" spacing={0.5}>
          <CategoryCardDesktop />
          <CategoryCardDesktop />
          <CategoryCardDesktop />
          <CategoryCardDesktop />
        </HStack>
        <HStack w="100%" h="50%" spacing={0.5}>
          <CategoryCardDesktop />
          <CategoryCardDesktop />
          <CategoryCardDesktop />
          <CategoryCardDesktop />
        </HStack>
      </Stack>
    </Stack>
  );
};

const CategoryCardDesktop = () => {
  return (
    <Stack w="25%" h="100%" bg="white" boxSizing="border-box" p={4}>
      <Heading fontSize="1.3rem" fontWeight={400}>
        Smart watches
      </Heading>
      <Flex justifyContent="space-between" alignItems="flex-start" h="100%">
        <Stack spacing={0} fontSize="0.9rem" color="gray.500">
          <Text>From</Text>
          <Text>USD 19</Text>
        </Stack>
        <Image w="4rem" src="/deals-smartwatches.png" alignSelf="flex-end" />
      </Flex>
    </Stack>
  );
};

const CategoryCardMobile = () => {
  return (
    <Stack
      w="10rem"
      h="12rem"
      bg="white"
      boxSizing="border-box"
      p={4}
      alignItems="center"
    >
      <Image w="6rem" src="/deals-smartwatches.png" />
      <Heading fontSize="1.5rem" fontWeight={400} noOfLines={1}>
        Smart watches
      </Heading>
      <Text color="blackAlpha.700">From USD 19</Text>
    </Stack>
  );
};

export default FeaturedCategoriesTwo;
