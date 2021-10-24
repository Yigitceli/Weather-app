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
      w={["100%", "100%", "100%", "100%", "15%"]}
      bg={bg}
      h="100%"
      rounded="lg"
      justifyContent='space-evenly'
    >
      <MotionFlex
        w={["40%", "40%", "40%", "40%", "100%"]}
        bg={bg2}
        rounded="lg"
        h={["110px"]}
        p="0.5em"
        flexDirection="column"
        justifyContent="space-evenly"
        
        color={bg}
      >
        <MotionHeading fontSize="2xl">Humidity</MotionHeading>
        <MotionText fontSize="xl">{data.current.humidity} %</MotionText>
      </MotionFlex>
      <MotionFlex
        w={["40%", "40%", "40%", "40%", "100%"]}
        bg={bg2}
        rounded="lg"
        h={["110px"]}
        p="0.5em"
        flexDirection="column"
        justifyContent="space-evenly"
        
        color={bg}
      >
        <MotionHeading fontSize="2xl">Cordinates</MotionHeading>
        <MotionText fontSize="xl">Latitude: {data.location.lat} </MotionText>
        <MotionText fontSize="xl">Lonitude: {data.location.lon} </MotionText>
      </MotionFlex>
    </MotionFlex>
  );
}
