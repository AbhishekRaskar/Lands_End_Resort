import { Box, Heading, SimpleGrid, Text, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MenuCard from "../Components/MenuCard";

const Menu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch("https://land-end-resort.onrender.com/menus")
      .then((res) => res.json())
      .then((menu) => {
        const filteredMenu = menu.menu.filter(
          (item) => item.category === "MENU"
        );
        setData(filteredMenu);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  };
  // console.log("DADADDDDD", data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box w={"90%"} margin={"auto"} p={4}>
      <Heading fontWeight="bold" mb="2">
        Our&nbsp;
        <Text as="span" color="red">
          Menus
        </Text>
      </Heading>
      <br />
      {loading ? (
        <Spinner size="xl" color="#DC143C" />
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
          {data.map((product) => (
            <MenuCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Menu;
