import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Weathers/Weathers.css";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

export default function WeatherBoxAnimated({ index, weathers, pathname }) {
  const [city, setCity] = useState(
    weathers.find((item) => item.location.name == pathname)
  );
  const bg = useColorModeValue("#1a202c", "#9fafca");
  const bg2 = useColorModeValue("#9fafca", "#1a202c");

  return (
    <>
      <Link to={"/"}>
        <MotionBox className="animation-container">
          <MotionBox bg={bg} className="weather-box" layoutId={pathname}>
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
              <MotionText
                mt="1em"
                borderTop="1px solid"
                color={bg2}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              ></MotionText>
            </MotionBox>

            <MotionBox
              className="open"
              bg={bg}
              initial={{ y: -100 }}
              exit={{ y: -100 }}
              animate={{ y: -20 }}
              transition={{ duration: 0.3 }}
            ></MotionBox>
          </MotionBox>
        </MotionBox>
      </Link>
    </>
  );
}
