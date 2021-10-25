import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React from "react";

const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionText = motion(Text);

const epochToDay = (dayEpoch) => {
  const d = new Date(dayEpoch).getUTCDay();

  switch (d) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 0:
      return "Sunday";
    default:
      break;
  }
};

export default function BottomRow({ data, bg, bg2 }) {
  return (
    <MotionFlex
      w="100%"      
      minH="70vh"            
      bg={bg2}
      color={bg}
      flexDirection="column"
      rounded="xl"
      p="1.5em"
      mt='2em'
    >
      <MotionHeading textAlign="center">Forecast</MotionHeading>
      <MotionFlex
        alignItems="center"
        minH="100%"
        justifyContent="space-evenly"
        wrap="wrap"
      >
        {data.forecast.forecastday.map((item, index) => (
          <MotionFlex
            w="400px"
            h="470px"
            bg={bg}
            rounded="xl"
            flexDirection="column"
            className="imageSection"
            color={bg2}
            py='0.5em'
            mt='2em'
          >
            <MotionFlex flexDirection="column" alignItems="center">
              <MotionHeading>{epochToDay(item.date)}</MotionHeading>
              <MotionImage
                src={item.day.condition.icon}
                boxSize="7em"
              ></MotionImage>
              <MotionHeading fontSize="3xl">
                {item.day.condition.text}
              </MotionHeading>
            </MotionFlex>
            <MotionFlex flexDirection="column" justifyContent="center" h="100%">
              <MotionFlex flexDirection="column" my="0.5em">
                <MotionHeading fontSize="2xl">Avg Temperature</MotionHeading>
                <MotionText fontSize="xl" py="0.5em">
                  {item.day.avgtemp_c} &#8451;
                </MotionText>
              </MotionFlex>
              <MotionFlex flexDirection="column" my="0.5em">
                <MotionHeading fontSize="2xl">Min Temperature</MotionHeading>
                <MotionText fontSize="xl" py="0.5em">
                  {item.day.mintemp_c} &#8451;
                </MotionText>
              </MotionFlex>
              <MotionFlex flexDirection="column" my="0.5em">
                <MotionHeading fontSize="2xl">Max Temperature</MotionHeading>
                <MotionText fontSize="xl" py="0.5em">
                  {item.day.maxtemp_c} &#8451;
                </MotionText>
              </MotionFlex>
            </MotionFlex>
          </MotionFlex>
        ))}
      </MotionFlex>
    </MotionFlex>
  );
}
