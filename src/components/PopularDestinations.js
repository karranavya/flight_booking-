import React, { useState } from "react";
import { Box, Text, SimpleGrid, Image } from "@chakra-ui/react";

const destinations = [
  {
    city: "Mumbai",
    state: "Maharashtra",
    price: "₹5,000",
    image: "/images/mumbai.jpg",
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
    price: "₹4,000",
    image: "/images/chennai.jpg",
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    price: "₹3,000",
    image: "/images/hyderabad.jpg",
  },
  {
    city: "Jaipur",
    state: "Rajasthan",
    price: "₹5,500",
    image: "/images/jaipur.jpg",
  },
];

function PopularDestinations() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Box
      py={8}
      maxW="1200px"
      mx="auto"
      my={{ base: 8, md: 12 }}
      px={{ base: 4, md: 8 }}
      fontFamily="Raleway, sans-serif"
      textAlign="center"
    >
      <Text fontSize="4xl" mb={4} textAlign="center" fontWeight="bold">
        Popular right now
      </Text>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
        {destinations.map((dest, index) => (
          <Box
            key={dest.city}
            textAlign="center"
            p={0}
            borderWidth="1px"
            borderRadius="10px"
            overflow="hidden"
            shadow="md"
            transition="transform 0.3s, box-shadow 0.3s"
            transform={hoveredIndex === index ? "scale(1.05)" : "scale(1)"}
            boxShadow={hoveredIndex === index ? "lg" : "md"}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            mb={6}
          >
            <Box position="relative">
              <Image
                src={dest.image}
                alt={dest.city}
                w="100%"
                h={{ base: "180px", md: "250px" }}
                objectFit="cover"
              />
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bgGradient="linear(to-t, rgba(0, 0, 0, 1.2), rgba(0, 0, 0, 0))"
                p={4}
              >
                <Text fontSize="lg" fontWeight="bold" color="white">
                  {dest.city}
                </Text>
                <Text fontSize="md" color="gray.300">
                  {dest.state}
                </Text>
                <Text fontSize="lg" fontWeight="bold" color="white">
                  {dest.price}
                </Text>
                <Text fontSize="sm" color="gray.300">
                  Starting at
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default PopularDestinations;
