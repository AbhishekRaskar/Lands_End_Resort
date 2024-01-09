// Navbar.js

import React from "react";
import {
  Box,
  Flex,
  Image,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  Text,
  Tooltip,
  Button,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import Logo from "../Images/Logo2.png";
import { AiOutlineUser } from "react-icons/ai";
import { MdLocalMall } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../Redux/LoginReducer/action";

const links = [
  { to: "/", name: "HOME" },
  { to: "/menus", name: "MENU" },
  { to: "/dinings", name: "DINING" },
  { to: "/deals", name: "DEALS" },
  { to: "/specials", name: "SPECIALS" },
  { to: "/events", name: "EVENTS" },
];

const active = { color: "#DC143C", textDecoration: "none" };
const deactive = { color: "black", textDecoration: "none" };

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const isAuth = useSelector((store) => store.LoginReducer.isAuth);

  const userName = useSelector((store) => store.LoginReducer.userName);
  // console.log(isAuth);


  const dispatch = useDispatch();

  const toast = useToast();

  const handleLogout = () => {
    // console.log("Logging out...");
    localStorage.clear();
    dispatch(userLogout());
    // console.log("Logout action dispatched.");
    toast({
      position: "top",
      title: "Logout Successful",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
    window.location.href = "/";
    // console.log("Navigating to /");
  };

  return (
    <Box>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={7}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <NavLink to={"/"}>
                <Image src={Logo} alt="Logo" width={230} />
              </NavLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={6}
              display={{ base: "none", lg: "flex" }}
            >
              {links.map((e) => (
                <NavLink
                  key={e.to}
                  to={e.to}
                  style={({ isActive }) => {
                    return isActive ? active : deactive;
                  }}
                >
                  {e.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Input
            focusBorderColor="#DC143C"
            placeholder="Search here"
            width={500}
          />
          <Box style={{ fontSize: "27px" }}>
            <Flex gap="50px" alignItems="center">
              <NavLink to="/cart">
                <MdLocalMall style={{ color: "black" }} />
              </NavLink>
              <Box>
                {isAuth ? (
                  <Tooltip label="Logout" aria-label="Logout">
                    <VStack spacing={2}>
                      <Text
                        fontSize={"lg"}
                        textDecoration="none"
                        color="#DC143C"
                        _hover={{ textDecoration: "underline" }}
                        cursor="pointer"
                      >
                        {userName}
                      </Text>
                      <NavLink to="/logout">
                        <Button
                          fontSize={"md"}
                          bg={"#DC143C"}
                          color={"white"}
                          _hover={{
                            bg: "#DC143C",
                          }}
                          cursor="pointer"
                          onClick={handleLogout}
                        >
                          Logout
                        </Button>
                      </NavLink>
                    </VStack>
                  </Tooltip>
                ) : (
                  <NavLink to="/login">
                    <AiOutlineUser />
                  </NavLink>
                )}
              </Box>
            </Flex>
          </Box>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((e) => (
                <NavLink key={e.to} to={e.to}>
                  {e.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Navbar;
