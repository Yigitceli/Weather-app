import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import { fetchWeathers } from "./store/weatherSlice";

import "./App.css";
import Searchbar from "./components/Searchbar";
import Dashboard from "./components/Dashboard";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeathers());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}
