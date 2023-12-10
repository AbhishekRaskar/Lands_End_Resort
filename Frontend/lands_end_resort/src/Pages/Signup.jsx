import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
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
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../Redux/RegisterReducer/action";

const Signup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    age: "",
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
      const response = await dispatch(userSignup(formData));
      console.log("Server response:", response);

      // Check if the registration was successful
      if (response.success) {
        setIsOpen(false);
        window.location.href = "/login"; // Navigate to the login page
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const onClose = () => {
    // You can handle modal close action here
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading fontSize={"4xl"} textAlign={"left"} color={"#DC143C"}>
            Become a Member
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
                <FormControl id="gender" isRequired>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select the Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    {/* Add other gender options as needed */}
                  </Select>
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
                <FormControl id="age" isRequired>
                  <FormLabel>Age</FormLabel>
                  <Input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </FormControl>
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
                  to="/login"
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

export default Signup;
