import React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spacer,
  Stack,
  StackDivider,
  Text,
  VStack,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  BsBag,
  BsBorder,
  BsCart,
  BsCartFill,
  BsChevronDown,
  BsFillChatLeftDotsFill,
  BsFillHeartFill,
  BsGlobe,
  BsHouse,
  BsPerson,
  BsPersonCircle,
  BsPersonFill,
  BsSearch,
} from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { SlEarphonesAlt } from "react-icons/sl";
import { BiBox } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineUnorderedList } from "react-icons/ai";
import useRender from "@/hooks/useRender";

const Desktop = () => {
  return (
    <Stack w="100%" maxW="7xl" alignSelf="center">
      <HStack p={4}>
        <HStack>
          <Flex
            justifyContent="center"
            alignItems="center"
            p={2}
            borderRadius={5}
            bg="blue.500"
            color="white"
          >
            <BsBag />
          </Flex>
          <Heading color="blue.500" fontSize="1.5rem" fontWeight="500">
            Pantha
          </Heading>
        </HStack>
        <Spacer />
        <InputGroup
          borderWidth={1}
          borderColor="blue.500"
          w={{ sm: "sm", lg: "lg" }}
          borderRadius={10}
        >
          <Input borderWidth={0} />
          <Select
            borderWidth={0}
            borderLeftWidth={1}
            borderColor="blue.500"
            borderRadius={0}
            w="sm"
          >
            <option>All category</option>
          </Select>
          <Button borderRadius={0} w="xs" colorScheme="blue">
            Search
          </Button>
        </InputGroup>
        <Spacer />
        <HStack spacing={3}>
          <VStack
            cursor="pointer"
            fontSize="0.9rem"
            spacing={0}
            color="blackAlpha.600"
          >
            <BsPersonFill size={15} />
            <Text>Profile</Text>
          </VStack>
          <VStack
            cursor="pointer"
            fontSize="0.9rem"
            spacing={0}
            color="blackAlpha.600"
          >
            <BsFillChatLeftDotsFill size={15} />
            <Text>Message</Text>
          </VStack>
          <VStack
            cursor="pointer"
            fontSize="0.9rem"
            spacing={0}
            color="blackAlpha.600"
          >
            <BsFillHeartFill size={15} />
            <Text>Orders</Text>
          </VStack>
          <VStack
            cursor="pointer"
            fontSize="0.9rem"
            spacing={0}
            color="blackAlpha.600"
          >
            <BsCartFill size={15} />
            <Text>My cart</Text>
          </VStack>
        </HStack>
      </HStack>
      <Divider />
      <HStack p={4} spacing={5} display={{ base: "none", lg: "flex" }}>
        <HiOutlineMenu size={20} />
        <Button variant="link" fontWeight={500} color="black">
          All category
        </Button>
        <Button variant="link" fontWeight={500} color="black">
          Hot offers
        </Button>
        <Button variant="link" fontWeight={500} color="black">
          Gift boxes
        </Button>
        <Button variant="link" fontWeight={500} color="black">
          Projects
        </Button>
        <Button variant="link" fontWeight={500} color="black">
          Menu item
        </Button>
        <Button
          variant="link"
          fontWeight={500}
          color="black"
          rightIcon={<BsChevronDown />}
        >
          Help
        </Button>
        <Spacer />
        <Button
          variant="link"
          fontWeight={500}
          color="black"
          rightIcon={<BsChevronDown />}
        >
          English, NGN
        </Button>
        <Button
          variant="link"
          fontWeight={500}
          color="black"
          rightIcon={<BsChevronDown />}
        >
          Ship to Nigeria
        </Button>
      </HStack>
    </Stack>
  );
};

export default Desktop;
