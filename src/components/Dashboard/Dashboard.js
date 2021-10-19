import { Box } from "@chakra-ui/layout";
import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import Weathers from "../Weathers/Weathers";

export default function Dashboard() {
  return (
    <Box p="2em">
      <Searchbar />
      <Weathers />
    </Box>
  );
}
