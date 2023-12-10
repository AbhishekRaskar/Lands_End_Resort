import { Box, Image, Badge, Text, Flex, Button } from "@chakra-ui/react";
import React from "react";

const DiningCard = ({ product }) => {
  const { name, description, price, image, capacity, amenities, category } =
    product;

  return (
    <Box
      p={5}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
    >
      <Image src={image} alt={name} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {category}
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          color={"#DC143C"}
          as="h4"
          lineHeight="tight"
        >
          {name}
        </Box>

        <Box>
          <Text color="gray.500" fontSize="sm">
            {description}
          </Text>
        </Box>

        {/* <Flex mt="2" alignItems="center"> */}
        <Text>Price : ${price}</Text>
        <Text color="gray.500" ml="2">
          Capacity: {capacity}
        </Text>
        {/* </Flex> */}

        <Flex mt="2">
          <Text>Amenities: {amenities.join(", ").toUpperCase()}</Text>
        </Flex>
      </Box>
      <br />
      <Button
        bg={"#DC143C"}
        color={"white"}
        _hover={{
          bg: "#DC143C",
        }}
      >
        Add To Cart
      </Button>
    </Box>
  );
};

export default DiningCard;
