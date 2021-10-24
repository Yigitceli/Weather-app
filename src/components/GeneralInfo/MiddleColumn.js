import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React from "react";

const MotionFlex = motion(Flex);

export default function MiddleColumn() {
  const bg = useColorModeValue("#9fafca", "#1a202c");
  const bg2 = useColorModeValue("#1a202c", "#9fafca");

  return (
    <MotionFlex
      className="middleColumn"
      w="62%"
      bg={bg2}
      h="100%"
      mx="1em"
      rounded="xl"
    ></MotionFlex>
  );
}
