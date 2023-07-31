import React from "react";
import {
  Box,
  Button,
  Divider,
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
  useMediaQuery,
} from "@chakra-ui/react";
import {
  BsBag,
  BsCart,
  BsCartFill,
  BsChevronDown,
  BsFillChatLeftDotsFill,
  BsFillHeartFill,
  BsPerson,
  BsPersonFill,
  BsSearch,
} from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  return isMobile ? (
    <Stack px={5}>
      <HStack py={5} spacing={5}>
        <Box cursor="pointer">
          <HiOutlineMenu size={30} />
        </Box>
        <HStack>
          <Flex
            justifyContent="center"
            alignItems="center"
            p={3}
            borderRadius={5}
            bg="blue.500"
            color="white"
          >
            <BsBag />
          </Flex>
          <Heading color="blue.500" fontSize="1.5rem" fontWeight="500">
            Brand
          </Heading>
        </HStack>
        <Spacer />
        <BsCart size={25} />
        <BsPerson size={25} />
      </HStack>
      <InputGroup size="lg">
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input placeholder="Search" />
      </InputGroup>
    </Stack>
  ) : (
    <Stack>
      <HStack py={4} px={10}>
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
            Brand
          </Heading>
        </HStack>
        <Spacer />
        <InputGroup
          borderWidth={1}
          borderColor="blue.500"
          maxW="2xl"
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
      <HStack px={10} spacing={5} py={3}>
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

export default Header;
