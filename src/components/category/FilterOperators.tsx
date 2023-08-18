import React from "react";
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
  const path = usePathname();
  const router = useRouter();

  return (
    <Stack w="16rem" borderTopWidth={1} py={3}>
      <Accordion allowToggle allowMultiple defaultIndex={[0]}>
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
            <Stack spacing={5}>
              {[
                { title: "Mobile accessory", link: "mobile%20accessory" },
                { title: "Electronics", link: "electronics" },
                { title: "Smartphones", link: "smartphones" },
                { title: "Modern tech", link: "modern%20tech" },
              ].map((item, index) => {
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
              <Button variant="link" fontWeight={500}>
                <Text w="100%" textAlign="left" color="blue.500">
                  See all
                </Text>
              </Button>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default FilterOpeators;
