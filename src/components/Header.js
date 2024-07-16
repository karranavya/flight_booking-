import { Box, Flex, Button, Image, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="blue.100" p={4} color="white" position="relative" zIndex={1}>
      <Image
        src="/images/logo.jpg"
        alt="Airplane"
        width="155%"
        height="835%"
        objectFit="cover"
        position="absolute"
        top={0}
        left={0}
      />
      <Flex
        justify={["center", "space-between"]} // Center on mobile, space between on larger screens
        align="center"
        zIndex={2}
        position="absolute"
        top={2}
        left={4} // Adjust the left position for AeroBook
        right={4} // Adjust the right position for buttons
        width="auto"
        flexDirection={["column", "row"]} // Stack items on mobile, align in row on larger screens
        textAlign={["center", "left"]} // Center text on mobile, align left on larger screens
      >
        <Box textAlign={["center", "left"]}>
          <Text
            fontSize={["4xl", "7xl"]}
            fontWeight="bold"
            color="white"
            zIndex={3}
          >
            AeroBook
          </Text>
          <Text fontSize={["md", "lg"]} color="white" zIndex={3}>
            Travel far, travel wide, travel without regrets.
          </Text>
        </Box>
        <Flex mt={[4, 0]} ml={[0, 3]}>
          <Button
            colorScheme="teal"
            size="sm"
            me={[0, 3]}
            mb={[3, 0]}
            boxShadow="md"
            _focus={{ boxShadow: "0 0 0 2px teal" }}
          >
            Sign Up
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            boxShadow="md"
            _focus={{ boxShadow: "0 0 0 2px teal" }}
          >
            Log In
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
