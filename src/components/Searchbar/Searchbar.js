import { SearchIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/layout";
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,

} from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router";

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState("");



  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/search/${searchValue}`);
    setSearchValue("");
  };

  return (
    <Center>
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
    </Center>
  );
}
