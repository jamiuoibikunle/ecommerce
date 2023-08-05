import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div exit={{ opacity: 0 }}>
        <Stack
          w="100vw"
          h="100vh"
          justifyContent="center"
          alignItems="center"
          color="blue.500"
          pos="fixed"
          zIndex={10}
          bg="white"
        >
          <PropagateLoader color="#3182ce" />
        </Stack>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
