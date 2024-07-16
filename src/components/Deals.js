import React, { useState } from "react";
import { Box, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

const deals = [
  { city: "Delhi", price: 4000, image: "./images/delhi.jpg" },
  { city: "Mumbai", price: 5500, image: "./images/mumbai.jpg" },
  { city: "Bangalore", price: 6200, image: "./images/bangalore.jpg" },
  { city: "Chennai", price: 4800, image: "./images/chennai.jpg" },
  { city: "Kolkata", price: 5100, image: "./images/kolkata.jpg" },
  { city: "Hyderabad", price: 3500, image: "./images/hyderabad.jpg" },
  { city: "Pune", price: 7000, image: "./images/pune.jpg" },
  { city: "Ahmedabad", price: 3800, image: "./images/ahmedabad.jpg" },
  { city: "Jaipur", price: 4200, image: "./images/jaipur.jpg" },
  { city: "Kochi", price: 6000, image: "./images/kochi.jpg" },
  { city: "Goa", price: 4500, image: "./images/goa.jpg" },
  { city: "Lucknow", price: 4800, image: "./images/lucknow.jpg" },
  { city: "Chandigarh", price: 3700, image: "./images/chandigarh.jpg" },
  { city: "Indore", price: 5300, image: "./images/indore.jpg" },
  { city: "Guwahati", price: 4900, image: "./images/guwahati.jpg" },
];

const ExpandableBox = ({ city, price, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Flex
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      align="center"
      justify="space-between"
      p={4}
      bg={isHovered ? `url(${image})` : "gray.100"} // Background image on hover
      backgroundSize="cover"
      backgroundPosition="center"
      borderRadius="md"
      boxShadow={isHovered ? "lg" : "md"}
      color={isHovered ? "white" : "black"}
      fontWeight={isHovered ? "bold" : ""}
      transform={isHovered ? "scale(1.05)" : "scale(1)"}
      transition="all 0.3s"
      cursor="pointer"
      position="relative" // Ensure relative positioning for absolute overlay
      mb={2} // Added margin bottom for spacing between boxes
    >
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        height="20%"
        opacity={isHovered ? 1 : 0} // Show overlay on hover
        transition="opacity 0.3s"
        borderBottomLeftRadius="md"
        borderBottomRightRadius="md"
      />
      <Flex align="center">
        <FontAwesomeIcon icon={faPlaneDeparture} style={{ marginRight: 8 }} />
        <Text>{city}</Text>
      </Flex>
      <Text fontWeight="bold">₹ {price}</Text>
    </Flex>
  );
};

const DealsSection = () => {
  return (
    <Box
      py={8}
      maxW="1200px"
      mx="auto"
      px={{ base: 4, md: 8 }} // Added horizontal padding with breakpoints
      my={{ base: 8, md: 12 }} // Added vertical margin with breakpoints
    >
      <Text fontSize="4xl" mb={4} textAlign="center" fontWeight="bold">
        Great deals on plane tickets
      </Text>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 5 }} spacing={4}>
        {deals.map((deal, index) => (
          <ExpandableBox
            key={index}
            city={deal.city}
            price={deal.price}
            image={deal.image}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DealsSection;
