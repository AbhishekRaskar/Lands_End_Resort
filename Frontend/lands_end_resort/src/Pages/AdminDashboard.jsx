import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Doughnut, Line } from "react-chartjs-2";
import axios from "axios";
import {
  ArcElement,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const AdminDashboard = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://land-end-resort.onrender.com/menus")
      .then((response) => {
        console.log("response", response.data.menu);
        setCategoriesData(response.data.menu);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const categoryCounts = {};

  if (categoriesData && Array.isArray(categoriesData)) {
    for (const item of categoriesData) {
      const category = item.category;
      if (categoryCounts[category]) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }
    }
  } else {
    console.error(
      "Data required is not available or not in the expected format."
    );
  }

  const donChartCategories = {
    labels: ["MENU", "DINING", "DEALS", "SPECIALS", "EVENTS"],
    datasets: [
      {
        label: "# of Items",
        data: [
          categoryCounts["MENU"] || 0,
          categoryCounts["DINING"] || 0,
          categoryCounts["DEALS"] || 0,
          categoryCounts["SPECIALS"] || 0,
          categoryCounts["EVENTS"] || 0,
        ],
        backgroundColor: [
          "#AB47BC",
          "#EF5350",
          "#26C6DA",
          "#5C6BC0",
          "#26A69A",
        ],
        borderColor: [
          // "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          "#AB47BC",
          "#EF5350",
          "#26C6DA",
          "#5C6BC0",
          "#26A69A",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Flex justifyContent="space-evenly">
        {donChartCategories && (
          <Box width="45%">
            <Doughnut data={donChartCategories} />
            <br />
            <Text fontWeight="bold" fontSize={"30px"}>
              Categories Data
            </Text>
          </Box>
        )}

        
      </Flex>

    
    </>
  );
};

export default AdminDashboard;
