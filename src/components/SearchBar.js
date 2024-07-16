import React, { useState } from "react";
import {
  Box,
  Select,
  Button,
  Flex,
  Text,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [passengers, setPassengers] = useState("1 Adult, Economy");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [tripType, setTripType] = useState("oneway"); // oneway or return
  const { isOpen: isDepartureOpen, onToggle: onDepartureToggle } =
    useDisclosure();
  const { isOpen: isReturnOpen, onToggle: onReturnToggle } = useDisclosure();
  const [isPassengerDropdownOpen, setPassengerDropdownOpen] = useState(false);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  // List of cities
  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Jaipur",
    "Ahmedabad",
  ];

  // Handle change in 'From' city
  const handleFromChange = (selectedCity) => {
    setFrom(selectedCity);
    // Filter out the selected city from 'To' options
    setCitiesForTo(cities.filter((city) => city !== selectedCity));
  };

  // State for 'To' options
  const [citiesForTo, setCitiesForTo] = useState(cities);

  // Handle change in 'To' city
  const handleToChange = (selectedCity) => {
    setTo(selectedCity);
  };

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
    onDepartureToggle(); // Close the date picker after selecting a date
  };

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
    onReturnToggle(); // Close the date picker after selecting a date
  };

  const handleApplyPassengers = () => {
    setPassengers(
      `${adults} Adult${adults > 1 ? "s" : ""}, ${children} Child${
        children > 1 ? "ren" : ""
      }, ${cabinClass}`
    );
    setPassengerDropdownOpen(false);
  };

  const handleSubmit = () => {
    // Handle search submission logic here
    if (tripType === "oneway") {
      console.log(
        "Searching one way from",
        from,
        "to",
        to,
        "on",
        departureDate,
        "with",
        passengers
      );
    } else if (tripType === "return") {
      console.log(
        "Searching return from",
        from,
        "to",
        to,
        "departing on",
        departureDate,
        "and returning on",
        returnDate,
        "with",
        passengers
      );
    }

    // Reset inputs after submission
    setFrom("");
    setTo("");
    setDepartureDate(null);
    setReturnDate(null);
    // Reset 'To' options to include all cities
    setCitiesForTo(cities);
  };

  return (
    <Flex justifyContent="center" alignItems="flex-start" pt={40}>
      <Box
        width={{ base: "100%", sm: "80%", md: "70%", lg: "70%" }}
        pb={6}
        pt={4}
        borderWidth="1px"
        borderRadius="md"
        bg="white"
        boxShadow="md"
        zIndex="10"
        position="relative"
      >
        <Flex
          justify="center"
          mb={4}
          position="absolute"
          top="-20px"
          left="50%"
          transform="translateX(-50%)"
        >
          <Button
            onClick={() => setTripType("oneway")}
            mr={2}
            bg={tripType === "oneway" ? "teal.400" : "white"}
            color={tripType === "oneway" ? "white" : "gray.700"}
            _hover={{ bg: "teal.400", color: "white" }}
            borderRadius="full"
            boxShadow="md"
            px={6}
            py={2}
          >
            One Way
          </Button>
          <Button
            onClick={() => setTripType("return")}
            bg={tripType === "return" ? "teal.400" : "white"}
            color={tripType === "return" ? "white" : "gray.700"}
            _hover={{ bg: "teal.400", color: "white" }}
            borderRadius="full"
            boxShadow="md"
            px={6}
            py={2}
          >
            Return
          </Button>
        </Flex>
        <Box mt={8}>
          <Flex justify="center" mb={4} flexWrap="wrap">
            <Box
              w={{ base: "100%", sm: "45%" }}
              mr={{ base: 0, sm: 2 }}
              mb={{ base: 2, sm: 0 }}
              borderRadius="md"
              border="1px solid #E2E8F0"
              p={2}
              boxShadow="md"
              _focus={{ boxShadow: "0 0 0 3px teal" }}
            >
              <Flex alignItems="center">
                <FontAwesomeIcon icon={faPlaneDeparture} />
                <Select
                  placeholder="From"
                  value={from}
                  onChange={(e) => handleFromChange(e.target.value)}
                  border="none"
                  _focus={{ outline: "none", boxShadow: "none" }}
                  ml={2}
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </Select>
              </Flex>
            </Box>
            <Box
              w={{ base: "100%", sm: "45%" }}
              ml={{ base: 0, sm: 2 }}
              mb={{ base: 2, sm: 0 }}
              border="1px solid #E2E8F0"
              borderRadius="md"
              p={2}
              boxShadow="md"
              _focus={{ boxShadow: "0 0 0 3px teal" }}
            >
              <Flex alignItems="center">
                <FontAwesomeIcon icon={faPlaneArrival} />
                <Select
                  placeholder="To"
                  value={to}
                  onChange={(e) => handleToChange(e.target.value)}
                  border="none"
                  _focus={{ outline: "none", boxShadow: "none" }}
                  ml={2}
                >
                  {citiesForTo.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </Select>
              </Flex>
            </Box>
          </Flex>
          <Flex justify="center" mb={4} flexWrap="wrap">
            <Box
              w={{ base: "100%", sm: "45%" }}
              mr={{ base: 0, sm: 2 }}
              mb={{ base: 2, sm: 0 }}
              borderRadius="md"
              p={2}
              position="relative"
              cursor="pointer"
              boxShadow="md"
              _focus={{ boxShadow: "0 0 0 3px teal" }}
              border="1px solid #E2E8F0"
              display="flex"
              alignItems="center"
              onClick={onDepartureToggle}
            >
              <Text fontWeight="bold">Depart</Text>
              <Box ml={2} position="relative">
                <Text ml={1} fontSize="sm" color="gray.500">
                  {departureDate
                    ? departureDate.toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })
                    : "Add date"}
                </Text>
                {isDepartureOpen && (
                  <Box position="absolute" zIndex="9999">
                    <DatePicker
                      selected={departureDate}
                      onChange={handleDepartureDateChange}
                      onClickOutside={onDepartureToggle}
                      inline
                    />
                  </Box>
                )}
              </Box>
            </Box>
            {tripType === "return" && (
              <Box
                w={{ base: "100%", sm: "45%" }}
                ml={{ base: 0, sm: 2 }}
                mb={{ base: 2, sm: 0 }}
                borderRadius="md"
                p={2}
                position="relative"
                cursor="pointer"
                boxShadow="md"
                _focus={{ boxShadow: "0 0 0 3px teal" }}
                border="1px solid #E2E8F0"
                display="flex"
                alignItems="center"
                onClick={onReturnToggle}
              >
                <Text fontWeight="bold">Return</Text>
                <Box ml={2} position="relative">
                  <Text ml={1} fontSize="sm" color="gray.500">
                    {returnDate
                      ? returnDate.toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })
                      : "Add date"}
                  </Text>
                  {isReturnOpen && (
                    <Box position="absolute" zIndex="9999">
                      <DatePicker
                        selected={returnDate}
                        onChange={handleReturnDateChange}
                        onClickOutside={onReturnToggle}
                        inline
                      />
                    </Box>
                  )}
                </Box>
              </Box>
            )}
          </Flex>
          <Flex justify="center" mb={4}>
            <Box
              w={{ base: "100%", sm: "45%" }}
              mb={4}
              borderRadius="md"
              p={2}
              boxShadow="md"
              _focus={{ boxShadow: "0 0 0 3px teal" }}
              position="relative"
              cursor="pointer"
              border="1px solid #E2E8F0"
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={(e) => {
                e.stopPropagation();
                setPassengerDropdownOpen(!isPassengerDropdownOpen);
              }}
            >
              <Text>{passengers}</Text>
              {isPassengerDropdownOpen && (
                <Box
                  position="absolute"
                  top="100%"
                  left="0"
                  mt={2}
                  bg="white"
                  p={4}
                  borderRadius="15px"
                  boxShadow="md"
                  zIndex="9999"
                  width="100%"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Box mb={2}>
                    <Text mb={1}>Cabin class</Text>
                    <Select
                      value={cabinClass}
                      onChange={(e) => setCabinClass(e.target.value)}
                    >
                      <option value="Economy">Economy</option>
                      <option value="Business">Business</option>
                    </Select>
                  </Box>
                  <Box mb={2}>
                    <Text mb={1}>Adults (Aged 16+)</Text>
                    <Flex>
                      <Button
                        onClick={() => setAdults(adults > 1 ? adults - 1 : 1)}
                      >
                        -
                      </Button>
                      <Input
                        readOnly
                        value={adults}
                        textAlign="center"
                        mx={2}
                        width="50px"
                      />
                      <Button onClick={() => setAdults(adults + 1)}>+</Button>
                    </Flex>
                  </Box>
                  <Box mb={2}>
                    <Text mb={1}>Children (Aged 0-15)</Text>
                    <Flex>
                      <Button
                        onClick={() =>
                          setChildren(children > 0 ? children - 1 : 0)
                        }
                      >
                        -
                      </Button>
                      <Input
                        readOnly
                        value={children}
                        textAlign="center"
                        mx={2}
                        width="50px"
                      />
                      <Button onClick={() => setChildren(children + 1)}>
                        +
                      </Button>
                    </Flex>
                  </Box>
                  <Box mb={4}>
                    <Text fontSize="sm" color="gray.600">
                      Your age at time of travel must be valid for the age
                      category booked. Airlines have restrictions on under 18s
                      travelling alone.
                    </Text>

                    <Text fontSize="sm" color="gray.600" mt={2}>
                      Age limits and policies for travelling with children may
                      vary so please check with the airline before booking.
                    </Text>
                  </Box>
                  <Button
                    onClick={handleApplyPassengers}
                    bg="teal.400"
                    color="white"
                    _hover={{ bg: "teal.500" }}
                    width="100%"
                  >
                    Apply
                  </Button>
                </Box>
              )}
            </Box>
          </Flex>
          <Flex justify="center">
            <Button
              onClick={handleSubmit}
              bg="teal.400"
              color="white"
              _hover={{ bg: "teal.500" }}
              borderRadius="full"
              px={10}
              py={4}
            >
              Search
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default SearchBar;
