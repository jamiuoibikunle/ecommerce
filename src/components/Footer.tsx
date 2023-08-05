import {
  Button,
  Circle,
  Flex,
  HStack,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsBag, BsChevronUp } from "react-icons/bs";
import {
  TbBrandFacebookFilled,
  TbBrandTwitterFilled,
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandYoutube,
  TbBrandApple,
} from "react-icons/tb";

const Footer = () => {
  return (
    <Stack>
      <Flex
        px={10}
        py={8}
        justifyContent="space-between"
        wrap={{ base: "wrap", lg: "nowrap" }}
        rowGap={10}
      >
        <Stack w="xs" spacing={6}>
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
          <Text>
            Best information about the company goes here but now lorep ipsum is
          </Text>
          <HStack spacing={3}>
            <Flex
              p={2}
              borderRadius="100%"
              bg="blackAlpha.400"
              cursor="pointer"
            >
              <TbBrandFacebookFilled color="white" />
            </Flex>
            <Flex
              p={2}
              borderRadius="100%"
              bg="blackAlpha.400"
              cursor="pointer"
            >
              <TbBrandTwitterFilled color="white" />
            </Flex>
            <Flex
              p={2}
              borderRadius="100%"
              bg="blackAlpha.400"
              cursor="pointer"
            >
              <TbBrandLinkedin color="white" />
            </Flex>
            <Flex
              p={2}
              borderRadius="100%"
              bg="blackAlpha.400"
              cursor="pointer"
            >
              <TbBrandInstagram color="white" />
            </Flex>
            <Flex
              p={2}
              borderRadius="100%"
              bg="blackAlpha.400"
              cursor="pointer"
            >
              <TbBrandYoutube color="white" />
            </Flex>
          </HStack>
        </Stack>
        <Stack
          w={{ base: "50%", md: "30%", lg: "fit-content" }}
          alignItems="flex-start"
          spacing={4}
        >
          <Heading fontSize="1.5rem" fontWeight="600">
            About
          </Heading>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            About Us
          </Button>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            Find store
          </Button>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            Categories
          </Button>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            Blogs
          </Button>
        </Stack>
        <Stack
          w={{ base: "50%", md: "30%", lg: "fit-content" }}
          alignItems="flex-start"
          spacing={4}
        >
          <Heading fontSize="1.5rem" fontWeight="600">
            Partnership
          </Heading>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            About Us
          </Button>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            Find store
          </Button>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            Categories
          </Button>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            Blogs
          </Button>
        </Stack>
        <Stack
          w={{ base: "50%", md: "30%", lg: "fit-content" }}
          alignItems="flex-start"
          spacing={4}
        >
          <Heading fontSize="1.5rem" fontWeight="600">
            Information
          </Heading>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            About Us
          </Button>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            Find store
          </Button>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            Categories
          </Button>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            Blogs
          </Button>
        </Stack>
        <Stack
          w={{ base: "50%", md: "30%", lg: "fit-content" }}
          alignItems="flex-start"
          spacing={4}
        >
          <Heading fontSize="1.5rem" fontWeight="600">
            For users
          </Heading>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            About Us
          </Button>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            Find store
          </Button>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            Categories
          </Button>
          <Button variant="link" color="blackAlpha.700" fontWeight="500">
            Blogs
          </Button>
        </Stack>
        <Stack
          w={{ base: "50%", md: "30%", lg: "fit-content" }}
          alignItems="center"
          spacing={3}
        >
          <Heading alignSelf="flex-start" fontSize="1.25rem" fontWeight="600">
            Get app
          </Heading>
          <Stack direction={{ base: "row", lg: "column" }}>
            <Image src="/appstore.png" h="2.6rem" />
            <Image src="/google-playstore.png" h="3.5rem" />
          </Stack>
        </Stack>
      </Flex>
      <HStack px={10} py={4} bg="blackAlpha.200">
        <Text>&copy; 2023 Ecommerce</Text>
        <Spacer />
        <Button
          rightIcon={<BsChevronUp />}
          variant="link"
          color="black"
          fontWeight="500"
        >
          English
        </Button>
      </HStack>
    </Stack>
  );
};

export default Footer;
