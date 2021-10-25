import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Weathers/Weathers.css";

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

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

export default function WeatherBoxAnimated({ weathers, pathname, setIsOpen }) {
  const [city] = useState(
    weathers.find((item) => item.location.name === pathname)
  );
  const bg = useColorModeValue("#1a202c", "#9fafca");
  const bg2 = useColorModeValue("#9fafca", "#1a202c");

  return (
    <>
      <Link to={"/"} className="animation-container" w='100%'>
        <MotionBox
          bg={bg}
          className="weather-box"
          layoutId={pathname}
          m="0"
          w={["370px", "500px", "500px", "500px", "500px"]}
        >
          <MotionBox className="weather-box-content">
            <MotionBox
              className="box-header"
              d="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <MotionImage src={city.current.condition.icon} />
              <MotionText color={bg2} fontSize="2xl">
                {city.current.condition.text}
              </MotionText>
            </MotionBox>
            <MotionBox color={bg2}>
              <MotionHeading fontSize="30px">
                {city.location.name}
              </MotionHeading>
            </MotionBox>
            <MotionBox
              d="flex"
              justifyContent="space-around"
              alignItems="center"
              py="1em"
            >
              <MotionBox color={bg2}>
                <MotionText>Temperature</MotionText>
                <MotionText>
                  {city.current.temp_c}
                  &#176;C
                </MotionText>
              </MotionBox>
              <MotionBox color={bg2}>
                <MotionText>Temperature Felt</MotionText>
                <MotionText>
                  {city.current.feelslike_c}
                  &#176;C
                </MotionText>
              </MotionBox>
            </MotionBox>
          </MotionBox>
          <MotionText
            borderTop="1px solid"
            color={bg2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          ></MotionText>

          <MotionBox
            className="open"
            rounded="xl"
            w={["370px", "500px", "500px", "500px", "500px"]}
            bg={bg}
            initial={{ y: -100 }}
            exit={{ y: -100 }}
            animate={{ y: -25, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {city.forecast.forecastday.map((item, index) => (
              <MotionBox m="0" key={index} w="100px" h="100px">
                <MotionBox d="flex" justifyContent="center">
                  <MotionImage src={item.day.condition.icon} />
                </MotionBox>
                <MotionText color={bg2}>{epochToDay(item.date)}</MotionText>
              </MotionBox>
            ))}
          </MotionBox>
        </MotionBox>
      </Link>
    </>
  );
}
