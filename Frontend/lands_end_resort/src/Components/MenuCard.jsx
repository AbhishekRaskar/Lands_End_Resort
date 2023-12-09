// MenuCard component
import React from "react";
import { Box, Image, Text, Badge, Button } from "@chakra-ui/react";

const MenuCard = ({ product }) => {
  const {
    name,
    description,
    price,
    image,
    ingredients = [],
    category,
  } = product;

  const badgeColor = "#D32F2F"; // Color code for the badge

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;"
    >
      <Image src={image} alt={name} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" color="white" bg={badgeColor}>
            {category}
          </Badge>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {name}
        </Box>

        <Text color="gray.600" fontSize="sm">
          {description}
        </Text>
        <br />
        <Box>
          <Text>
            Ingredients: &nbsp;
            {ingredients.map((ingredient, index) => (
              <Badge
                key={index}
                borderRadius="full"
                px="2"
                color="white"
                bg={badgeColor}
                mr="2"
              >
                {ingredient}
              </Badge>
            ))}
          </Text>
        </Box>

        <Box>
          <Text mt="2" color="gray.600" fontSize="sm">
            ${price.toFixed(2)}
          </Text>
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
    </Box>
  );
};

export default MenuCard;
