import React, { useState } from "react";
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
  ModalFooter,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SignupFormModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // Close the modal after form submission
    setIsOpen(false);
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
              <Text textAlign= "center">
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
        <ModalFooter>
          {/* You can add additional footer content here */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignupFormModal;
