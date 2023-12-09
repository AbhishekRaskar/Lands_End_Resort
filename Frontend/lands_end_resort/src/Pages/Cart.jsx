import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import CartProduct from "../Components/CartProduct"; // Adjust the path based on your project structure

const Cart = () => {
  const [cartData, setCartData] = useState({ items: [] });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Navigate to login page if token is not present
      // Adjust the route based on your application structure
      window.location.href = "/login";
      return;
    }

    // Fetch cart data if the token is present
    axios
      .get("https://land-end-resort.onrender.com/carts", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("Response:", response);
        setCartData(response.data.cart); // Update to access cart data properly
      })
      .catch((error) => {
        console.log("Error fetching cart data:", error);
        // Handle errors as needed
      });
  }, []);

  return (
    <Box>
      <Heading mb="4">Cart PAGE</Heading>
      {cartData && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
          {cartData.items.map((cartItem) => (
            <CartProduct key={cartItem._id} cartItem={cartItem} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Cart;
