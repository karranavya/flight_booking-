// src/components/Footer.js
import { Box, Text, Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="blue.600" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Text>&copy; 2024 Skychex</Text>
        <Flex>
          <Link href="#" mx={2}>
            Privacy
          </Link>
          <Link href="#" mx={2}>
            Terms
          </Link>
          <Link href="#" mx={2}>
            Sitemap
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
