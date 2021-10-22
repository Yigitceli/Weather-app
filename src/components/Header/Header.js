import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  useColorMode,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#1a202c");
  return (
    <Flex
      w="100%"
      h="150px"
      bg="tomato"
      justifyContent={"space-between"}
      alignItems="center"
      p="5"
    >
      <Text size="lg" fontSize="50px">
        Weather App
      </Text>

      <IconButton
        bg={bg}
        w="8em"
        onClick={toggleColorMode}
        icon={
          colorMode === "light" ? <MoonIcon w="5em" /> : <SunIcon w="5em" />
        }
      ></IconButton>
    </Flex>
  );
}
