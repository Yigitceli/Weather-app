import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { motion } from "framer-motion";
import MiddleColumn from "./MiddleColumn";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);

const MotionText = motion(Text);

export default function GeneralInfo({ data }) {
  const bg = useColorModeValue("#9fafca", "#1a202c");
  const bg2 = useColorModeValue("#1a202c", "#9fafca");
  return (
    <MotionFlex
      w={["100%", "100%", "100%", "100%", "70%"]}
      bg={bg}
      boxShadow="dark-lg"
      flexDirection="column"
      alignItems="center"
      p="1em"
      m={["0.5em", "1.5em", "2em", "2em", "2em"]}
      rounded="xl"
    >
      <MotionHeading fontSize="4xl" py='0.5em'>General</MotionHeading>
      <MotionFlex w="100%" h="100%">
        <LeftColumn data={data} />
        <MiddleColumn data={data} />
        <RightColumn data={data} />
      </MotionFlex>
    </MotionFlex>
  );
}
