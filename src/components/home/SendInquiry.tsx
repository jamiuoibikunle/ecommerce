import useRender from "@/hooks/useRender";
import {
  Button,
  Flex,
  HStack,
  Heading,
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

const SendInquiry = () => {
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      bgImage="/sendinquiry.png"
      bgPos="center"
      bgSize="cover"
      w="100%"
      color="white"
      mt={2}
      px={5}
      py={10}
      spacing={8}
    >
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <ModalCloseButton />
            <Stack py={10} spacing={5}>
              <Stack>
                <Heading fontSize="1.5rem" fontWeight={500} textAlign="center">
                  An easy way to send requests to all suppliers
                </Heading>
                <Text textAlign="center">
                  Lorep ipsum dolor sit amet, consecteturadipsicing elit, sed do
                  elusmod tempor incidunt.
                </Text>
              </Stack>
              <Stack
                p={5}
                borderRadius={5}
                spacing={5}
                borderWidth={1}
                borderColor="gray.300"
              >
                <Heading fontSize="1.5rem" fontWeight={500}>
                  Send quote to suppliers
                </Heading>
                <Input placeholder="What item do you need?" />
                <Textarea placeholder="Type more details" resize="none" />
                <HStack>
                  <Input w="12rem" placeholder="Quantity" />
                  <Select w="6rem">
                    <option>pcs</option>
                    <option>kg</option>
                  </Select>
                </HStack>
                <Button colorScheme="blue" w="fit-content">
                  Send inquiry
                </Button>
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Heading fontSize="2rem" fontWeight={500}>
        An easy way to send requests to all suppliers
      </Heading>
      <Button colorScheme="blue" w="fit-content" onClick={onOpen}>
        Send inquiry
      </Button>
    </Stack>
  );
};

const Tablet = () => {
  return (
    <Flex
      justifyContent="space-between"
      bgImage="/sendinquiry.png"
      bgPos="center"
      bgSize="cover"
      w="100%"
      maxW="7xl"
      borderWidth={1}
      borderColor="gray.300"
      borderRadius={5}
      px={5}
      py={10}
      mt={3}
    >
      <Stack w="sm" color="white">
        <Heading fontSize="2rem" fontWeight={500}>
          An easy way to send requests to all suppliers
        </Heading>
        <Text>
          Lorep ipsum dolor sit amet, consecteturadipsicing elit, sed do elusmod
          tempor incidunt.
        </Text>
      </Stack>
      <Stack
        bg="white"
        p={5}
        borderRadius={5}
        spacing={5}
        w="sm"
        borderWidth={1}
        borderColor="gray.300"
      >
        <Heading fontSize="1.5rem" fontWeight={500}>
          Send quote to suppliers
        </Heading>
        <Input placeholder="What item do you need?" />
        <Textarea placeholder="Type more details" />
        <HStack>
          <Input w="12rem" placeholder="Quantity" />
          <Select w="6rem">
            <option>pcs</option>
            <option>kg</option>
          </Select>
        </HStack>
        <Button colorScheme="blue" w="fit-content">
          Send inquiry
        </Button>
      </Stack>
    </Flex>
  );
};

const Desktop = () => {
  return (
    <Flex
      justifyContent="space-between"
      bgImage="/sendinquiry.png"
      bgPos="center"
      bgSize="cover"
      w="100%"
      maxW="7xl"
      borderWidth={1}
      borderColor="gray.300"
      borderRadius={5}
      p={10}
    >
      <Stack w="md" color="white">
        <Heading fontSize="2rem" fontWeight={500}>
          An easy way to send requests to all suppliers
        </Heading>
        <Text>
          Lorep ipsum dolor sit amet, consecteturadipsicing elit, sed do elusmod
          tempor incidunt.
        </Text>
      </Stack>
      <Stack
        bg="white"
        p={5}
        borderRadius={5}
        spacing={5}
        w="md"
        borderWidth={1}
        borderColor="gray.300"
      >
        <Heading fontSize="1.5rem" fontWeight={500}>
          Send quote to suppliers
        </Heading>
        <Input placeholder="What item do you need?" />
        <Textarea placeholder="Type more details" />
        <HStack>
          <Input w="12rem" placeholder="Quantity" />
          <Select w="6rem">
            <option>pcs</option>
            <option>kg</option>
          </Select>
        </HStack>
        <Button colorScheme="blue" w="fit-content">
          Send inquiry
        </Button>
      </Stack>
    </Flex>
  );
};

export default SendInquiry;
