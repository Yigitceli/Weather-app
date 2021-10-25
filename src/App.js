import Header from "./components/Header/Header";

import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { Box } from "@chakra-ui/layout";

export default function App() {
  return (
    <Box className="App">
      <Header />
      <Dashboard />
    </Box>
  );
}
