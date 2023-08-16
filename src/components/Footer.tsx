import useRender from "@/hooks/useRender";
import {
  Button,
  Circle,
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

const Desktop = () => {
  return (
    <Stack>
      <Flex
        w="100%"
        maxW="7xl"
        mx="auto"
        py={8}
        justifyContent="space-between"
        gap={20}
      >
        <Stack w="20rem" spacing={6}>
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
        <Grid w="calc(100% - 20rem)" templateColumns="repeat(5, 1fr)" gap={5}>
          <Stack alignItems="flex-start" spacing={4}>
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
          <Stack alignItems="flex-start" spacing={4}>
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
          <Stack alignItems="flex-start" spacing={4}>
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
          <Stack alignItems="flex-start" spacing={4}>
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
          <Stack spacing={3} alignItems="flex-start">
            <Heading fontSize="1.5rem" fontWeight="600">
              Get app
            </Heading>
            <Button p={0}>
              <Image draggable={false} src="/svg/appstore.svg" h="2.5rem" />
            </Button>
            <Button p={0}>
              <Image draggable={false} src="/svg/playstore.svg" h="2.5rem" />
            </Button>
          </Stack>
        </Grid>
      </Flex>
      <HStack px={10} py={4} bg="brand.light">
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

const Tablet = () => {
  return (
    <Stack py={8} spacing={12}>
      <Flex px={5} justifyContent="space-between" w="100%">
        <Stack w="50%" spacing={6}>
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
        <Stack spacing={3} alignItems="flex-start">
          <Heading fontSize="1.5rem" fontWeight="600">
            Get app
          </Heading>
          <Button p={0}>
            <Image draggable={false} src="/svg/appstore.svg" h="2.5rem" />
          </Button>
          <Button p={0}>
            <Image draggable={false} src="/svg/playstore.svg" h="2.5rem" />
          </Button>
        </Stack>
      </Flex>
      <Grid px={5} w="100%" templateColumns="repeat(4, 1fr)" gap={8}>
        <Stack alignItems="flex-start" spacing={4}>
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
        <Stack alignItems="flex-start" spacing={4}>
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
        <Stack alignItems="flex-start" spacing={4}>
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
        <Stack alignItems="flex-start" spacing={4}>
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
      </Grid>
      <HStack px={5} py={4} bg="brand.light">
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

const Mobile = () => {
  return (
    <Stack py={8} spacing={8}>
      <Stack px={5} w="100%" spacing={6}>
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
          <Flex p={2} borderRadius="100%" bg="blackAlpha.400" cursor="pointer">
            <TbBrandFacebookFilled color="white" />
          </Flex>
          <Flex p={2} borderRadius="100%" bg="blackAlpha.400" cursor="pointer">
            <TbBrandTwitterFilled color="white" />
          </Flex>
          <Flex p={2} borderRadius="100%" bg="blackAlpha.400" cursor="pointer">
            <TbBrandLinkedin color="white" />
          </Flex>
          <Flex p={2} borderRadius="100%" bg="blackAlpha.400" cursor="pointer">
            <TbBrandInstagram color="white" />
          </Flex>
          <Flex p={2} borderRadius="100%" bg="blackAlpha.400" cursor="pointer">
            <TbBrandYoutube color="white" />
          </Flex>
        </HStack>
      </Stack>
      <Grid px={5} w="100%" templateColumns="repeat(2, 1fr)" gap={8}>
        <Stack alignItems="flex-start" spacing={4}>
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
        <Stack alignItems="flex-start" spacing={4}>
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
        <Stack alignItems="flex-start" spacing={4}>
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
        <Stack alignItems="flex-start" spacing={4}>
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
        <Stack spacing={3} alignItems="flex-start">
          <Heading fontSize="1.5rem" fontWeight="600">
            Get app
          </Heading>
          <Button p={0}>
            <Image draggable={false} src="/svg/appstore.svg" h="2.5rem" />
          </Button>
          <Button p={0}>
            <Image draggable={false} src="/svg/playstore.svg" h="2.5rem" />
          </Button>
        </Stack>
      </Grid>
      <HStack px={5} py={4} bg="brand.light">
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
