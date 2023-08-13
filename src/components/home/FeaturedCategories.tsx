import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

const FeaturedCategories = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  return !isDesktop ? (
    <Stack
      bg="white"
      w="100%"
      maxW="7xl"
      borderWidth={1}
      borderColor="gray.300"
      borderRadius={5}
      mt={2}
    >
      <Stack w="100%" bg="gray.300" spacing={0.5} flexDir="row">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Stack>
    </Stack>
  ) : (
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
        <Heading w="10rem" fontSize="1.6rem" fontWeight={500}>
          Home and outdoor
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
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </HStack>
        <HStack w="100%" h="50%" spacing={0.5}>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </HStack>
      </Stack>
    </Stack>
  );
};

const CategoryCard = () => {
  return (
    <Stack w="25%" h="100%" bg="white" boxSizing="border-box" p={4}>
      <Heading fontSize="1.3rem" fontWeight={400}>
        Soft chairs
      </Heading>
      <Flex justifyContent="space-between" alignItems="flex-start" h="100%">
        <Stack spacing={0} fontSize="0.9rem" color="gray.500">
          <Text>From</Text>
          <Text>USD 19</Text>
        </Stack>
        <Image w="4rem" src="/homeandoutdoor-01.png" alignSelf="flex-end" />
      </Flex>
    </Stack>
  );
};

export default FeaturedCategories;
