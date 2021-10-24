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
      w={["100%", "100%", "100%", "100%", "15%"]}
      flexDirection={["row", "row", "row", "row", "column"]}
      className="letColumn"
      alignItems={["center", "center", "center", "center", "space-between"]}
      justifyContent={[
        "space-evenly",
        "space-evenly",
        "space-evenly",
        "space-evenly",
        "space-evenly",
      ]}
    >
      <MotionFlex
        bg={bg2}
        w={["45%", "40%", "40%", "40%", "100%"]}
        rounded="xl"
        h="45%"
        p="0.5em"
        my="1em"
        flexDirection="column"
        color={bg}
      >
        <MotionHeading fontSize="2xl" textAlign="center" w="100%">
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
        w={["45%", "40%", "40%", "40%", "100%"]}
        rounded="xl"
        h="45%"
        my="1em"
        p="0.5em"
        flexDirection="column"
        color={bg}
      >
        <MotionHeading fontSize="2xl" textAlign="center" w="100%">
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
