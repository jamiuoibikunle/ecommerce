import {
  Button,
  Center,
  Circle,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsPerson, BsPersonFill } from "react-icons/bs";

const Categories = () => {
  return (
    <Flex flexDir="row" bg="white" borderRadius={10} gap={5} p={4}>
      <Stack w="max-content">
        <Button>
          <Text w="100%" textAlign="left" fontWeight={500}>
            Automobiles
          </Text>
        </Button>
        <CustomButton link="" title="Clothes and wear" />
        <CustomButton link="" title="Home interiors" />
        <CustomButton link="" title="Computer and tech" />
        <CustomButton link="" title="Tools, equipments" />
        <CustomButton link="" title="Sports and outdoor" />
        <CustomButton link="" title="Animal and pets" />
        <CustomButton link="" title="Machinery tools" />
        <CustomButton link="" title="More category" />
      </Stack>
      <Stack
        bgImage="/maskgroup01.png"
        bgSize="cover"
        bgPos="center"
        p={10}
        w="60%"
        alignItems="flex-start"
      >
        <Heading fontSize="2rem" fontWeight={400}>
          Latest trending
        </Heading>
        <Heading fontSize="2.5rem" fontWeight={600} pb={8}>
          Electronic items
        </Heading>
        <Button>Learn more</Button>
      </Stack>
      <Stack w="15rem">
        <Stack bg="blue.50" p={4} borderRadius={6}>
          <HStack pb={5}>
            <Circle bg="blue.200" p={1}>
              <BsPersonFill size={30} color="white" />
            </Circle>
            <Stack spacing={0}>
              <Text>Hi, user</Text>
              <Text>let's get started</Text>
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
  return (
    <Button colorScheme="none" color="black" w="15rem">
      <Text w="100%" textAlign="left" fontWeight={500}>
        {title}
      </Text>
    </Button>
  );
};

export default Categories;
