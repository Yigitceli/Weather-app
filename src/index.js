import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme, ColorModeScript } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./store/store";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />      
      <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
