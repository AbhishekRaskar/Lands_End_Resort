import { Box, Flex, Image, Spacer, IconButton, Text } from "@chakra-ui/react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import React from "react";
import Logo from "../Images/Logo2.png";

const AdminNav = () => {
  return (
    <Box
      w={"90%"}
      m={"auto"}
      boxShadow="md"
      py="3"
      px="4"
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Flex align="center" justify="space-between" maxW="100%" mx="auto">
        <Image src={Logo} alt="Logo" width={220} />

        <Flex align="center" justify="space-between">
          <IconButton
            aria-label="Notifications"
            icon={<FaBell />}
            fontSize="25px"
            variant="ghost"
            color="#DC143C"
            mr="4"
          />
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="gray.700"
            _hover={{ color: "#DC143C" }}
            mr="4"
          >
            Admin 
          </Text>
          <IconButton
            aria-label="User"
            icon={<FaUserCircle />}
            fontSize="25px"
            variant="ghost"
            color="#DC143C"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default AdminNav;
