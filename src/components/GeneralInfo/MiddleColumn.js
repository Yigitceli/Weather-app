import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

const MotionFlex = motion(Flex);
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

export default function MiddleColumn({ data }) {
  const bg = useColorModeValue("#9fafca", "#1a202c");
  const bg2 = useColorModeValue("#1a202c", "#9fafca");

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <MotionFlex
      className="middleColumn"
      justifyContent="space-between"
      w="100%"
      h="100%"
      rounded="xl"
      p={["1m", "0em", "0em", "1em", "2em"]}
    >
      {data.forecast.forecastday.map((item) => (
        <MotionFlex
        
          justifyContent="space-between"
          w={["6em", "20em", "20em", "18em", "14em"]}
          bg={bg2}
          rounded="xl"
          color={bg}
        >
          <MotionFlex
            w="100%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <MotionText fontSize={["md", "xl", "2xl", "2xl", "2xl"]}>
              {epochToDay(item.date)}
            </MotionText>
            <MotionImage src={item.day.condition.icon} />
            <MotionText fontSize={["md", "xl", "2xl", "2xl", "2xl"]}>
              {item.day.condition.text}
            </MotionText>
          </MotionFlex>
        </MotionFlex>
      ))}
    </MotionFlex>
  );
}
