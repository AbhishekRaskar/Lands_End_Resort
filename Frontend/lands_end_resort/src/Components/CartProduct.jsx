// CartProduct.js
import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  IconButton,
  useToast,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios";

const CartProduct = ({
  cartItem,
  onDelete,
  handleDecrease,
  handleIncrease,
  quantity
}) => {
  const toast = useToast();
  const { menu, userName, _id } = cartItem;

  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    try {
      console.log("Deleting item with ID:", menu._id);
      // Make a request to remove the item from the cart
      await axios.delete(
        `https://land-end-resort.onrender.com/carts/remove-from-cart/${menu._id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      // Trigger the onDelete prop to update the cart in the parent component
      onDelete(_id);

      // Show a success toast
      toast({
        position: "top",
        title: "Menu removed from cart",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log("Error removing menu from cart:", error);

      // Show an error toast
      toast({
        position: "top",
        title: "Error removing menu from cart",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="5"
      boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
    >
      {menu && (
        <>
          <Image src={menu.image} alt={menu.name} mb="4" />
          <Text fontWeight="bold" fontSize="lg" mb="2">
            {menu.name}
          </Text>
          {menu.category === "MENU" && (
            <Badge colorScheme="red" mb="2">
              {menu.category}
            </Badge>
          )}
          {menu.category === "DINING" && (
            <Badge colorScheme="teal" mb="2">
              {menu.category}
            </Badge>
          )}
          {menu.category === "DEALS" && (
            <Badge mb="2" colorScheme="blue" variant="outline">
              {menu.category}
            </Badge>
          )}
          {menu.category === "SPECIALS" && (
            <Badge colorScheme="purple" mb="2">
              {menu.category}
            </Badge>
          )}
          {menu.category === "EVENTS" && (
            <Badge colorScheme="green" mb="2">
              {menu.category}
            </Badge>
          )}
          <Text fontSize="sm" color="gray.500" mb="2">
            {menu.description}
          </Text>
          <Text fontSize="md" fontWeight="bold" mb="2">
            Price: ${menu.price.toFixed(2)}
          </Text>
          <br />
          {menu.category === "MENU" && (
            <Text fontSize="sm">
              Ingredients: {menu.ingredients?.join(", ").toUpperCase()}
            </Text>
          )}
          {menu.category === "DINING" && (
            <>
              <Text color={"gray.500"} fontSize="sm">
                Capacity: {menu.capacity} people
              </Text>
              <br />
              <Text fontSize="sm">
                Amenities: {menu.amenities?.join(", ").toUpperCase()}
              </Text>
            </>
          )}
          {menu.category === "DEALS" && (
            <>
              <Text fontSize="sm">
                Valid Days: {menu.valid_days?.join(", ")}
              </Text>
              <Text fontSize="sm">
                Discount Percentage: {menu.discount_percentage}%
              </Text>
            </>
          )}
          {menu.category === "SPECIALS" && (
            <Text fontSize="sm">Courses: {menu.courses?.join(", ")}</Text>
          )}
          {menu.category === "EVENTS" && (
            <>
              <Text fontSize="sm">
                Date: {new Date(menu.date).toLocaleDateString()}
              </Text>
              <Text fontSize="sm">Time: {menu.time}</Text>
              <Text fontSize="sm">Location: {menu.location}</Text>
            </>
          )}
          <br />
          <Text fontSize="sm" mb={2}>
            Quantity
          </Text>

          <HStack justifyContent="center" alignItems="center" spacing="2">
            <IconButton
              icon={<FaPlus />}
              aria-label="Increase Quantity"
              onClick={handleIncrease}
              colorScheme="green"
              size="sm"
            />
            <Text fontSize="sm">{quantity}</Text>
            <IconButton
              icon={<FaMinus />}
              aria-label="Decrease Quantity"
              onClick={handleDecrease}
              colorScheme="orange"
              size="sm"
            />
          </HStack>
        </>
      )}
      <br />
      {/* <Text fontSize="sm">User: {userName}</Text>
      <Text fontSize="sm">Item ID: {_id}</Text> */}
      <IconButton
        icon={<FaTrash />}
        aria-label="Delete"
        onClick={handleDelete}
        colorScheme="red"
        size="sm"
        mt="2"
      />
    </Box>
  );
};

export default CartProduct;
