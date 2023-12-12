// SpecialsCard component
import React from "react";
import { Box, Badge, Image, Text, Button, useToast } from "@chakra-ui/react";
import axios from "axios";

const SpecialsCard = ({ menuItem }) => {
  const { _id, name, description, price, image, courses, category } = menuItem;

  const toast = useToast();
  const handleAddToCart = async () => {
    const userToken = localStorage.getItem("token");

    if (!userToken) {
      console.error("User not authenticated. Please log in.");
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
        // Specials menu item is already in the cart, show a toast
        toast({
          position: "top",
          title: "Specials item already in cart",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      } else {
        // Specials menu item is not in the cart, proceed to add it
        const addToCartResponse = await axios.post(
          `https://land-end-resort.onrender.com/carts/add-to-cart/${_id}`,
          {},
          {
            headers: {
              Authorization: userToken,
            },
          }
        );

        console.log("Specials added to cart:", addToCartResponse.data.msg);
        console.log("Updated Cart:", addToCartResponse.data.cart);

        // Show a success toast
        toast({
          position: "top",
          title: "Specials added to cart",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error adding Specials to cart:", error);

      // Show an error toast
      toast({
        position: "top",
        title: "Error adding Specials to cart",
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
        onClick={handleAddToCart}
      >
        Add To Cart
      </Button>
    </Box>
  );
};

export default SpecialsCard;
