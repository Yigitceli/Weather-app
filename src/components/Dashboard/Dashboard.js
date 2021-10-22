import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import Weathers from "../Weathers/Weathers";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Dashboard() {
  const bg = useColorModeValue("#9fafca", "#1a202c");
  return (
    <Box p="2em" bg={bg}>
      <Router>
        <Searchbar />
        <AnimateSharedLayout type="crossfade">
          <Route path={["/:index", "/"]} component={Weathers} />
        </AnimateSharedLayout>
      </Router>
    </Box>
  );
}
