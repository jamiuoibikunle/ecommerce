import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { CustomButton } from "@/components/home/Categories";
import useRender from "@/hooks/useRender";

const Categories = () => {
  const [render] = useRender();

  return render === "desktop" ? null : (
    <Box
      overflowX={{ base: "auto", lg: "unset" }}
      w={{ base: "100%", lg: "max-content" }}
      p={{ base: 4, lg: 0 }}
      bg="white"
    >
      <Stack
        w={{ base: "fit-content", lg: "max-content" }}
        flexDir={{ base: "row", lg: "column" }}
      >
        <CustomButton link="automobiles" title="Automobiles" />
        <CustomButton link="clothes and wear" title="Clothes and wear" />
        <CustomButton link="home interiors" title="Home interiors" />
        <CustomButton link="computer and tech" title="Computer and tech" />
        <CustomButton link="tools and equipment" title="Tools, equipments" />
        <CustomButton link="sports and outdoor" title="Sports and outdoor" />
        <CustomButton link="animal and pets" title="Animal and pets" />
        <CustomButton link="machinery tools" title="Machinery tools" />
      </Stack>
    </Box>
  );
};

export default Categories;
