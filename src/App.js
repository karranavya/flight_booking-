// src/App.js
import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PopularDestinations from "./components/PopularDestinations";
import Deals from "./components/Deals";
import FlightOptions from "./components/FlightOptions";
import Footer from "./components/Footer";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "./theme"; // Import your Chakra UI theme here
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box>
        <Header />
        <SearchBar />
        <PopularDestinations />
        <Deals />
        <FlightOptions />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
