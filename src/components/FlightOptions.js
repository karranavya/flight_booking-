import { useState } from "react";
import { Box, Text, Flex, Button, Image, Stack } from "@chakra-ui/react";

const FlightOptions = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filter, setFilter] = useState("cheapest");

  const cheapestFlights = [
    {
      airline: "IndiGo",
      logo: "/images/indigo.png",
      flightNumber: "6E-5267",
      departureTime: "19:15",
      arrivalTime: "22:05",
      duration: "2h 50m",
      stops: "non-stop",
      price: "₹6,969",
      from: "Mumbai",
      to: "Hyderabad",
    },
    {
      airline: "IndiGo",
      logo: "/images/indigo.png",
      flightNumber: "6E-5349",
      departureTime: "21:30",
      arrivalTime: "00:20",
      duration: "2h 50m",
      stops: "non-stop",
      price: "₹6,969",
      from: "Mumbai",
      to: "Hyderabad",
    },
    {
      airline: "IndiGo",
      logo: "/images/indigo.png",
      flightNumber: "6E-5303",
      departureTime: "22:45",
      arrivalTime: "01:35",
      duration: "2h 50m",
      stops: "non-stop",
      price: "₹6,969",
      from: "Mumbai",
      to: "Hyderabad",
    },
    {
      airline: "IndiGo",
      logo: "/images/indigo.png",
      flightNumber: "6E-6406",
      departureTime: "20:30",
      arrivalTime: "23:30",
      duration: "3h 00m",
      stops: "non-stop",
      price: "₹6,969",
      from: "Mumbai",
      to: "Hyderabad",
    },
  ];

  const fastestFlights = [
    {
      airline: "SpiceJet",
      logo: "/images/spicejet.png",
      flightNumber: "SG-1023",
      departureTime: "18:00",
      arrivalTime: "20:30",
      duration: "2h 30m",
      stops: "non-stop",
      price: "₹7,500",
      from: "Mumbai",
      to: "Hyderabad",
    },
    {
      airline: "Air India",
      logo: "/images/airindia.png",
      flightNumber: "AI-401",
      departureTime: "19:00",
      arrivalTime: "21:30",
      duration: "2h 30m",
      stops: "non-stop",
      price: "₹7,800",
      from: "Mumbai",
      to: "Hyderabad",
    },
    {
      airline: "Vistara",
      logo: "/images/vistara.png",
      flightNumber: "UK-907",
      departureTime: "17:00",
      arrivalTime: "19:30",
      duration: "2h 30m",
      stops: "non-stop",
      price: "₹8,000",
      from: "Mumbai",
      to: "Hyderabad",
    },
    {
      airline: "GoAir",
      logo: "/images/goair.png",
      flightNumber: "G8-256",
      departureTime: "20:00",
      arrivalTime: "22:30",
      duration: "2h 30m",
      stops: "non-stop",
      price: "₹7,200",
      from: "Mumbai",
      to: "Hyderabad",
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const flights = filter === "cheapest" ? cheapestFlights : fastestFlights;

  return (
    <Box p={4}>
      <Stack direction="row" spacing={4} mb={6} ml={{ base: "0", md: "62px" }}>
        <Button
          colorScheme={filter === "cheapest" ? "teal" : "gray"}
          onClick={() => setFilter("cheapest")}
          size="sm"
        >
          Cheapest
        </Button>
        <Button
          colorScheme={filter === "fastest" ? "teal" : "gray"}
          onClick={() => setFilter("fastest")}
          size="sm"
        >
          Fastest
        </Button>
      </Stack>
      <Stack spacing={4}>
        {flights.map((flight, index) => (
          <Box
            key={index}
            textAlign="center"
            p={4}
            borderWidth="1px"
            borderRadius="10px"
            overflow="hidden"
            shadow="md"
            transition="transform 0.3s, box-shadow 0.3s"
            transform={hoveredIndex === index ? "scale(1.02)" : "scale(1)"}
            boxShadow={hoveredIndex === index ? "lg" : "md"}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              alignItems="center"
              bg="white"
              p={4}
              borderRadius="10px"
              flexWrap="wrap"
            >
              <Flex
                alignItems="center"
                mb={{ base: 4, md: 0 }}
                mr={{ base: 0, md: 4 }}
                flex={{ base: "1 1 100%", md: "1 1 auto" }}
                minWidth="150px"
              >
                <Image
                  borderRadius="md"
                  src={flight.logo}
                  boxSize="50px"
                  alt={`${flight.airline} logo`}
                  mr={4}
                />
                <Box textAlign="left">
                  <Text fontWeight="bold">{flight.airline}</Text>
                  <Text>{flight.flightNumber}</Text>
                  <Text color="teal.500" fontSize="sm">
                    Flight details
                  </Text>
                </Box>
              </Flex>
              <Flex
                direction="column"
                alignItems={{ base: "flex-start", md: "center" }}
                flex={{ base: "1 1 50%", md: "1 1 15%" }}
                mb={{ base: 4, md: 0 }}
              >
                <Text fontSize="2xl" fontWeight="bold">
                  {flight.departureTime}
                </Text>
                <Text textAlign="center" color="gray.500">
                  {flight.from}
                </Text>
              </Flex>
              <Flex
                direction="column"
                alignItems={{ base: "flex-start", md: "center" }}
                color="gray.500"
                flex={{ base: "1 1 50%", md: "1 1 15%" }}
                mb={{ base: 4, md: 0 }}
              >
                <Text>{flight.duration}</Text>
                <Text>{flight.stops}</Text>
              </Flex>
              <Flex
                direction="column"
                alignItems={{ base: "flex-start", md: "center" }}
                flex={{ base: "1 1 50%", md: "1 1 15%" }}
                mb={{ base: 4, md: 0 }}
              >
                <Text fontSize="2xl" fontWeight="bold">
                  {flight.arrivalTime}
                </Text>
                <Text textAlign="center" color="gray.500">
                  {flight.to}
                </Text>
              </Flex>
              <Flex
                direction="column"
                alignItems={{ base: "flex-start", md: "center" }}
                flex={{ base: "1 1 50%", md: "1 1 15%" }}
                mb={{ base: 4, md: 0 }}
              >
                <Text fontSize="2xl" fontWeight="bold" color="green.500">
                  {flight.price}
                </Text>
              </Flex>
              <Button
                bg="teal.400"
                color="white"
                flex={{ base: "1 1 100%", md: "1 1 auto" }}
                size="sm"
                ml={{ base: 0, md: 4 }}
              >
                Book
              </Button>
            </Flex>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default FlightOptions;
