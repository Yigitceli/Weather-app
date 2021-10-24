import {
  AbsoluteCenter,
  Box,
  Center,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneWeather } from "../../store/oneWeatcherSlice";
import TwinSpin from "react-cssfx-loading/lib/TwinSpin";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { motion } from "framer-motion";
import { Image } from "@chakra-ui/image";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import ImageSection from "../ImageSection/ImageSection";

const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionCenter = motion(Center);
const MotionText = motion(Text);
const MotionBox = motion(Box);

export default function SearchResult({ location }) {
  const city = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.oneWeather);
  const bg = useColorModeValue("#9fafca", "#1a202c");
  const bg2 = useColorModeValue("#1a202c", "#9fafca");

  useEffect(() => {
    const getWeather = async () => {
      dispatch(fetchOneWeather(city));
    };
    getWeather();
  }, [city, dispatch]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <MotionFlex
      w="100%"
      h="100%"
      p={["0em", "1.5em", "2em", "2em", "2em"]}
      flexDirection="column"
    >
      {isLoading ? (
        <MotionFlex
          w={["100%"]}
          h="100%"
          justifyContent="center"
          alignItems="center"
        >
          <TwinSpin width="10em" height="10em" color="tomato" />
        </MotionFlex>
      ) : (
        <MotionFlex flexDirection="column" h="100%">
          <MotionHeading
            color={bg2}
            w="100%"
            textAlign="center"
            fontSize="5xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {data.location.name}
          </MotionHeading>
          <MotionFlex
            bg={bg2}
            w="100%"
            alignItems='space-between'
            justifyContent='center'
            rounded="xl"
            boxShadow="dark-lg"
            flexWrap="wrap"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {/*IMAGE SECTIONStarts*/}
            <ImageSection data={data} />

            {/*IMAGE SECTION Ends*/}
            <GeneralInfo data={data} />
          </MotionFlex>
          {/*<MotionFlex
            bg={bg2}
            w="100%"
            my="2em"
            rounded="xl"
            boxShadow="dark-lg"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          ></MotionFlex>*/}
        </MotionFlex>
      )}
    </MotionFlex>
  );
}
