// EventCard component
import React from "react";
import { Box, Image, Badge, Text, Button, useToast } from "@chakra-ui/react";
import axios from "axios";

const EventCard = ({ eventData }) => {
  const toast = useToast();

  const {
    _id,
    name,
    description,
    price,
    image,
    date,
    time,
    location,
    category,
  } = eventData;

  // Function to handle "Add To Cart" button click
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
        // Event is already in the cart, show a toast
        toast({
          position: "top",
          title: "Event already in cart",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      } else {
        // Event is not in the cart, proceed to add it
        const addToCartResponse = await axios.post(
          `https://land-end-resort.onrender.com/carts/add-to-cart/${_id}`,
          {},
          {
            headers: {
              Authorization: userToken,
            },
          }
        );

        console.log("Event added to cart:", addToCartResponse.data.msg);
        console.log("Updated Cart:", addToCartResponse.data.cart);

        // Show a success toast
        toast({
          position: "top",
          title: "Event added to cart",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error adding Event to cart:", error);

      // Show an error toast
      toast({
        position: "top",
        title: "Error adding Event to cart",
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
        <Badge borderRadius="full" px="2" colorScheme="green">
          {category}
        </Badge>
        <Box
          mt="3"
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
          isTruncated
          fontSize="lg"
          color="#DC143C"
        >
          {name}
        </Box>

        <Text color="gray.600" fontSize="sm" mt="2">
          {description}
        </Text>

        <Box mt="4">
          <Text fontSize="xl" fontWeight="semibold" lineHeight="short">
            Fee: ${price}
          </Text>
          <Text color="gray.600" fontSize="sm" mt="1">
            Location: {location}
          </Text>
          <Text
            color="gray.600"
            fontSize="sm"
            fontWeight="semibold"
            letterSpacing="wide"
            mt="2"
          >
            Join us for an unforgettable evening on {date} at {time} under the
            stars!
          </Text>
        </Box>
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

export default EventCard;
