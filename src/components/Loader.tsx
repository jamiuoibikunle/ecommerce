import { handleLayout } from "@/features/slices/layoutSlice";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLocalStorage = () => {
      const layout = localStorage.getItem("layout");

      dispatch(handleLayout(layout ? layout : "grid"));
    };

    window && handleLocalStorage();
  }, []);

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
