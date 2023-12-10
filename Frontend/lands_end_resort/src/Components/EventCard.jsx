import { Box, Image, Badge, Text, Stack, Button } from "@chakra-ui/react";

const EventCard = ({ eventData }) => {
  if (!eventData) {
    return null;
  }

  const { name, description, price, image, date, time, location, category } =
    eventData;

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
        >
          Add To Cart
        </Button>
    </Box>
  );
};

export default EventCard;
