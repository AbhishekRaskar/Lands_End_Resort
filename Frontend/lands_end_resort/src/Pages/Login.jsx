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
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/LoginReducer/action";

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email, password);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toast = useToast();

  const auth = useSelector((store) => store.LoginReducer.isAuth);
  const error = useSelector((store) => store.LoginReducer.isError);
  const token = useSelector((store) => store.LoginReducer.token);
  // console.log(auth);
  // console.log(error);
  // console.log(token);

  const onClose = () => {
    // You can handle modal close action here
    setIsOpen(false);
  };

  const handleLogin = async () => {
    const userData = {
      email,
      password,
    };

    try {
      // Dispatch login action and wait for the result
      const loginResponse = await dispatch(userLogin(userData));

      console.log("Login Response:", loginResponse);

      // Check if the login was successful based on the response
      if (loginResponse.success) {
        localStorage.setItem("token", loginResponse.payload);

        // If the email includes "@admin", navigate to "/admin"
        if (email.includes("@landsend.com")) {
          navigate("/admin");
        }

        // If login is successful, show success toast
        toast({
          position: "top",
          title: "Login successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        // Close the modal after successful login
        onClose();
      } else {
        // If login fails, show error toast
        toast({
          position: "top",
          title: "Login failed",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      // If there's an error, show error toast
      toast({
        position: "top",
        title: "Login failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading fontSize={"4xl"} color={"#DC143C"}>
            Member Login
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
                  onClick={handleLogin}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
            <br />
            <Text align={"center"} color={"black"}>
              New here? Join us!
              <Link
                to="/signup"
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
        <ModalFooter>
          {/* You can add additional footer content here */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Login;
