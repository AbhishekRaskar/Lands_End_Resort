import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  VStack,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  Image,
  IconButton,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiList,
  FiEdit2,
  FiUsers,
  FiUserPlus,
  FiMail,
  FiMessageSquare,
  FiFile,
} from "react-icons/fi";
import Logo from "../Images/Logo2.png";
import { FaBell, FaUserCircle } from "react-icons/fa";
import AdminList from "../Pages/AdminList";
import AdminDashboard from "../Pages/AdminDashboard";
import AdminRegister from "../Pages/AdminRegister";
import AdminItemList from "./AdminItemList";

const AdminSidebar = () => {
  const [showAdminList, setShowAdminList] = useState(true);
  const [showDashboard, setShowDashboard] = useState(true);
  const [showNewAdmin, setShowNewAdmin] = useState(true);
  const [showItem, setShowItem] = useState(true);

  useEffect(() => {
    handleToggleDashboard();
  }, []);

  const handleToggleAdminList = () => {
    setShowAdminList(true);
    setShowNewAdmin(false);
    setShowDashboard(false);
    setShowItem(false);
  };

  const handleToggleDashboard = () => {
    setShowDashboard(true);
    setShowAdminList(false);
    setShowNewAdmin(false);
    setShowItem(false);
  };

  const handleToggleNewAdmin = () => {
    setShowNewAdmin(true);
    setShowAdminList(false);
    setShowDashboard(false);
    setShowItem(false);
  };

  const handleToggleShowItem = () => {
    setShowItem(true);
    setShowAdminList(false);
    setShowNewAdmin(false);
    setShowDashboard(false);
  };
  return (
    <div style={{ position: "relative" }}>
      <Flex>
        <Box bg="white" width="25%" height="100vh" position="fixed">
          <Box width="55%" margin="auto">
            <Image src={Logo} alt="Logo" width={220} />
          </Box>

          <VStack p="10">
            <Text color="gray.500" width="90%">
              Dashboard
              <hr />
            </Text>

            <VStack width="90%">
              <Button
                bg="white"
                width="100%"
                onClick={handleToggleDashboard}
                leftIcon={<FiHome />}
              >
                Home
              </Button>
            </VStack>

            <Text color="gray.500" width="90%">
              All Menu
              <hr />
            </Text>
            <VStack width="90%">
              <Button
                bg="white"
                width="100%"
                onClick={handleToggleShowItem}
                leftIcon={<FiList />}
              >
                Items List
              </Button>

              <Button bg="white" width="100%" leftIcon={<FiEdit2 />}>
                Add New Item
              </Button>
            </VStack>

            <Text color="gray.500" width="90%">
              Admin Section
              <hr />
            </Text>
            <VStack width="90%">
              <Button
                bg="white"
                width="100%"
                onClick={handleToggleAdminList}
                leftIcon={<FiUsers />}
              >
                Admins
              </Button>

              <Button
                bg="white"
                width="100%"
                onClick={handleToggleNewAdmin}
                leftIcon={<FiUserPlus />}
              >
                Register Admins
              </Button>
            </VStack>

            <Text color="gray.500" width="90%">
              Connect
              <hr />
            </Text>

            <VStack width="90%">
              <Button bg="white" width="100%" leftIcon={<FiMail />}>
                Mail
              </Button>

              <Button bg="white" width="100%" leftIcon={<FiFile />}>
                Feedback
              </Button>
              <Button bg="white" width="100%" leftIcon={<FiMessageSquare />}>
                Messages
              </Button>
            </VStack>
          </VStack>
        </Box>

        <Box width="70%" position={"absolute"} top="10%" right="2.5%" mt="90px">
          {/* Render your components based on the route */}
          {showDashboard && <AdminDashboard />}
          {showAdminList && <AdminList />}
          {showNewAdmin && <AdminRegister />}
          {showItem && <AdminItemList />}
        </Box>

        <Flex
          bg="white"
          height="80px"
          pr="40px"
          alignItems="center"
          justifyContent="flex-end"
          width="75%"
          position="absolute"
          right="0%"
        >
          <Menu>
            <MenuButton as={Button} colorScheme="white">
              <Flex align="center" justify="space-between">
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
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>Admins</MenuItem>
                <MenuItem>Logout </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </div>
  );
};

export default AdminSidebar;