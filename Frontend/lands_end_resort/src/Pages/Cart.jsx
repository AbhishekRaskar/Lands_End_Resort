import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import CartProduct from "../Components/CartProduct";

const Cart = () => {
  const [cartData, setCartData] = useState({ items: [] });
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    axios
      .get("https://land-end-resort.onrender.com/carts", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("Response:", response);
        setCartData(response.data.cart);
        calculateTotalAmount(response.data.cart);
      })
      .catch((error) => {
        console.log("Error fetching cart data:", error);
      });
  }, [quantity]);

  const handleDeleteItem = (itemId) => {
    // Save the current cart data before updating it
    const currentCartData = { ...cartData };

    setCartData((prevData) => ({
      ...prevData,
      items: prevData.items.filter((item) => item._id !== itemId),
    }));

    // Recalculate total amount after item deletion using the saved cart data
    calculateTotalAmount(currentCartData);
  };

  const calculateTotalAmount = (cart) => {
    const total = cart.items.reduce(
      (acc, item) => acc + item.menu.price * quantity,
      0
    );
    setTotalAmount(Number(total));
  };

  return (
    <Box w={"90%"} margin={"auto"} p={4}>
      <Heading fontWeight="bold" mb="2">
        Ready to&nbsp;
        <Text as="span" color="red">
          Order
        </Text>
      </Heading>
      <Text>Total Amount: ${Number(Math.ceil(totalAmount.toFixed(2)))}</Text>
      {cartData && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
          {cartData.items.map((cartItem) => (
            <CartProduct
              key={cartItem._id}
              cartItem={cartItem}
              onDelete={handleDeleteItem}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
              quantity={quantity}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Cart;
