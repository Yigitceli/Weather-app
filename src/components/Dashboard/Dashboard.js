import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import {  AnimateSharedLayout } from "framer-motion";
import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import Weathers from "../Weathers/Weathers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResult from "../SearchResult/SearchResult";

export default function Dashboard() {
  const bg = useColorModeValue("#9fafca", "#1a202c");
  return (
    <Box
      p={["0.5em", "1em", "1em", "1.5em", "1.5em"]}
      bg={bg}
      w="100%"
      h="100%"
    >
      <Router>
        <Searchbar />
        <AnimateSharedLayout type="crossfade">
          <Switch>
            <Route exact path="/search/:cityName" component={SearchResult} />
            <Route exact path={["/:index", "/"]} component={Weathers} />
          </Switch>
        </AnimateSharedLayout>
      </Router>
    </Box>
  );
}
