import React from "react";
import { Center, Flex, Heading, Text } from "@chakra-ui/layout";
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
      w={["98%", "100%", "100%", "90%", "70%"]}
      h='100%'
      bg={bg}
      boxShadow="dark-lg"
      flexDirection="column"
      alignItems="center"
      justifyContent='space-between'
    
      p={["0", "0", "0.5em", "0.5em", "1em"]}
      rounded="xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <MotionHeading fontSize="4xl" py="0.5em">
        General
      </MotionHeading>
      <MotionFlex
        w="100%"
        h="100%"
        flexDirection={["column", "column", "column", "column", "row"]}
      >
        <LeftColumn data={data} />
        <MiddleColumn data={data} />
        <RightColumn data={data} />
      </MotionFlex>
    </MotionFlex>
  );
}
