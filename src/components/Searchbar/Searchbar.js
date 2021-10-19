import { SearchIcon } from "@chakra-ui/icons";
import { Box, Center } from "@chakra-ui/layout";
import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function Searchbar() {
  const bg = useColorModeValue("blue.900", "white");
  const color = useColorModeValue("white", "blue.900");
  return (
    <Center>
      <InputGroup w={["100%", '80%', "60%", "40%"]}>
        <InputLeftElement children={<SearchIcon />} />
        <Input variant="filled" placeholder="City Name" />
      </InputGroup>
    </Center>
  );
}
