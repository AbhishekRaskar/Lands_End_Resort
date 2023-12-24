// DealsCard component
import React from "react";
import { Box, Image, Badge, Text, Button, useToast } from "@chakra-ui/react";
import axios from "axios";

const DealsCard = ({ product }) => {
  const { _id, name, description, price, image, valid_days } = product;
  const toast = useToast();

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
        // Deals item is already in the cart, show a toast
        toast({
          position: "top",
          title: "Deals item already in cart",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      } else {
        // Deals item is not in the cart, proceed to add it
        const addToCartResponse = await axios.post(
          `https://land-end-resort.onrender.com/carts/add-to-cart/${_id}`,
          {},
          {
            headers: {
              Authorization: userToken,
            },
          }
        );

        console.log("Deals added to cart:", addToCartResponse.data.msg);
        console.log("Updated Cart:", addToCartResponse.data.cart);

        // Show a success toast
        toast({
          position: "top",
          title: "Deals added to cart",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error adding Deals to cart:", error);

      // Show an error toast
      toast({
        position: "top",
        title: "Error adding Deals to cart",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      p={5}
      maxW={"sm"}
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
      margin={"auto"}
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
    >
      <Image src={image} alt={name} objectFit="cover" />

      <Box p="4">
        <Badge
          borderRadius="full"
          px="2"
          colorScheme="blue"
          mb="2"
          variant="outline"
        >
          DEALS
        </Badge>

        <Text fontWeight="semibold" color={"#DC143C"} fontSize="lg" mb="2">
          {name}
        </Text>

        <Text color="gray.600" fontSize="sm" mb="2">
          {description}
        </Text>

        {valid_days && (
          <Text color="gray.500" fontSize="sm" mb="4">
            Valid Days: {valid_days.join(", ")}
          </Text>
        )}

        <Text fontWeight="semibold" fontSize="lg" mr="2">
          Just For : ${price}
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

export default DealsCard;
