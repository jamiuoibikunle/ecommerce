import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { BsPersonFill } from "react-icons/bs";

const Categories = () => {
  return (
    <Flex
      flexDir="row"
      bg="white"
      borderRadius={10}
      gap={5}
      wrap={{ base: "wrap", lg: "nowrap" }}
      p={{ base: 0, lg: 4 }}
      borderWidth={1}
      borderColor="gray.300"
      w="100%"
      maxW="7xl"
    >
      <Box
        overflowX={{ base: "auto", lg: "unset" }}
        w={{ base: "100%", lg: "max-content" }}
        p={{ base: 4, lg: 0 }}
      >
        <Stack
          w={{ base: "fit-content", lg: "max-content" }}
          flexDir={{ base: "row", lg: "column" }}
        >
          <CustomButton link="" title="Automobiles" />
          <CustomButton link="" title="Clothes and wear" />
          <CustomButton link="" title="Home interiors" />
          <CustomButton link="" title="Computer and tech" />
          <CustomButton link="" title="Tools, equipments" />
          <CustomButton link="" title="Sports and outdoor" />
          <CustomButton link="" title="Animal and pets" />
          <CustomButton link="" title="Machinery tools" />
          <CustomButton link="" title="More category" />
        </Stack>
      </Box>
      <Stack
        bgImage="/maskgroup01.png"
        bgSize="cover"
        bgPos="center"
        p={{ base: 6, lg: 10 }}
        w={{ base: "100%", lg: "60%" }}
        alignItems="flex-start"
        pb={{ base: 20, lg: 10 }}
      >
        <Heading fontSize={{ base: "1.5rem", lg: "2rem" }} fontWeight={400}>
          Latest trending
        </Heading>
        <Heading
          fontSize={{ base: "2rem", md: "2.5rem" }}
          fontWeight={600}
          pb={{ base: 5, lg: 8 }}
        >
          Electronic items
        </Heading>
        <Button color="blue.500">Learn more</Button>
      </Stack>
      <Stack w="15rem" display={{ base: "none", lg: "flex" }}>
        <Stack bg="blue.50" p={4} borderRadius={6}>
          <HStack pb={5}>
            <Circle bg="blue.200" p={1}>
              <BsPersonFill size={30} color="white" />
            </Circle>
            <Stack spacing={0}>
              <Text>Hi, user</Text>
              <Text>let us get started</Text>
            </Stack>
          </HStack>
          <Button colorScheme="blue">Join now</Button>
          <Button colorScheme="blue" bg="white" variant="outline">
            Log in
          </Button>
        </Stack>
        <Text
          color="white"
          bg="orange.400"
          p={5}
          fontSize="1.2rem"
          borderRadius={6}
        >
          Get US $10 off with a new supplier
        </Text>
        <Text
          color="white"
          bg="green.400"
          p={5}
          fontSize="1.2rem"
          borderRadius={6}
        >
          Send quotes with supplier preferences
        </Text>
      </Stack>
    </Flex>
  );
};

const CustomButton = ({ title, link }: any) => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <Button
      colorScheme={title === "Automobiles" ? "gray" : "none"}
      color="black"
      w={{ base: "fit-content", lg: "15rem" }}
    >
      <Text w="100%" textAlign="left" fontWeight={500}>
        {title}
      </Text>
    </Button>
  ) : (
    <Button
      colorScheme="gray"
      color="blue.500"
      w={{ base: "fit-content", lg: "15rem" }}
    >
      <Text w="100%" textAlign="left" fontWeight={500}>
        {title}
      </Text>
    </Button>
  );
};

export default Categories;
