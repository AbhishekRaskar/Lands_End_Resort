// DiningCard component
import React from "react";
import {
  Box,
  Image,
  Badge,
  Text,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const DiningCard = ({ product }) => {
  const {
    _id,
    name,
    description,
    price,
    image,
    capacity,
    amenities,
    category,
  } = product;

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
        // Dining item is already in the cart, show a toast
        toast({
          position: "top",
          title: "Dining item already in cart",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      } else {
        // Dining item is not in the cart, proceed to add it
        const addToCartResponse = await axios.post(
          `https://land-end-resort.onrender.com/carts/add-to-cart/${_id}`,
          {},
          {
            headers: {
              Authorization: userToken,
            },
          }
        );

        console.log("Dining added to cart:", addToCartResponse.data.msg);
        console.log("Updated Cart:", addToCartResponse.data.cart);

        // Show a success toast
        toast({
          position: "top",
          title: "Dining added to cart",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error adding Dining to cart:", error);

      // Show an error toast
      toast({
        position: "top",
        title: "Error adding Dining to cart",
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

        <Flex mt="2">
          <Text>Price: ${price}</Text>
          <Text color="gray.500" ml="2">
            Capacity: {capacity}
          </Text>
        </Flex>

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
        onClick={handleAddToCart}
      >
        Add To Cart
      </Button>
    </Box>
  );
};

export default DiningCard;
