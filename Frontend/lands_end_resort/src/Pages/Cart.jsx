import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Heading, SimpleGrid, Text, Button } from "@chakra-ui/react";
import CartProduct from "../Components/CartProduct";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartData, setCartData] = useState({ items: [] });
  const [quantities, setQuantities] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  const handleIncrease = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const handleDecrease = (itemId) => {
    if (quantities[itemId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
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
  }, [quantities]);

  const handleDeleteItem = (itemId) => {
    const currentQuantities = { ...quantities };
    delete currentQuantities[itemId];

    setQuantities(currentQuantities);

    const currentCartData = { ...cartData };

    setCartData((prevData) => ({
      ...prevData,
      items: prevData.items.filter((item) => item._id !== itemId),
    }));

    calculateTotalAmount(currentCartData);
  };

  const calculateTotalAmount = (cart) => {
    const total = cart.items.reduce(
      (acc, item) => acc + item.menu.price * (quantities[item._id] || 1),
      0
    );
    setTotalAmount(Number(total));
    // Save the updated total amount to localStorage
  };
  localStorage.setItem("totalAmount", JSON.stringify(Math.ceil(totalAmount)));

  // Check if the cart is empty
  const isCartEmpty = !cartData || cartData.items.length === 0;

  return (
    <Box w="90%" margin="auto" p={4}>
      {isCartEmpty ? (
        <Heading fontWeight="bold">
          Your cart is feeling a bit lonely.&nbsp;
          <Text as="span" color="red">
            Let's fill it up!
          </Text>
        </Heading>
      ) : (
        <Heading fontWeight="bold" mb="2">
          Ready to&nbsp;
          <Text as="span" color="red">
            Order
          </Text>
        </Heading>
      )}
      {!isCartEmpty && (
        <>
          <Text fontSize="xl" fontWeight="bold" mt={4}>
            Total&nbsp;
            <Text as="span" color="red">
              Amount:&nbsp;
            </Text>
            ${Number(Math.ceil(totalAmount.toFixed(2)))}
          </Text>
          <br />
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4} mt={4}>
            {cartData.items.map((cartItem) => (
              <CartProduct
                key={cartItem._id}
                cartItem={cartItem}
                onDelete={handleDeleteItem}
                handleDecrease={() => handleDecrease(cartItem._id)}
                handleIncrease={() => handleIncrease(cartItem._id)}
                quantity={quantities[cartItem._id] || 1}
              />
            ))}
          </SimpleGrid>
          <br />
          <br />
          <Button
            bg={"#DC143C"}
            color={"white"}
            _hover={{
              bg: "#DC143C",
            }}
            size="lg"
            mt={4}
            onClick={() => navigate("/payment")}
          >
            Proceed to Checkout
          </Button>
          <br />
        </>
      )}
    </Box>
  );
};

export default Cart;
