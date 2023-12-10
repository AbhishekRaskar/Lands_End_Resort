// CartProduct.js
import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const CartProduct = ({ cartItem }) => {
  const { menu, userName, _id } = cartItem;

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
      {menu && (
        <>
          <Image src={menu.image} alt={menu.name} mb="4" />
          <Text fontWeight="bold" fontSize="lg" mb="2">
            {menu.name}
          </Text>
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
        </>
      )}
      <Text fontSize="sm">User: {userName}</Text>
      <Text fontSize="sm">Item ID: {_id}</Text>
    </Box>
  );
};

export default CartProduct;
