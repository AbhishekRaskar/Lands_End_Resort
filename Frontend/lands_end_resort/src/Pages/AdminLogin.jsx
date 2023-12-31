import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const AdminLogin = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleAdminLogin = async () => {
    const adminData = {
      email,
      password,
    };

    try {
      const adminLoginResponse = await axios.post(
        "https://land-end-resort.onrender.com/admin/admin-login",
        adminData
      );
      console.log(adminLoginResponse, "adminLoginResponse");
      if (adminLoginResponse.status === 200) {
        localStorage.setItem("adminToken", adminLoginResponse.data.token);
        navigate("/admin");
        toast({
          position: "top",
          title: "Admin Login successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose();
      } else {
        toast({
          position: "top",
          title: "Admin Login failed",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error during admin login:", error);
      toast({
        position: "top",
        title: "Admin Login failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  // console.log("ABHI")
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading fontSize={"4xl"} color={"#DC143C"}>
            Admin Login
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box rounded={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel color={"black"}>Email address</FormLabel>
                <Input
                  type="email"
                  color={"#DC143C"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel color={"black"}>Password</FormLabel>
                <Input
                  type="password"
                  color={"#DC143C"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox color={"black"}>Remember me</Checkbox>
                  <Link
                    style={{
                      textDecoration: "none",
                      textDecorationColor: "#DC143C",
                      color: "#DC143C",
                    }}
                  >
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  size={"lg"}
                  bg={"#DC143C"}
                  color={"white"}
                  _hover={{
                    bg: "#DC143C",
                  }}
                  onClick={handleAdminLogin}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
            <br />
            <Text align={"center"} color={"black"}>
              New here? Join us!
              <Link
                to="/admin-signup"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#DC143C",
                  color: "#DC143C",
                }}
              >
                <br />
                SignUp
              </Link>
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter>{/* Add additional footer content here */}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AdminLogin;
