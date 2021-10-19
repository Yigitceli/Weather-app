import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Center,
  Text,
  useColorMode,
  IconButton,
  useColorModeValue
} from "@chakra-ui/react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", 'blue.900')
  return (
    <Flex
      padding="2em"
      w="100%"
      h="150px"
      bg="tomato"
      justifyContent={"space-between"}
    >
      <Box w="65%" textAlign="end">
        <Text fontSize="6xl"> Weather App</Text>
      </Box>
      <Center>
        <IconButton bg={bg} w='5em'
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon w='5em'/> : <SunIcon  w='5em'/>}
        ></IconButton>
      </Center>
    </Flex>
  );
}
