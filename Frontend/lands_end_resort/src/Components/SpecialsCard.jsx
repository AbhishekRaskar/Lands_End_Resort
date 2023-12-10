import { Box, Badge, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

const SpecialsCard = ({ menuItem }) => {
  const { name, description, price, image, courses, category } = menuItem;

  return (
    <Box
      p={5}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image src={image} alt={name} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="purple">
            {category}
          </Badge>
        </Box>

        <Text
          mt="2"
          fontWeight="semibold"
          fontSize="xl"
          color={"#DC143C"}
          lineHeight="short"
        >
          {name}
        </Text>
        <Text ml="2" textTransform="uppercase" fontSize="sm" color="gray.500">
          {courses && courses.length > 0 ? courses.join(", ") : ""}
        </Text>
        <Text mt="2">{description}</Text>

        <Text mt="2" fontWeight="bold" fontSize="xl">
          Price : ${price.toFixed(2)}
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
  );
};

export default SpecialsCard;
