import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DiningCard from "../Components/DiningCard";

const Dining = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://land-end-resort.onrender.com/menus")
      .then((res) => res.json())
      .then((menu) => {
        const filteredMenu = menu.menu.filter(
          (item) => item.category === "DINING"
        );
        setData(filteredMenu);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box w={"90%"} margin={"auto"} p={4}>
      {/* <Heading fontWeight="bold" mb="2">
        Featured Items
      </Heading>
      <br /> */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {data.map((product) => (
          <DiningCard key={product._id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Dining;
