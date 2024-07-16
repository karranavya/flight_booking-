// src/theme.js

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        fontFamily: "'Raleway', sans-serif", // Change to Raleway font
      },
    },
  },
  fonts: {
    heading: "'Raleway', sans-serif", // Change heading font to Raleway
    body: "'Raleway', sans-serif", // Change body font to Raleway
  },
});

export default theme;
