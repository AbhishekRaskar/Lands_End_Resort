import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  VStack,
  Box,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AdminSignup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    img: "",
    email: "",
    password: "",
    city: "",
    phone: "",
    role: "admin", // Set the role to "admin" for admin registration
  });

  console.log(formData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use axios.post directly without using useSelector
      const response = await axios.post(
        "https://land-end-resort.onrender.com/admin/admin-register",
        formData
      );

      console.log("Server response:", response);

      // Check if the registration was successful
      if (response.data.success) {
        setIsOpen(false);
        window.location.href = "/login"; // Navigate to the login page
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading fontSize={"4xl"} textAlign={"left"} color={"#DC143C"}>
            Admin Signup
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box w={"100%"} margin={"auto"} p={"20px"} borderRadius={"10px"}>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="stretch">
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="img" isRequired>
                  <FormLabel>Image URL</FormLabel>
                  <Input
                    type="text"
                    name="img"
                    value={formData.img}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="city" isRequired>
                  <FormLabel>City</FormLabel>
                  <Input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="phone" isRequired>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </FormControl>
                {/* Admins have a fixed role, so it's not selectable */}
                <Text>Role: Admin</Text>
                <Stack spacing={4} direction="row" justify="center">
                  <Button
                    type="submit"
                    size={"lg"}
                    w={"50%"}
                    bg={"#DC143C"}
                    color={"white"}
                    _hover={{
                      bg: "#DC143C",
                    }}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </VStack>
              <br />
              <Text textAlign="center">
                Already have an account?
                <br />
                <Link
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#DC143C",
                    color: "#DC143C",
                  }}
                  to="/admin-login"
                >
                  Login
                </Link>
              </Text>
            </form>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
    
  );
};

export default AdminSignup;
