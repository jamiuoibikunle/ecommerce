import useRender from "@/hooks/useRender";
import { Grid, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ReactCountryFlag from "react-country-flag";

const SuppliersByRegion = () => {
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
        Our extra services
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={5}>
        {[
          {
            title: "Arabic Emirates",
            link: "pantha-ecommerce.com.ae",
            countryCode: "AE",
          },
          {
            title: "Australia",
            link: "pantha-ecommerce.com.au",
            countryCode: "AU",
          },
          {
            title: "United States",
            link: "pantha-ecommerce.com.us",
            countryCode: "US",
          },
          {
            title: "Italy",
            link: "pantha-ecommerce.com.it",
            countryCode: "IT",
          },
          {
            title: "Denmark",
            link: "pantha-ecommerce.com.dk",
            countryCode: "DK",
          },
          {
            title: "France",
            link: "pantha-ecommerce.com.fr",
            countryCode: "FR",
          },
          {
            title: "China",
            link: "pantha-ecommerce.com.fr",
            countryCode: "CN",
          },
          {
            title: "Great Britain",
            link: "pantha-ecommerce.com.uk",
            countryCode: "GB",
          },
        ].map(({ countryCode, link, title }, index) => (
          <SupplierCard
            key={index}
            countryCode={countryCode}
            link={link}
            title={title}
          />
        ))}
      </Grid>
    </Stack>
  );
};

const Tablet = () => {
  return (
    <Stack w="100%" maxW="7xl" spacing={5} p={{ base: 5, lg: 0 }}>
      <Heading fontSize="1.5rem" fontWeight={500}>
        Our extra services
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        {[
          {
            title: "Arabic Emirates",
            link: "pantha-ecommerce.com.ae",
            countryCode: "AE",
          },
          {
            title: "Australia",
            link: "pantha-ecommerce.com.au",
            countryCode: "AU",
          },
          {
            title: "United States",
            link: "pantha-ecommerce.com.us",
            countryCode: "US",
          },
          {
            title: "Italy",
            link: "pantha-ecommerce.com.it",
            countryCode: "IT",
          },
          {
            title: "Denmark",
            link: "pantha-ecommerce.com.dk",
            countryCode: "DK",
          },
          {
            title: "France",
            link: "pantha-ecommerce.com.fr",
            countryCode: "FR",
          },
          {
            title: "China",
            link: "pantha-ecommerce.com.fr",
            countryCode: "CN",
          },
          {
            title: "Great Britain",
            link: "pantha-ecommerce.com.uk",
            countryCode: "GB",
          },
        ].map(({ countryCode, link, title }, index) => (
          <SupplierCard
            key={index}
            countryCode={countryCode}
            link={link}
            title={title}
          />
        ))}
      </Grid>
    </Stack>
  );
};

const Desktop = () => {
  return (
    <Stack w="100%" maxW="7xl" spacing={5} p={{ base: 5, lg: 0 }}>
      <Heading fontSize="1.5rem" fontWeight={500}>
        Suppliers by region
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={5}>
        {[
          {
            title: "Arabic Emirates",
            link: "pantha-ecommerce.com.ae",
            countryCode: "AE",
          },
          {
            title: "Australia",
            link: "pantha-ecommerce.com.au",
            countryCode: "AU",
          },
          {
            title: "United States",
            link: "pantha-ecommerce.com.us",
            countryCode: "US",
          },
          {
            title: "Italy",
            link: "pantha-ecommerce.com.it",
            countryCode: "IT",
          },
          {
            title: "Denmark",
            link: "pantha-ecommerce.com.dk",
            countryCode: "DK",
          },
          {
            title: "France",
            link: "pantha-ecommerce.com.fr",
            countryCode: "FR",
          },
          {
            title: "China",
            link: "pantha-ecommerce.com.fr",
            countryCode: "CN",
          },
          {
            title: "Great Britain",
            link: "pantha-ecommerce.com.uk",
            countryCode: "GB",
          },
        ].map(({ countryCode, link, title }, index) => (
          <SupplierCard
            key={index}
            countryCode={countryCode}
            link={link}
            title={title}
          />
        ))}
      </Grid>
    </Stack>
  );
};

const SupplierCard = ({ countryCode, link, title }: any) => {
  return (
    <Stack flexDir="row" alignItems="center" spacing={4}>
      <ReactCountryFlag
        style={{ fontSize: "1.8rem" }}
        svg
        countryCode={countryCode}
      />
      <Stack spacing={0}>
        <Text noOfLines={1}>{title}</Text>
        <Text noOfLines={1} color="blackAlpha.600">
          {link}
        </Text>
      </Stack>
    </Stack>
  );
};

export default SuppliersByRegion;
