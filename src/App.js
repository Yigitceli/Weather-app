import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import { fetchWeathers } from "./store/weatherSlice";

import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import Dashboard from "./components/Dashboard/Dashboard";

export default function App() {
  
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}
