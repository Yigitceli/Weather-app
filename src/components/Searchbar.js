import { SearchIcon } from "@chakra-ui/icons";
import { Box, Center } from "@chakra-ui/layout";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

export default function Searchbar() {
  return (
    <Center>
      <InputGroup w="40%">
        <InputLeftElement children={<SearchIcon/>}/>
        <Input variant="filled" placeholder="City Name" />
      </InputGroup>
    </Center>
  );
}
