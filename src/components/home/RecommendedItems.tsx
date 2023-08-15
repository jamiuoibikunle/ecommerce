import useRender from "@/hooks/useRender";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowRight, BsChevronRight } from "react-icons/bs";

const RecommendedItems = () => {
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

const Mobile = () => {
  return (
    <Stack w="100%" spacing={5} px={4} py={5}>
      <Heading fontSize="1.5rem" fontWeight={500}>
        Recommended items
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        {Array.from("1234567890").map((item, index) => (
          <GridItem key={index}>
            <ItemCard />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

const Tablet = () => {
  return (
    <Stack w="100%" maxW="7xl" spacing={5} p={{ base: 5, lg: 0 }}>
      <Heading fontSize="1.5rem" fontWeight={500}>
        Recommended items
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        {Array.from("1234567890").map((item, index) => (
          <GridItem key={index}>
            <ItemCard />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

const Desktop = () => {
  return (
    <Stack w="100%" maxW="7xl" spacing={5} p={{ base: 5, lg: 0 }}>
      <Heading fontSize="1.5rem" fontWeight={500}>
        Recommended items
      </Heading>
      <Grid templateColumns="repeat(5, 1fr)" gap={3}>
        {Array.from("1234567890").map((item, index) => (
          <GridItem key={index}>
            <ItemCard />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

const ItemCard = () => {
  return (
    <Stack
      w="100%"
      bg="white"
      px={{ base: 2, lg: 5 }}
      py={5}
      borderWidth={1}
      borderColor="gray.300"
      borderRadius={5}
      spacing={3}
      cursor="pointer"
      _hover={{
        borderColor: "blue.300",
      }}
      transitionDuration="0.5s"
    >
      <Image src="/recommendeditem01.png" draggable={false} />
      <Text fontWeight={600}>$10.30</Text>
      <Text color="blackAlpha.600" fontSize={{ base: "0.9rem", lg: "1rem" }}>
        T-shirts with multiple colors, for men
      </Text>
    </Stack>
  );
};

export default RecommendedItems;
