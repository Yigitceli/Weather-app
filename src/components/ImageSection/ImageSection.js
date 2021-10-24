import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React from "react";

const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionText = motion(Text);

export default function ImageSection({ data }) {
  const bg = useColorModeValue("#9fafca", "#1a202c");
  const bg2 = useColorModeValue("#1a202c", "#9fafca");

  return (
    <MotionFlex
      w={["100%", "100%", "100%", "100%", "20%"]}
      bg={bg}
      boxShadow="dark-lg"
      flexDirection={["column", "row", "row", "row", "column"]}
      alignItems="center"
      justifyContent={[
        "center",
        "space-evenly",
        "space-evenly",
        "space-evenly",
        "center",
      ]}
      p={["0em", "1.5em", "2em", "2em", "2em"]}
      m={["0.5em", "1.5em", "2em", "2em", "2em"]}
      rounded="xl"
      color={bg2}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <MotionFlex flexDirection="column" py="1.5em">
        <MotionImage boxSize={"150px"} src={data.current.condition.icon} />
        <MotionText fontSize="xl">{data.current.condition.text}</MotionText>
      </MotionFlex>

      <MotionFlex
        flexDirection={["column", "row", "row", "row", "column"]}
        justifyContent={[
          "center",
          "space-evenly",
          "space-evenly",
          "space-evenly",
          "center",
        ]}
        w="80%"
      >
        <MotionFlex flexDirection="column" py="1em">
          <MotionHeading fontSize={["sml", "md", "lg", "xl", "2xl"]}>
            Temperature
          </MotionHeading>
          <MotionText py="0.5em">{data.current.temp_c}&#176;C</MotionText>
        </MotionFlex>
        <MotionFlex flexDirection="column" py="1em">
          <MotionHeading fontSize={["sml", "md", "lg", "xl", "2xl"]}>
            Temperature Felt
          </MotionHeading>
          <MotionText py="0.5em">{data.current.feelslike_c}&#176;C</MotionText>
        </MotionFlex>
      </MotionFlex>
    </MotionFlex>
  );
}
