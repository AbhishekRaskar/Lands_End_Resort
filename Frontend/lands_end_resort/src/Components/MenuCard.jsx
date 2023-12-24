// MenuCard component
import React from "react";
import { Box, Image, Text, Badge, Button, useToast } from "@chakra-ui/react";
import axios from "axios";

const MenuCard = ({ product }) => {
  const toast = useToast();

  const {
    _id,
    name,
    description,
    price,
    image,
    ingredients = [],
    category,
  } = product;

  const badgeColor = "#D32F2F";

  const handleAddToCart = async () => {
    const userToken = localStorage.getItem("token");

    if (!userToken) {
      console.error("Please log in.");
      toast({
        position: "top",
        title:
          "Uh-oh! It seems you're not logged in. Time to log in and explore!",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const isInCartResponse = await axios.get(
        `https://land-end-resort.onrender.com/carts/check/${_id}`,
        {
          headers: {
            Authorization: userToken,
          },
        }
      );

      if (isInCartResponse.data.isInCart) {
        // Product is already in the cart, show a toast
        toast({
          position: "top",
          title: "Menu already in cart",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      } else {
        // Product is not in the cart, proceed to add it
        const addToCartResponse = await axios.post(
          `https://land-end-resort.onrender.com/carts/add-to-cart/${_id}`,
          {},
          {
            headers: {
              Authorization: userToken,
            },
          }
        );

        console.log("Product added to cart:", addToCartResponse.data.msg);
        console.log("Updated Cart:", addToCartResponse.data.cart);

        // Show a success toast
        toast({
          position: "top",
          title: "Menu added to cart",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error adding Menu to cart:", error);

      // Show an error toast
      toast({
        position: "top",
        title: "Error adding Menu to cart",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
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
          onClick={handleAddToCart}
        >
          Add To Cart
        </Button>
      </Box>
    </Box>
  );
};

export default MenuCard;
