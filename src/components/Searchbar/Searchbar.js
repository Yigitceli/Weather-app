import { SearchIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Searchbar() {
  const bg = useColorModeValue("#1a202c", "#9fafca");
  const bg2 = useColorModeValue("#9fafca", "#1a202c");
  const [searchValue, setSearchValue] = useState("");
  const { colorMode } = useColorMode();

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/search/${searchValue}`);
    setSearchValue("");
  };

  return (
    <Flex flexDirection="column" alignItems="center">
      <Link to="/">
        <IconButton
          bg={bg}
          color={bg2}
          w="8em"
          icon={colorMode === "light" ? <AiOutlineHome /> : <AiFillHome />}
        ></IconButton>
      </Link>

      <FormControl w={["100%", "80%", "60%", "40%"]} py="1em">
        <form onSubmit={submitHandler}>
          <InputGroup>
            <InputLeftElement
              children={<SearchIcon type="submit" color={"tomato"} />}
              style={{ zIndex: 1 }}
            />
            <Input
              variant="filled"
              placeholder="Enter a City for Weather Data"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
          </InputGroup>
        </form>
      </FormControl>
    </Flex>
  );
}
