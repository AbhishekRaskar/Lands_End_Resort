import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Flex,
  Image,
} from "@chakra-ui/react";

const commonDescription = `
  The project journey was characterized by a continuous cycle of
  inspiration, motivation, and accomplishment. The collective
  effort and dedication of the team propelled us forward, creating
  a momentum that drove us to new heights.
`;

const AdminList = () => {
  const [adminsData, setAdminsData] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch data from the server
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://land-end-resort.onrender.com/admin"
        );
        const data = await response.json();
        setAdminsData(data.admin);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

  return (
    <Box bg="gray.100">
      <Container maxW="7xl" py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align="center">
          <Heading>Admins</Heading>
          <br />
          <Text>
            We have been working together as Team collaboration is the
            cornerstone of building team synergy, because collaborative teams
            work together to brainstorm new ideas, share knowledge, and complete
            ambitious projects.
          </Text>
        </Stack>
        <Stack
          padding="40px"
          direction={{ base: "column", md: "column" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {adminsData.map((admin, index) => (
            <Box
              boxShadow=" rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
              key={index}
            >
              <Stack
                bg="white"
                boxShadow="lg"
                p={8}
                rounded="xl"
                align="center"
                pos="relative"
                _after={{
                  content: `""`,
                  w: 0,
                  h: 0,
                  borderLeft: "solid transparent",
                  borderLeftWidth: 16,
                  borderRight: "solid transparent",
                  borderRightWidth: 16,
                  borderTop: "solid",
                  borderTopWidth: 16,
                  borderTopColor: "white",
                  pos: "absolute",
                  bottom: "-16px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Heading
                  as="h3"
                  fontSize="xl"
                  _hover={{ color: "rgb(15,115,217)" }}
                >
                  Admin - {index + 1}
                </Heading>

                <Flex align="center" mt={8} direction="column">
                  <Image
                    src={admin.img}
                    alt={admin.name}
                    mb={2}
                    borderRadius={"50%"}
                    w={"40%"}
                  />
                  <Text fontWeight={600} fontSize={30}>
                    {admin.name}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Full Stack Web Developer
                  </Text>
                  <br />
                  <Text textAlign="center" color="gray.600" fontSize="sm">
                    {commonDescription}
                  </Text>
                </Flex>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default AdminList;
