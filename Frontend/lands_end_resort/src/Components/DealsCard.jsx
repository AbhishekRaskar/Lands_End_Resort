import { Box, Image, Badge, Text, Button } from "@chakra-ui/react";
import React from "react";

const DealsCard = ({ product }) => {
  const { name, description, price, image, valid_days } = product;

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
      >
        Add To Cart
      </Button>
    </Box>
  );
};

export default DealsCard;
