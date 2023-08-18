"use client";

import useRender from "@/hooks/useRender";
import { handlePaths } from "@/utils/handlePaths";
import { Button, HStack, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";

const Hierarchy = () => {
  const paths = usePathname();
  const resolved = handlePaths(paths as string);

  return (
    <HStack w="100%" maxW="7xl" pb={3} pt={5} px={4} spacing={3} color="gray.500">
      <Button variant="link" fontWeight={400}>
        Home
      </Button>
      <BsChevronRight size={12} />
      {resolved.map((item: string, index: number) => (
        <HStack key={index}>
          <Button variant="link" fontWeight={400}>
            {item.replaceAll("%20", " ")}
          </Button>
          {resolved.length - 1 !== index ? <BsChevronRight size={12} /> : null}
        </HStack>
      ))}
    </HStack>
  );
};

export default Hierarchy;
