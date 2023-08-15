import useRender from "@/hooks/useRender";
import { DealsCountdown, TimeLabel } from "@/types";
import { handleDay } from "@/utils/handleDay";
import { handleHour } from "@/utils/handleHour";
import { handleMinute } from "@/utils/handleMinute";
import { handleSecond } from "@/utils/handleSecond";
import {
  Box,
  Grid,
  HStack,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Deals = () => {
  const [render] = useRender();

  const [countdownDate, setCountdownate] = useState(
    new Date().setDate(new Date().getDate() + 4)
  );
  const [dealsCountdown, setDealsCountdown] = useState<DealsCountdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => {
      const days = handleDay(countdownDate);
      const hours = handleHour(countdownDate);
      const minutes = handleMinute(countdownDate);
      const seconds = handleSecond(countdownDate);

      setDealsCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);
  }, []);

  switch (render) {
    case "desktop":
      return <Desktop dealsCountdown={dealsCountdown} />;

    case "tablet":
      return <Tablet dealsCountdown={dealsCountdown} />;

    default:
      return <Mobile dealsCountdown={dealsCountdown} />;
  }
};

const Mobile = ({ dealsCountdown }: { dealsCountdown: DealsCountdown }) => {
  return (
    <Stack flexDir="column" spacing="1px" w="100%">
      <Stack flexDir="row" w="100%" p={5} bg="white">
        <Stack spacing={0}>
          <Heading fontSize="1.5rem" fontWeight={500}>
            Deals and offers
          </Heading>
          <Text color="blackAlpha.700">Hygeine equipments</Text>
        </Stack>
        <Spacer />
        <HStack>
          <TimeLabel time={dealsCountdown.days} label="Days" />
          <TimeLabel time={dealsCountdown.hours} label="Hour" />
          <TimeLabel time={dealsCountdown.minutes} label="Mins" />
        </HStack>
      </Stack>
      <Box overflowX="auto" bg="gray.100" scrollSnapType="x mandatory">
        <Grid
          w="4xl"
          templateColumns="repeat(5, 1fr)"
          gap="1px"
          scrollSnapAlign="start"
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
              w="100%"
              alignItems="center"
              justifyContent="center"
              h="14rem"
              bg="white"
              p={6}
              borderTopWidth={1}
              borderBottomWidth={1}
            >
              <Image h="50%" w="6.5rem" src={item.image} />
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
        </Grid>
      </Box>
    </Stack>
  );
};

const Tablet = ({ dealsCountdown }: { dealsCountdown: DealsCountdown }) => {
  return (
    <Stack flexDir="column" spacing="1px" w="100%">
      <Stack flexDir="row" w="100%" p={5} bg="white">
        <Stack spacing={0}>
          <Heading fontSize="1.5rem" fontWeight={500}>
            Deals and offers
          </Heading>
          <Text color="blackAlpha.700">Hygeine equipments</Text>
        </Stack>
        <Spacer />
        <HStack>
          <TimeLabel time={dealsCountdown.days} label="Days" />
          <TimeLabel time={dealsCountdown.hours} label="Hour" />
          <TimeLabel time={dealsCountdown.minutes} label="Mins" />
        </HStack>
      </Stack>
      <Box overflowX="auto" bg="gray.100" w="100%" scrollSnapType="x mandatory">
        <Grid
          w="4xl"
          templateColumns="repeat(5, 1fr)"
          gap="1px"
          scrollSnapAlign="start"
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
              w="100%"
              alignItems="center"
              justifyContent="center"
              h="14rem"
              bg="white"
              p={6}
              borderTopWidth={1}
              borderBottomWidth={1}
            >
              <Image h="50%" w="6.5rem" src={item.image} />
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
        </Grid>
      </Box>
    </Stack>
  );
};

const Desktop = ({ dealsCountdown }: { dealsCountdown: DealsCountdown }) => {
  return (
    <Stack
      flexDir="row"
      borderWidth={1}
      borderRadius={5}
      overflow="hidden"
      borderColor="gray.300"
      bg="gray.300"
      spacing="1px"
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
          <TimeLabel time={dealsCountdown.days} label="Days" />
          <TimeLabel time={dealsCountdown.hours} label="Hour" />
          <TimeLabel time={dealsCountdown.minutes} label="Mins" />
          <TimeLabel time={dealsCountdown.seconds} label="Sec" />
        </HStack>
      </Stack>
      <Grid
        templateColumns="repeat(5, 1fr)"
        w={{ md: "calc(100% - 10rem)", lg: "calc(100% - 15rem)" }}
        h="100%"
        gap="1px"
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
            w="100%"
            bg="white"
            alignItems="center"
            py={{ md: 4, lg: 2 }}
            cursor="pointer"
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
      </Grid>
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
      w={{ base: "2.5rem", lg: "3rem" }}
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
