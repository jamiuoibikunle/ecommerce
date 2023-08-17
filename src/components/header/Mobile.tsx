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

const Mobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack px={5}>
      <HStack py={5} spacing={5}>
        <Box cursor="pointer" onClick={onOpen}>
          <HiOutlineMenu size={30} />
        </Box>
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody p={0}>
              <Stack>
                <Stack p={6} alignItems="flex-start" bg="gray.100" spacing={5}>
                  <BsPersonCircle size={40} />
                  <HStack>
                    <Button variant="link" color="black" fontWeight={500}>
                      Sign in
                    </Button>
                    <Text>|</Text>
                    <Button variant="link" color="black" fontWeight={500}>
                      Register
                    </Button>
                  </HStack>
                </Stack>
                <Stack p={6}>
                  <Button
                    leftIcon={<BsHouse />}
                    colorScheme="none"
                    color="black"
                    size="lg"
                    p={0}
                    fontWeight={500}
                  >
                    <Text w="100%" textAlign="left">
                      Home
                    </Text>
                  </Button>
                  <Button
                    leftIcon={<AiOutlineUnorderedList />}
                    colorScheme="none"
                    color="black"
                    size="lg"
                    p={0}
                    fontWeight={500}
                  >
                    <Text w="100%" textAlign="left">
                      Categories
                    </Text>
                  </Button>
                  <Button
                    leftIcon={<AiOutlineHeart />}
                    colorScheme="none"
                    color="black"
                    size="lg"
                    p={0}
                    fontWeight={500}
                  >
                    <Text w="100%" textAlign="left">
                      Favourites
                    </Text>
                  </Button>
                  <Button
                    leftIcon={<BiBox />}
                    colorScheme="none"
                    color="black"
                    size="lg"
                    p={0}
                    fontWeight={500}
                  >
                    <Text w="100%" textAlign="left">
                      My orders
                    </Text>
                  </Button>
                </Stack>
                <Divider />
                <Stack p={6}>
                  <Button
                    leftIcon={<BsGlobe />}
                    colorScheme="none"
                    color="black"
                    size="lg"
                    p={0}
                    fontWeight={500}
                  >
                    <Text w="100%" textAlign="left">
                      English | NGN
                    </Text>
                  </Button>
                  <Button
                    leftIcon={<SlEarphonesAlt />}
                    colorScheme="none"
                    color="black"
                    size="lg"
                    p={0}
                    fontWeight={500}
                  >
                    <Text w="100%" textAlign="left">
                      Contact us
                    </Text>
                  </Button>
                  <Button
                    leftIcon={<BsBorder />}
                    colorScheme="none"
                    color="black"
                    size="lg"
                    p={0}
                    fontWeight={500}
                  >
                    <Text w="100%" textAlign="left">
                      About
                    </Text>
                  </Button>
                </Stack>
                <Divider />
                <Stack py={6} px={12}>
                  <Button
                    colorScheme="none"
                    color="black"
                    size="lg"
                    p={0}
                    fontWeight={500}
                  >
                    <Text w="100%" textAlign="left">
                      User agreement
                    </Text>
                  </Button>
                  <Button
                    colorScheme="none"
                    color="black"
                    size="lg"
                    p={0}
                    fontWeight={500}
                  >
                    <Text w="100%" textAlign="left">
                      Partnership
                    </Text>
                  </Button>
                  <Button
                    colorScheme="none"
                    color="black"
                    size="lg"
                    p={0}
                    fontWeight={500}
                  >
                    <Text w="100%" textAlign="left">
                      Privary policy
                    </Text>
                  </Button>
                </Stack>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
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
            Pantha
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
  );
};

export default Mobile;
