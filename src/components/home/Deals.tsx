import { TimeLabel } from "@/types";
import {
  Box,
  HStack,
  Heading,
  Image,
  Spacer,
  Stack,
  StackDivider,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

const Deals = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  return !isDesktop ? (
    <Stack flexDir="column" spacing={0.5} w="100%">
      <Stack flexDir="row" w="100%" p={5} bg="white">
        <Stack spacing={0}>
          <Heading fontSize="1.5rem" fontWeight={500}>
            Deals and offers
          </Heading>
          <Text color="blackAlpha.700">Hygeine equipments</Text>
        </Stack>
        <Spacer />
        <HStack>
          <TimeLabel time={4} label="Days" />
          <TimeLabel time={13} label="Hour" />
          <TimeLabel time={34} label="Mins" />
        </HStack>
      </Stack>
      <Box overflowX="auto" bg="gray.100">
        <Stack flexDir="row" w="fit-content" spacing={0.5}>
          {[
            {
              title: "Smart watches",
              image: "/deals-smartwatches.png",
              discount: "-25%",
            },
            {
              title: "Laptops",
              image: "/deals-laptops.png",
              discount: "-15%",
            },
            {
              title: "GoPro cameras",
              image: "/deals-goprocameras.png",
              discount: "-40%",
            },
            {
              title: "Headphones",
              image: "/deals-headphones.png",
              discount: "-25%",
            },
            {
              title: "Camon cameras",
              image: "/deals-camoncameras.png",
              discount: "-25%",
            },
          ].map((item, index) => (
            <Stack
              key={index}
              w="10rem"
              alignItems="center"
              h="14rem"
              bg="white"
              p={6}
              borderTopWidth={1}
              borderBottomWidth={1}
            >
              <Image h="50%" w="7rem" src={item.image} />
              <Text fontWeight={500} noOfLines={1} textAlign="center">
                {item.title}
              </Text>
              <Text
                px={5}
                py={1}
                bg="red.100"
                borderRadius={20}
                color="red"
                fontWeight={600}
              >
                {item.discount}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Stack>
  ) : (
    <Stack
      flexDir="row"
      borderWidth={1}
      borderRadius={5}
      overflow="hidden"
      borderColor="gray.300"
      bg="gray.300"
      spacing={0.5}
      w="100%"
      maxW="7xl"
    >
      <Stack
        w={{ md: "10rem", lg: "15rem" }}
        p={5}
        bg="white"
        boxSizing="content-box"
      >
        <Heading fontSize="1.5rem" fontWeight={500}>
          Deals and offers
        </Heading>
        <Text color="blackAlpha.700">Hygeine equipments</Text>
        <HStack>
          <TimeLabel time={4} label="Days" />
          <TimeLabel time={13} label="Hour" />
          <TimeLabel time={34} label="Mins" />
          <TimeLabel time={56} label="Sec" />
        </HStack>
      </Stack>
      <Stack
        flexDir="row"
        w={{ md: "calc(100% - 10rem)", lg: "calc(100% - 15rem)" }}
        spacing={0.5}
      >
        {[
          {
            title: "Smart watches",
            image: "/deals-smartwatches.png",
            discount: "-25%",
          },
          {
            title: "Laptops",
            image: "/deals-laptops.png",
            discount: "-15%",
          },
          {
            title: "GoPro cameras",
            image: "/deals-goprocameras.png",
            discount: "-40%",
          },
          {
            title: "Headphones",
            image: "/deals-headphones.png",
            discount: "-25%",
          },
          {
            title: "Camon cameras",
            image: "/deals-camoncameras.png",
            discount: "-25%",
          },
        ].map((item, index) => (
          <Stack
            key={index}
            w="20%"
            bg="white"
            alignItems="center"
            py={{ md: 4, lg: 2 }}
          >
            <Image
              h={{ md: "6rem", lg: "7rem" }}
              maxW={{ md: "6rem", lg: "8rem" }}
              src={item.image}
            />
            <Text fontWeight={500} noOfLines={1} textAlign="center">
              {item.title}
            </Text>
            <Text
              px={5}
              py={1}
              bg="red.100"
              borderRadius={20}
              color="red"
              fontWeight={600}
            >
              {item.discount}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

const TimeLabel = ({ time, label }: TimeLabel) => {
  return (
    <Stack
      bg={{ base: "gray.200", lg: "blackAlpha.800" }}
      color={{ base: "blackAlpha.500", lg: "white" }}
      justifyContent="center"
      alignItems="center"
      p={{ base: 1, lg: 2 }}
      spacing={0}
      borderRadius={5}
    >
      <Heading fontSize={{ base: "1rem", lg: "1.5rem" }} fontWeight={500}>
        {time.toString().padStart(2, "0")}
      </Heading>
      <Text fontSize="0.8rem">{label}</Text>
    </Stack>
  );
};

export default Deals;
