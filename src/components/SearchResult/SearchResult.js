import { Flex, Heading } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneWeather } from "../../store/oneWeatcherSlice";
import TwinSpin from "react-cssfx-loading/lib/TwinSpin";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { motion } from "framer-motion";
import TopRow from "../Rows/TopRow";
import BottomRow from "../Rows/BottomRow";

const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);

export default function SearchResult({ location }) {
  const city = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.oneWeather);
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
    <MotionFlex w="100%" minH="120vh" flexDirection="column">
      {isLoading ? (
        <MotionFlex
          w="100%"
          minH="75vh"
          justifyContent="center"
          alignItems="center"
        >
          <TwinSpin width="10em" height="10em" color="tomato" />
        </MotionFlex>
      ) : (
        <>
          <MotionHeading
            textAlign="center"
            w="100%"
            fontSize="5xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {data.location.name}
          </MotionHeading>
          <MotionFlex
            py="2em"
            flexDirection="column"
            justifyContent="space-evenly"
            minH="140vh"
          >
            <TopRow data={data} bg={bg} bg2={bg2} />
            <BottomRow data={data} bg={bg} bg2={bg2} />
          </MotionFlex>
        </>
      )}
    </MotionFlex>
  );
}
