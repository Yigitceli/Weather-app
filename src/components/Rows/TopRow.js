import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React from "react";

const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionText = motion(Text);

const directionValidation = (e) => {
  switch (e) {
    case "E":
      return "East";
    case "N":
      return "North";
    case "W":
      return "West";
    case "S":
      return "South";
    default:
      break;
  }
};

export default function TopRow({ data, bg, bg2 }) {
  return (
    <MotionFlex
      w="100%"
      alignItems="space-evenly"
      justifyContent="space-evenly"
      wrap="wrap"
    >
      <MotionFlex
        w="400px"
        h="470px"
        bg={bg2}
        rounded="xl"
        flexDirection="column"
        p="0.5em"
        className="imageSection"
        color={bg}
      >
        <MotionFlex flexDirection="column" alignItems="center">
          <MotionImage
            src={data.current.condition.icon}
            boxSize="7em"
          ></MotionImage>
          <MotionHeading fontSize="3xl">
            {data.current.condition.text}
          </MotionHeading>
        </MotionFlex>
        <MotionFlex flexDirection="column" justifyContent="center" h="100%">
          <MotionFlex flexDirection="column" my="0.5em">
            <MotionHeading fontSize="2xl">Temperature</MotionHeading>
            <MotionText fontSize="xl" py="0.5em">
              {data.current.temp_c} &#8451;
            </MotionText>
          </MotionFlex>
          <MotionFlex flexDirection="column" my="0.5em">
            <MotionHeading fontSize="2xl">Temperature Felt</MotionHeading>
            <MotionText fontSize="xl" py="0.5em">
              {data.current.feelslike_c} &#8451;
            </MotionText>
          </MotionFlex>
        </MotionFlex>
      </MotionFlex>
      <MotionFlex
        w="400px"
        h="470px"
        bg={bg}
        rounded="xl"
        p="0.5em"
        color={bg}
        wrap="wrap"
        alignItems="center"
      >
        <MotionFlex w="400px" justifyContent="space-evenly">
          <MotionFlex
            h="100%"
            boxSize="170px"
            rounded="xl"
            bg={bg2}
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <MotionHeading>Humidity</MotionHeading>
            <MotionText fontWeight="bold">
              {data.current.humidity} %RH
            </MotionText>
          </MotionFlex>
          <MotionFlex
            h="100%"
            boxSize="170px"
            rounded="xl"
            bg={bg2}
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <MotionHeading>Pressure</MotionHeading>
            <MotionText fontWeight="bold">
              {data.current.pressure_in} inHg
            </MotionText>
            <MotionText fontWeight="bold">
              {data.current.pressure_mb} Mbar
            </MotionText>
          </MotionFlex>
        </MotionFlex>
        <MotionFlex w="400px" justifyContent="space-evenly">
          <MotionFlex
            h="100%"
            boxSize="170px"
            rounded="xl"
            bg={bg2}
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <MotionHeading>Gust</MotionHeading>
            <MotionText fontWeight="bold">
              {data.current.gust_kph} Kph
            </MotionText>
            <MotionText fontWeight="bold">
              {data.current.gust_mph} Mph
            </MotionText>
          </MotionFlex>
          <MotionFlex
            h="100%"
            boxSize="170px"
            rounded="xl"
            bg={bg2}
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <MotionHeading>Wind</MotionHeading>
            <MotionText fontWeight="bold">
              {data.current.wind_kph} Kph
            </MotionText>
            <MotionText fontWeight="bold">
              {data.current.wind_mph} Mph
            </MotionText>
            <MotionText fontWeight="bold">
              Direction: {directionValidation(data.current.wind_dir)}
            </MotionText>
          </MotionFlex>
        </MotionFlex>
      </MotionFlex>
    </MotionFlex>
  );
}
