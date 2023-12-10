// Specials.js
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SpecialsCard from "../Components/SpecialsCard";

const Specials = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch("https://land-end-resort.onrender.com/menus")
      .then((res) => res.json())
      .then((menu) => {
        const filteredMenu = menu.menu.filter(
          (item) => item.category === "SPECIALS"
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
        Special&nbsp;
        <Text as="span" color="red">
          Menu&nbsp;
        </Text>
        Items
      </Heading>
      <br />
      {loading ? (
        <Spinner size="xl" color="#DC143C" />
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
          {data.map((product) => (
            <SpecialsCard key={product._id} menuItem={product} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Specials;
