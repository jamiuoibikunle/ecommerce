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
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const FilterOpeators = () => {
  return (
    <Stack w="16rem" borderTopWidth={1} py={3}>
      <Accordion allowToggle allowMultiple defaultIndex={[0, 1]}>
        <SubCategory />
        <Brands />
        <Features />
        <PriceRange />
        <Condition />
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
    <AccordionItem borderWidth={0} pb={4}>
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

const Brands = () => {
  const [brands, setBrands] = useState([
    { title: "Samsung" },
    { title: "Apple" },
    { title: "Huawei" },
    { title: "Pocco" },
    { title: "Lenovo" },
    { title: "Tecno" },
    { title: "Dell" },
    { title: "HP" },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AccordionItem borderWidth={0} pb={4}>
      <AccordionButton px={0}>
        <Box as="span" flex="1" textAlign="left">
          <Heading fontSize="1rem" fontWeight={600}>
            Brands
          </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel px={0}>
        <Stack spacing={isExpanded ? 5 : 0}>
          <Stack
            spacing={5}
            maxHeight={isExpanded ? "fit-content" : "10.5rem"}
            overflowY="hidden"
          >
            {brands.map((item, index) => {
              return (
                <Checkbox key={index} w="100%">
                  <Text w="100%" textAlign="left" color="blackAlpha.600">
                    {item.title}
                  </Text>
                </Checkbox>
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

const Features = () => {
  const [brands, setBrands] = useState([
    { title: "Metallic" },
    { title: "Plastic cover" },
    { title: "8GB Ram" },
    { title: "Super power" },
    { title: "Large memory" },
    { title: "5G network" },
    { title: "4000mAh battery" },
    { title: "Micro sim" },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AccordionItem borderWidth={0} pb={4}>
      <AccordionButton px={0}>
        <Box as="span" flex="1" textAlign="left">
          <Heading fontSize="1rem" fontWeight={600}>
            Features
          </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel px={0}>
        <Stack spacing={isExpanded ? 5 : 0}>
          <Stack
            spacing={5}
            maxHeight={isExpanded ? "fit-content" : "10.5rem"}
            overflowY="hidden"
          >
            {brands.map((item, index) => {
              return (
                <Checkbox key={index} w="100%">
                  <Text w="100%" textAlign="left" color="blackAlpha.600">
                    {item.title}
                  </Text>
                </Checkbox>
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

const PriceRange = () => {
  return (
    <AccordionItem borderWidth={0} pb={4}>
      <AccordionButton px={0}>
        <Box as="span" flex="1" textAlign="left">
          <Heading fontSize="1rem" fontWeight={600}>
            Price Range
          </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel px={0}>
        <Stack py={3} spacing={4}>
          <Slider aria-label="price-range-slider" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Stack>
            <HStack w="100%" spacing={2}>
              <FormControl w="50%">
                <FormLabel>Min</FormLabel>
                <Input type="number" placeholder="0" />
              </FormControl>
              <FormControl w="50%">
                <FormLabel>Max</FormLabel>
                <Input type="number" placeholder="999999" />
              </FormControl>
            </HStack>
            <Button
              size="md"
              variant="outline"
              colorScheme="gray"
              color="blue"
              fontWeight={500}
            >
              Apply
            </Button>
          </Stack>
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
};

const Condition = () => {
  const [conditions] = useState([
    "Any",
    "Refurbished",
    "Brand new",
    "Old items",
  ]);
  const [value, setValue] = useState("Any");

  return (
    <AccordionItem borderWidth={0} pb={4}>
      <AccordionButton px={0}>
        <Box as="span" flex="1" textAlign="left">
          <Heading fontSize="1rem" fontWeight={600}>
            Conditions
          </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel px={0}>
        <Stack>
          <RadioGroup onChange={setValue} value={value}>
            <Stack spacing={4}>
              {conditions.map((item, index) => (
                <Radio value={item} key={index}>
                  {item}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default FilterOpeators;
