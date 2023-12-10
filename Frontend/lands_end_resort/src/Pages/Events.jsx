// Events.js
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";

const Events = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch("https://land-end-resort.onrender.com/menus")
      .then((res) => res.json())
      .then((menu) => {
        const filteredMenu = menu.menu.filter(
          (item) => item.category === "EVENTS"
        );
        setData(filteredMenu);
        setLoading(false); // Set loading to false once data is fetched
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box w={"90%"} margin={"auto"} p={4}>
      <Heading fontWeight="bold" mb="2">
        Upcoming&nbsp;
        <Text as="span" color="red">
          Events
        </Text>
      </Heading>
      <br />
      {loading ? (
         <Spinner size="xl" color="#DC143C" />
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
          {data.map((product) => (
            <EventCard key={product._id} eventData={product} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Events;
