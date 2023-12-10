// MenuCard component
import React from "react";
import { Box, Image, Text, Badge, Button } from "@chakra-ui/react";
import axios from "axios"; // Import axios for making HTTP requests

const MenuCard = ({ product }) => {
  console.log("Product:", product);
  const {
    _id, // Add id to the destructuring assignment
    name,
    description,
    price,
    image,
    ingredients = [],
    category,
  } = product;

  const badgeColor = "#D32F2F"; // Color code for the badge

  // Function to handle "Add To Cart" button click
  const handleAddToCart = () => {
    // console.log("Product ID:", id);
    // Retrieve the user token from local storage
    const userToken = localStorage.getItem("token");
    console.log(userToken);

    // Make sure the user is authenticated before making the request
    if (!userToken) {
      console.error("User not authenticated. Please log in.");
      // You might want to redirect the user to the login page or show a login modal
      return;
    }

    // Make a request to the specified URL with the product ID and user token
    axios
      .post(
        `https://land-end-resort.onrender.com/carts/add-to-cart/${_id}`,
        {},
        {
          headers: {
            Authorization: userToken,
          },
        }
      )
      .then((response) => {
        // Handle success if needed
        console.log("Product added to cart:", response.data.msg);
        console.log("Updated Cart:", response.data.cart);
      })
      .catch((error) => {
        // Handle error if needed
        console.error("Error adding product to cart:", error);
      });
  };

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
            Price: ${price.toFixed(2)}
          </Text>
        </Box>
        <br />
        <Button
          bg={"#DC143C"}
          color={"white"}
          _hover={{
            bg: "#DC143C",
          }}
          onClick={handleAddToCart} // Attach the click handler
        >
          Add To Cart
        </Button>
      </Box>
    </Box>
  );
};

export default MenuCard;
