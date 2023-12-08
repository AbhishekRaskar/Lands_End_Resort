import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "../CSS/Homepage.css";
const Homepage = () => {
  const boxStyles = {
    textAlign: "center",
    transition: "transform 0.3s", // Adding a smooth transition effect
    _hover: {
      transform: "scale(1.05)", // Increasing size on hover
    },
  };

  const commonTextStyle = {
    fontFamily: "'Gill Sans', sans-serif", // Replace with your preferred font
  };

  return (
    <>
      {/* first */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h={"90vh"}
        bgImage={"https://images6.alphacoders.com/369/thumb-1920-369399.jpg"}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        p={4} // Add padding for better spacing
      >
        <Heading
          size={"3xl"}
          // bg="rgba(255, 255, 255, 0.2)"
          textAlign="center"
          color="#DC143C"
          fontWeight={"bold"}
          style={commonTextStyle}
        >
          LANDS END RESORT
        </Heading>
        <Heading
          size="md"
          textTransform="uppercase"
          bg="rgba(255, 255, 255, 0.2)"
          mt={2}
          textAlign="center"
          color="#DC143C"
          fontWeight={"bold"}
          style={commonTextStyle}
        >
          Discover the best Foods & Hotels here
        </Heading>
        <br />
        <Flex alignItems="center" gap={5}>
          <Input
            type="text"
            focusBorderColor="rgba(0, 0, 0, 0.8)"
            _placeholder={{ color: "rgba(0, 0, 0, 0.8)" }}
            width={"100%"} // Adjusted width for better visibility
            bg="rgba(255, 255, 255, 0.2)"
            placeholder="Search for dishes or events"
            style={commonTextStyle}
            // marginRight={2} // Added margin-right for space between input and button
          />
          <Button
            bg={"#DC143C"}
            color={"white"}
            _hover={{
              bg: "#DC143C",
            }}
          >
            Search
          </Button>
        </Flex>
      </Box>
      <br />
      {/* second */}
      <Box w={"70%"} margin={"auto"}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          alignContent={"center"}
          spacing={4}
          p={4}
        >
          <Box {...boxStyles}>
            <Image
              borderTopRadius={15}
              w={"100%"}
              h={"60%"}
              src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              alt="Order Online"
            />
            <Text
              mt={2}
              fontWeight="bold"
              fontSize={"20px"}
              style={commonTextStyle}
            >
              Order Online
            </Text>
            <Text fontSize="sm" color="gray.500" style={commonTextStyle}>
              Stay home and order to your doorstep
            </Text>
          </Box>

          <Box {...boxStyles}>
            <Image
              borderTopRadius={15}
              w={"100%"}
              h={"60%"}
              src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              alt="Dining"
            />
            <Text
              mt={2}
              fontWeight="bold"
              fontSize={"20px"}
              style={commonTextStyle}
            >
              Dining
            </Text>
            <Text fontSize="sm" color="gray.500" style={commonTextStyle}>
              View the city's favourite dining venues
            </Text>
          </Box>

          <Box {...boxStyles}>
            <Image
              borderTopRadius={15}
              w={"100%"}
              h={"60%"}
              src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              alt="Nightlife and Clubs"
            />
            <Text
              mt={2}
              fontWeight="bold"
              fontSize={"20px"}
              style={commonTextStyle}
            >
              Nightlife and Clubs
            </Text>
            <Text fontSize="sm" color="gray.500" style={commonTextStyle}>
              Explore the city's top night outlets
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      {/* third */}
      <Box w={"80%"} margin={"auto"}>
        <Heading mb={2} textAlign={"left"}>
          Collections
        </Heading>
        <Text fontSize="lg" mb={3} textAlign={"left"}>
          Explore curated lists of top restaurants, events, dining, and
          specials, based on trends
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
          <Box position="relative">
            <Image
              src="https://wallup.net/wp-content/uploads/2019/09/761372-restaurant-food-architecture-interior-design-room.jpg"
              alt="Explore Restaurants"
              w="100%"
              h="350px"
              borderRadius="md"
            />
            <Text
              position="absolute"
              bottom={4}
              left={4}
              color="white"
              fontWeight="bold"
              fontSize="lg"
            >
              Explore Restaurants
            </Text>
          </Box>

          <Box position="relative">
            <Image
              src="https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-311,4677-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/MAR/MAR_360_original.jpg"
              alt="Explore Events"
              w="100%"
              h="350px"
              borderRadius="md"
            />
            <Text
              position="absolute"
              bottom={4}
              left={4}
              color="white"
              fontWeight="bold"
              fontSize="lg"
            >
              Explore Events
            </Text>
          </Box>

          <Box position="relative">
            <Image
              src="https://www.posist.com/restaurant-times/wp-content/uploads/2020/01/buffet.jpg"
              alt="Explore Dining"
              w="100%"
              h="350px"
              borderRadius="md"
            />
            <Text
              position="absolute"
              bottom={4}
              left={4}
              color="white"
              fontWeight="bold"
              fontSize="lg"
            >
              Explore Dining
            </Text>
          </Box>

          <Box position="relative">
            <Image
              src="https://bizimages.withfloats.com/tile/60facabd47deb200018d3a13.jpg"
              alt="Explore Specials"
              w="100%"
              h="350px"
              borderRadius="md"
            />
            <Text
              position="absolute"
              bottom={4}
              left={4}
              color="white"
              fontWeight="bold"
              fontSize="lg"
            >
              Explore Specials
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <br />
      <br />
      {/* fourth */}
      <Box w={"80%"} margin={"auto"}>
        <Heading mb={2} textAlign={"left"}>
          Inspiration for your first order
        </Heading>
        <br />
        <SimpleGrid columns={{ sm: 2, md: 4, lg: 6 }} spacing={4}>
          <Center flexDirection="column" textAlign="center">
            <Box>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
              />
              <Text fontSize="xl">Thali</Text>
            </Box>
          </Center>
          <Center flexDirection="column" textAlign="center">
            <Box>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
              />
              <Text fontSize="xl">Biryani</Text>
            </Box>
          </Center>
          <Center flexDirection="column" textAlign="center">
            <Box>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
              />
              <Text fontSize="xl">Pizza</Text>
            </Box>
          </Center>
          <Center flexDirection="column" textAlign="center">
            <Box>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
              />
              <Text fontSize="xl">Burger</Text>
            </Box>
          </Center>
          <Center flexDirection="column" textAlign="center">
            <Box>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
              />
              <Text fontSize="xl">Chicken</Text>
            </Box>
          </Center>
          <Center flexDirection="column" textAlign="center">
            <Box>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
              />
              <Text fontSize="xl">North Indian</Text>
            </Box>
          </Center>
        </SimpleGrid>
      </Box>
      <br />
      <br />
      {/* fifth */}
      <Box w={"80%"} margin={"auto"}>
        <Heading mb={2} textAlign={"left"}>
          Inspiration for your first order
        </Heading>
        <br />
        <SimpleGrid columns={{ sm: 2, md: 4, lg: 6 }} spacing={4}>
          <Center flexDirection="column" textAlign="center">
            <Box>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/f8eeab5b2de60c8b2f19c9d1015e32f9_1617972403.png?output-format=webp"
              />
              <Text fontSize="lg">Sagar Gaire Fast Food</Text>
              <Text color={"gray.500"} fontSize="lg">
                17 min
              </Text>
            </Box>
          </Center>
          <Center flexDirection="column" textAlign="center">
            <Box>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/aaa86c706fe235dd78dec0dd32d43d6b_1550745886.png?output-format=webp"
              />
              <Text fontSize="lg">Sharma And Vishnu Fast Food</Text>
              <Text color={"gray.500"} fontSize="lg">
                20 min
              </Text>
            </Box>
          </Center>
          <Center flexDirection="column" textAlign="center">
            <Box>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/304f7e8f12ed82f7aa1e23f076a43e65_1617972508.png?output-format=webp"
              />
              <Text fontSize="lg">Manohar Dairy And Restaurant</Text>
              <Text color={"gray.500"} fontSize="lg">
                20 min
              </Text>
            </Box>
          </Center>
          <Center flexDirection="column" textAlign="center">
            <Box>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187753.png?output-format=webp"
              />
              <Text fontSize="lg">Burger King</Text>
              <Text color={"gray.500"} fontSize="lg">
                44 min
              </Text>
            </Box>
          </Center>
          <Center flexDirection="column" textAlign="center">
            <Box>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/36a794295319f643d4ec60fd74773639_1618410875.png?output-format=webp"
              />
              <Text fontSize="lg">Bake N Shake</Text>
              <Text color={"gray.500"} fontSize="lg">
                15 min
              </Text>
            </Box>
          </Center>
          <Center flexDirection="column" textAlign="center">
            <Box>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp"
              />
              <Text fontSize="lg">Pizza Hut</Text>
              <Text color={"gray.500"} fontSize="lg">
                47 min
              </Text>
            </Box>
          </Center>
        </SimpleGrid>
      </Box>
      <br />
      <br />
      <br />
      {/* sixth */}
      <Box w={"70%"} margin={"auto"}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={0}>
          <Box>
            <Image
              w={{ sm: "80%", md: "90%", lg: "80%" }}
              src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
            />
          </Box>
          <Box>
            <Heading textAlign={"left"} mb={3}>
              Get the Lands End Hotel & Resort app
            </Heading>
            <Text textAlign={"left"} mb={3}>
              We will send you a link, open it on your phone to download the app
            </Text>
            <Flex alignItems="center">
              <Input
                focusBorderColor="#DC143C"
                placeholder="Email"
                flex="1"
                marginRight="2"
                borderColor="#CBD5E0" // Set a color for the normal outline
                borderWidth="1px" // Set a width for the normal outline
              />
              <Button
                bg={"#DC143C"}
                textColor={"white"}
                _hover={{
                  bg: "#DC143C",
                }}
              >
                Share App Link
              </Button>
            </Flex>
            <br />
            <Text textAlign={"left"} mb={3}>
              Download app from
            </Text>
            <Flex gap={10}>
              <Image
                w={"30%"}
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
              />
              <Image
                w={"30%"}
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
              />
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
      {/* seventh */}
      <Box w={"70%"} margin={"auto"}>
        <Heading textAlign={"left"} mb={3}>
          Explore options near me
        </Heading>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionButton
              bg="gray.200"
              _hover={{ bg: "#D32F2F" }}
              borderRadius="md"
              p={2}
              w="100%"
            >
              <Text flex="1" fontSize="xl" textAlign="left">
                Popular cuisines near me
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} bg="white" borderRadius="md" p={4}>
              <Flex direction="row" flexWrap="wrap">
                <Text as="span" color={"gray.500"} mr={2}>
                  Bakery food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Beverages food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Biryani food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Burger food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Chinese food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Coffee food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Desserts food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Ice Cream food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Kebab food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Momos food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Mughlai food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  North Indian food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Pasta food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Pizza food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Rolls food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Sandwich food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Shake food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  South Indian food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Street food
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Tea food
                </Text>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <br />
          <AccordionItem>
            <AccordionButton
              bg="gray.200"
              _hover={{ bg: "#D32F2F" }}
              borderRadius="md"
              p={2}
              w="100%"
            >
              <Text flex="1" fontSize="xl" textAlign="left">
                Top Restaurant Chains
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} bg="white" borderRadius="md" p={4}>
              <Flex direction="row" flexWrap="wrap">
                <Text as="span" color={"gray.500"} mr={2}>
                  Burger King
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Burger Singh
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  Dunkin' Donuts
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  KFC
                </Text>
                <Text as="span" color={"gray.500"} mr={2}>
                  McDonald's
                </Text>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <br />
          <AccordionItem>
            <AccordionButton
              bg="gray.200"
              _hover={{ bg: "#D32F2F" }}
              borderRadius="md"
              p={2}
              w="100%"
            >
              <Text flex="1" fontSize="xl" textAlign="left">
                Cities
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} bg="white" borderRadius="md" p={4}>
              <Flex direction="row" flexWrap="wrap">
                <Text as="span" mr={2} color={"gray.500"}>
                  Delhi NCR
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Kolkata
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Mumbai
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Bengaluru
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Pune
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Hyderabad
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Chennai
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Lucknow
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Kochi
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Jaipur
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Ahmedabad
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Chandigarh
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Goa
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Indore
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Gangtok
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Nashik
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Ooty
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Shimla
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Ludhiana
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Guwahati
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Amritsar
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Kanpur
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Allahabad
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Aurangabad
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Bhopal
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Ranchi
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Visakhapatnam
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Bhubaneswar
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Coimbatore
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Mangalore
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Vadodara
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Nagpur
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Agra
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Dehradun
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Mysore
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Puducherry
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Surat
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Varanasi
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Patna
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Udaipur
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Srinagar
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Khajuraho
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Neemrana
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Cuttack
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Trivandrum
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Haridwar
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Leh
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Pushkar
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Rajkot
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Madurai
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Kozhikode
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Alappuzha
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Thrissur
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Manipal
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Vijayawada
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Jodhpur
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Kota
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Ajmer
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Mussoorie
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Rishikesh
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Jalandhar
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Jammu
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Manali
                </Text>
                <Text as="span" mr={2} color={"gray.500"}>
                  Dharamshala
                </Text>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default Homepage;
