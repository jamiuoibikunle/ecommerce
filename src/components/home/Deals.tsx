import { TimeLabel } from "@/types";
import {
  Box,
  HStack,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Deals = () => {
  return (
    <Stack
      flexDir="row"
      borderWidth={1}
      borderColor="gray.300"
      bg="gray.300"
      spacing={0.5}
    >
      <Stack w="15rem" p={5} bg="white" boxSizing="content-box">
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
      <Stack flexDir="row" w="calc(100% - 15rem)" spacing={0.5}>
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
          <Stack key={index} w="20%" bg="white" alignItems="center" py={2}>
            <Image h="7rem" maxW="8rem" src={item.image} />
            <Text fontWeight={500}>{item.title}</Text>
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
      bg="blackAlpha.800"
      color="white"
      justifyContent="center"
      alignItems="center"
      p={2}
      spacing={0}
      borderRadius={5}
    >
      <Heading fontSize="1.5rem" fontWeight={500}>
        {time.toString().padStart(2, "0")}
      </Heading>
      <Text fontSize="0.8rem">{label}</Text>
    </Stack>
  );
};

export default Deals;
