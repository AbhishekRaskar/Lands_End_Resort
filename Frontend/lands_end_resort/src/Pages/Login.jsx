import React, { useState } from "react";
import { Link } from "react-router-dom";
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
} from "@chakra-ui/react";

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    // You can handle modal close action here
    setIsOpen(false);
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
                <Input type="email" color={"#DC143C"} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel color={"black"}>Password</FormLabel>
                <Input type="password" color={"#DC143C"} />
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
