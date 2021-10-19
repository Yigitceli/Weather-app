import { Flex, Box } from "@chakra-ui/layout";

import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeathers } from "../../store/weatherSlice";
import "./Weathers.css";
const MotionBox = motion(Box);
export default function Weathers() {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const weathers = useSelector((state) => state.weathers.data);
  useEffect(() => {
    dispatch(fetchWeathers());
  }, [dispatch]);

  useEffect(() => {
    console.log(weathers);
  }, [weathers]);
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      <AnimateSharedLayout type="crossfade" className="container">
        {weathers.map((element, index) => (
          <motion.div
            key={index + 1}
            layoutId={index + 1}
            className="test"
            onClick={() => setSelectedIndex(index + 1)}
          ></motion.div>
        ))}

        <AnimatePresence>
          {selectedIndex && (
            <div
              className="test2-container"
              onClick={() => setSelectedIndex(null)}
            >
              <motion.div
                className="test2"
                layoutId={selectedIndex}
              ></motion.div>
            </div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Flex>
  );
}
