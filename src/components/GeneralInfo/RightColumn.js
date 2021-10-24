import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React from "react";
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);

const MotionText = motion(Text);
export default function RightColumn({ data }) {
  const bg = useColorModeValue("#9fafca", "#1a202c");
  const bg2 = useColorModeValue("#1a202c", "#9fafca");
  return (
    <MotionFlex
      className="rightColumn"
      w="15%"
      bg={bg2}
      h="100%"
      mx="1em"
      rounded="lg"
    ></MotionFlex>
  );
}
