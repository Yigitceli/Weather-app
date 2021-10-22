import { SearchIcon } from "@chakra-ui/icons";
import { Box, Center } from "@chakra-ui/layout";
import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState("");
  const bg = useColorModeValue("#1a202c", "white");
  const color = useColorModeValue("white", "#1a202c");
  return (
    <Center>
      <InputGroup w={["100%", "80%", "60%", "40%"]}>
        <InputLeftElement children={<SearchIcon />} style={{ zIndex: 0 }} />
        <Input
          variant="filled"
          placeholder="City Name"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </InputGroup>
    </Center>
  );
}
