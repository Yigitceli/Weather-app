import { Box } from "@chakra-ui/layout";
import React from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";

export default function Dashboard() {
  return (
    <Box p='2em'>      
      <Searchbar />
    </Box>
  );
}
