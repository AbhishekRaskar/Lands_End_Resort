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
import { FiHome, FiList, FiEdit2, FiUsers, FiUserPlus } from "react-icons/fi";
import Logo from "../Images/Logo2.png";
import { FaUserCircle } from "react-icons/fa";
import AdminList from "../Pages/AdminList";
import AdminDashboard from "../Pages/AdminDashboard";
import AdminRegister from "../Pages/AdminRegister";
import AdminItemList from "./AdminItemList";
import AdminAddItem from "./AdminAddItem";
import AuthModal from "./AuthModal";

const AdminSidebar = () => {
  // State variables
  const [activePage, setActivePage] = useState("dashboard");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalType, setAuthModalType] = useState("login");

  // Function to handle page toggling
  const handleTogglePage = (page) => {
    setActivePage(page);
  };

  // Effect to check for admin token on mount
  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken) {
      setIsAuthModalOpen(true);
    } else {
      handleTogglePage("dashboard");
    }
  }, []);

  // Function to close the auth modal
  const handleAuthModalClose = () => {
    setIsAuthModalOpen(false);
  };

  // Function to open the auth modal with a specific type (login/register)
  const handleToggleAuthModal = (type) => {
    setAuthModalType(type);
    setIsAuthModalOpen(true);
  };

  const handleLogout = () => {
    console.log("hIIIIIIIIIIIIIIIIIIIIIII");
    // Clear localStorage
    localStorage.removeItem("adminToken");

    // Navigate to home page
    window.location.href = "/";
  };
  // JSX structure of the component
  return (
    <div style={{ position: "relative" }}>
      <Flex>
        {/* Sidebar */}
        <Box bg="white" width="25%" height="100vh" position="fixed">
          <Box width="55%" margin="auto">
            <Image src={Logo} alt="Logo" width={220} />
          </Box>

          <VStack p="10">
            {/* Home button */}
            <VStack width="90%">
              <Button
                bg="white"
                width="100%"
                onClick={() => handleTogglePage("dashboard")}
                leftIcon={<FiHome />}
                // Highlight the Home button if on the dashboard page
                color={activePage === "dashboard" ? "#DC143C" : "black"}
              >
                Home
              </Button>
            </VStack>

            {/* Items List and Add New Item buttons */}
            <VStack width="90%">
              <Button
                bg="white"
                width="100%"
                onClick={() => handleTogglePage("showItem")}
                leftIcon={<FiList />}
                // Highlight the Items List button if on the showItem page
                color={activePage === "showItem" ? "#DC143C" : "black"}
              >
                Items List
              </Button>

              <Button
                bg="white"
                width="100%"
                onClick={() => handleTogglePage("addItem")}
                leftIcon={<FiEdit2 />}
                // Highlight the Add New Item button if on the addItem page
                color={activePage === "addItem" ? "#DC143C" : "black"}
              >
                Add New Item
              </Button>
            </VStack>

            {/* Admins and Register Admins buttons */}
            <VStack width="90%">
              <Button
                bg="white"
                width="100%"
                onClick={() => handleTogglePage("adminList")}
                leftIcon={<FiUsers />}
                // Highlight the Admins button if on the adminList page
                color={activePage === "adminList" ? "#DC143C" : "black"}
              >
                Admins
              </Button>

              <Button
                bg="white"
                width="100%"
                onClick={() => handleTogglePage("newAdmin")}
                leftIcon={<FiUserPlus />}
                // Highlight the Register Admins button if on the newAdmin page
                color={activePage === "newAdmin" ? "#DC143C" : "black"}
              >
                Register Admins
              </Button>
            </VStack>
          </VStack>
        </Box>

        {/* Main Content */}
        <Box width="70%" position={"absolute"} top="10%" right="2.5%" mt="90px">
          {activePage === "dashboard" && <AdminDashboard />}
          {activePage === "adminList" && <AdminList />}
          {activePage === "newAdmin" && <AdminRegister />}
          {activePage === "showItem" && <AdminItemList />}
          {activePage === "addItem" && <AdminAddItem />}
        </Box>

        {/* Auth Modal */}
        {isAuthModalOpen && (
          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={handleAuthModalClose}
            type={authModalType}
          />
        )}

        {/* Footer */}
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
              <MenuGroup>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </div>
  );
};

export default AdminSidebar;
