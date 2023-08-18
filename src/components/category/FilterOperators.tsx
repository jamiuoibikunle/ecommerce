import React, { useState } from "react";
import useRender from "@/hooks/useRender";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";

const FilterOpeators = () => {
  return (
    <Stack w="16rem" borderTopWidth={1} py={3}>
      <Accordion allowToggle allowMultiple defaultIndex={[0]}>
        <SubCategory />
      </Accordion>
    </Stack>
  );
};

const SubCategory = () => {
  const path = usePathname();
  const router = useRouter();

  const [subcategories, setSubcategories] = useState([
    { title: "Mobile accessory", link: "mobile%20accessory" },
    { title: "Electronics", link: "electronics" },
    { title: "Smartphones", link: "smartphones" },
    { title: "Modern tech", link: "modern%20tech" },
    { title: "Mobile accessory", link: "mobile%20accessory" },
    { title: "Electronics", link: "electronics" },
    { title: "Smartphones", link: "smartphones" },
    { title: "Modern tech", link: "modern%20tech" },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AccordionItem borderWidth={0}>
      <AccordionButton px={0}>
        <Box as="span" flex="1" textAlign="left">
          <Heading fontSize="1rem" fontWeight={600}>
            Sub Category
          </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel px={0}>
        <Stack spacing={isExpanded ? 5 : 0}>
          <Stack
            spacing={5}
            maxHeight={isExpanded ? "fit-content" : "10rem"}
            overflowY="hidden"
          >
            {subcategories.map((item, index) => {
              return (
                <Button
                  variant="link"
                  fontWeight={500}
                  key={index}
                  onClick={() => router.push(`${path}/${item.link}`)}
                >
                  <Text w="100%" textAlign="left" color="blackAlpha.600">
                    {item.title}
                  </Text>
                </Button>
              );
            })}
          </Stack>
          <Button variant="link" fontWeight={500} onClick={toggleExpanded}>
            {isExpanded ? (
              <Text w="100%" textAlign="left" color="blue.500">
                See less
              </Text>
            ) : (
              <Text w="100%" textAlign="left" color="blue.500">
                See all
              </Text>
            )}
          </Button>
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default FilterOpeators;