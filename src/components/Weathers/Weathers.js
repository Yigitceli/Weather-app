import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Flex, Box, Heading, Text } from "@chakra-ui/layout";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchWeathers } from "../../store/weathersSlice";
import WeatherBoxAnimated from "../WeatherBoxAnimated/WeatherBoxAnimated";
import "./Weathers.css";
import { useHistory, useLocation } from "react-router";
import { TwinSpin } from "react-cssfx-loading/lib";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionFlex = motion(Flex);

export default function Weathers({ match, location }) {
  const { pathname } = useLocation();

  const bg = useColorModeValue("#1a202c", "#9fafca");
  const bg2 = useColorModeValue("#9fafca", "#1a202c");

  const dispatch = useDispatch();
  const history = useHistory();

  const weathers = useSelector((state) => state.weathers.data);
  const isLoading = useSelector((state) => state.weathers.isLoading);

  useEffect(() => {
    dispatch(fetchWeathers());
  }, [dispatch]);

  useEffect(() => {
    history.push("/");
  }, [history]);

  return (
    <Flex justifyContent="center" bg={bg2}>
      {isLoading ? (
        <Flex w="100%" h="75vh" justifyContent="center" alignItems="center">
          <TwinSpin width="10em" height="10em" color="tomato" />
        </Flex>
      ) : (
        <MotionFlex flexWrap="wrap" justifyContent="center">
          {weathers.map((item, index) => (
            <Link to={`/${item.location.name}`} key={index} p="2em">
              <MotionBox
                className="weather-box"
                w={["370px", "500px", "500px", "500px", "500px"]}
                bg={bg}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                layoutId={item.location.name}
                whileHover={{ scale: 1.2 }}
              >
                <MotionBox className="weather-box-content">
                  <MotionBox
                    className="box-header"
                    d="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <MotionImage src={item.current.condition.icon} />
                    <MotionText color={bg2} fontSize="2xl">
                      {item.current.condition.text}
                    </MotionText>
                  </MotionBox>
                  <MotionBox
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    color={bg2}
                  >
                    <MotionHeading fontSize="30px">
                      {item.location.name}
                    </MotionHeading>
                  </MotionBox>
                  <MotionBox
                    d="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    py="1em"
                  >
                    <MotionBox
                      color={bg2}
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <MotionText>Temperature</MotionText>
                      <MotionText>{item.current.temp_c}&#176;C</MotionText>
                    </MotionBox>
                    <MotionBox
                      color={bg2}
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <MotionText>Temperature Felt</MotionText>
                      <MotionText>{item.current.feelslike_c}&#176;C</MotionText>
                    </MotionBox>
                  </MotionBox>
                </MotionBox>
              </MotionBox>
            </Link>
          ))}
        </MotionFlex>
      )}

      {!isLoading && (
        <AnimatePresence>
          {pathname.split("/")[1] && (
            <WeatherBoxAnimated
              pathname={pathname.split("/")[1]}
              weathers={weathers}
            />
          )}
        </AnimatePresence>
      )}
    </Flex>
  );
}
