import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React from "react";
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);

const MotionText = motion(Text);
export default function LeftColumn({ data }) {
  const bg = useColorModeValue("#9fafca", "#1a202c");
  const bg2 = useColorModeValue("#1a202c", "#9fafca");
  return (
    <MotionFlex
      h="100%"
      w="15%"
      flexDirection="column"
      className="letColumn"
      mx="1em"
    >
      <MotionFlex
        bg={bg2}
        w="100%"
        rounded="xl"
        h="45%"
        p="0.5em"
        my="1em"
        flexDirection="column"
      >
        <MotionHeading fontSize="2xl" textAlign="center" w="100%" color={bg}>
          Gust Speed
        </MotionHeading>
        <MotionText py="0.5em" fontSize="2xl">
          {data.current.gust_kph} Kph
        </MotionText>
        <MotionText py="0.5em" fontSize="2xl">
          {data.current.gust_mph} Mph
        </MotionText>
      </MotionFlex>
      <MotionFlex
        bg={bg2}
        w="100%"
        rounded="xl"
        h="45%"
        my="1em"
        p="0.5em"
        flexDirection="column"
      >
        <MotionHeading fontSize="2xl" textAlign="center" w="100%" color={bg}>
          Pressure
        </MotionHeading>
        <MotionText py="0.5em" fontSize="2xl">
          {data.current.pressure_in} N/m&#178;
        </MotionText>
        <MotionText py="0.5em" fontSize="2xl">
          {data.current.pressure_mb} Milibar
        </MotionText>
      </MotionFlex>
    </MotionFlex>
  );
}
