import React from "react";
import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsArrowLeft, BsCart, BsPerson, BsSearch } from "react-icons/bs";
import { handlePaths } from "@/utils/handlePaths";
import { usePathname } from "next/navigation";

const Tablet = () => {
  const paths = usePathname();
  const resolved = handlePaths(paths as string);
  const title = resolved[resolved.length - 1].replaceAll("%20", " ");

  return (
    <Stack px={5}>
      <HStack py={5} spacing={5}>
        <Box cursor="pointer">
          <BsArrowLeft size={30} />
        </Box>
        <Text fontWeight={600}>{title}</Text>
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

export default Tablet;
