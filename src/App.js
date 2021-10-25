import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { Box } from "@chakra-ui/layout";

export default function App() {
  return (
    <Box className="App">
      <Router>
        <Header />
        <Dashboard />
      </Router>
    </Box>
  );
}
