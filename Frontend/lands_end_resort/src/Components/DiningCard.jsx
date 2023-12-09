import { Box, Image, Badge, Text, Flex } from "@chakra-ui/react";
import React from "react";

const DiningCard = ({ product }) => {
  const { name, description, price, image, capacity, amenities, category } =
    product;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={name} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {category}
          </Badge>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {name}
        </Box>

        <Box>
          <Text color="gray.500" fontSize="sm">
            {description}
          </Text>
        </Box>

        <Flex mt="2" alignItems="center">
          <Text>${price}</Text>&nbsp;&nbsp;&nbsp;
          <Text color="gray.500" ml="2">
            Capacity: {capacity}
          </Text>
        </Flex>

        <Flex mt="2">
          <Text>Amenities: {amenities.join(", ").toUpperCase()}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default DiningCard;
