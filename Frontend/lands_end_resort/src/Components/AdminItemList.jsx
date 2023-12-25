import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Badge,
  Image,
  VStack,
  Button,
  CircularProgress,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Select,
  Flex,
  useToast, // Import useToast from Chakra UI
} from "@chakra-ui/react";
import axios from "axios";
import { FiEdit2, FiTrash } from "react-icons/fi";

const AdminItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editItem, setEditItem] = useState({
    _id: "",
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    capacity: "",
    discount_percentage: "",
    courses: [],
    date: "",
    time: "",
    location: "",
    ingredients: [],
    valid_days: [],
  });
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://land-end-resort.onrender.com/menus"
      );
      console.log("response.data", response.data.menu);
      setItems(response.data.menu);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getColorScheme = (category) => {
    switch (category) {
      case "DINING":
        return "teal";
      case "DEALS":
        return "orange";
      case "SPECIALS":
        return "purple";
      case "EVENTS":
        return "red";
      case "MENU":
        return "green";
      default:
        return "gray";
    }
  };

  const toast = useToast(); // Initialize useToast

  const notifySuccess = (message) => {
    toast({
      title: "Success",
      description: message,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const notifyError = (message) => {
    toast({
      title: "Error",
      description: message,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleEditClick = (item) => {
    setEditItem(item);
    onOpen();
  };

  const handleSaveEdit = async () => {
    try {
      let updatedItem = { ...editItem };

      switch (editItem.category) {
        case "MENU":
          updatedItem.ingredients = editItem.ingredients.join(", ");
          break;

        case "DINING":
          updatedItem.capacity = parseInt(editItem.capacity, 10);
          updatedItem.amenities = editItem.amenities.join(", ");
          break;

        case "DEALS":
          updatedItem.valid_days = editItem.valid_days.join(", ");
          updatedItem.discount_percentage = editItem.discount_percentage;
          break;

        case "SPECIALS":
          updatedItem.courses = editItem.courses.join(", ");
          break;

        case "EVENTS":
          updatedItem.date = editItem.date;
          updatedItem.time = editItem.time;
          updatedItem.location = editItem.location;
          break;

        default:
          break;
      }

      const response = await axios.patch(
        `https://land-end-resort.onrender.com/menus/update/${editItem._id}`,
        updatedItem
      );

      console.log("Edit successful:", response.data);
      onClose();
      fetchData();
      notifySuccess("Item updated successfully");
    } catch (error) {
      console.error("Error editing data:", error);
      notifyError("Error updating item");
    }
  };

  const handleDelete = async (itemId) => {
    try {
      const response = await axios.delete(
        `https://land-end-resort.onrender.com/menus/delete/${itemId}`
      );

      console.log("Delete successful:", response.data);
      fetchData();
      notifySuccess("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting data:", error);
      notifyError("Error deleting item");
    }
  };

  const renderEditForm = () => {
    // ... (Previous renderEditForm logic)
  };

  if (loading) {
    return (
      <VStack height="100vh" justifyContent="center">
        <CircularProgress isIndeterminate color="green.300" />
      </VStack>
    );
  }

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <Box w={"100%"}>
      <Heading>Items</Heading>

      <Flex justify="center">
        <Select
          placeholder="Select Category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          mt={4}
          mb={2}
          w={"30%"}
        >
          <option value="all">All Categories</option>
          <option value="DINING">Dining</option>
          <option value="DEALS">Deals</option>
          <option value="SPECIALS">Specials</option>
          <option value="EVENTS">Events</option>
          <option value="MENU">Menu</option>
        </Select>
      </Flex>

      <SimpleGrid columns={2} spacing={2} mt={2}>
        {filteredItems.map((item) => (
          <Box
            w={"100%"}
            key={item._id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            display="flex"
          >
            <Image src={item.image} alt={item.name} w="50%" mr={4} />

            <Box>
              <Heading as="h2" size="md">
                {item.name}
              </Heading>
              <Text fontSize="sm" color="gray.500" mt={1}>
                {item.description}
              </Text>
              <Text fontWeight="bold" mt={1}>
                Price: {item.price}
              </Text>
              <Text mt={1}>
                Category:
                <Badge colorScheme={getColorScheme(item.category)}>
                  {item.category}
                </Badge>
              </Text>
              {item.category === "DINING" && (
                <Text mt={1}>Capacity: {item.capacity}</Text>
              )}
              {item.category === "DEALS" && (
                <Text mt={1}>Discount: {item.discount_percentage}%</Text>
              )}
              {item.category === "SPECIALS" && (
                <Text mt={1}>Courses: {item.courses.join(", ")}</Text>
              )}
              {item.category === "EVENTS" && (
                <>
                  <Text mt={1}>Date: {item.date}</Text>
                  <Text>Time: {item.time}</Text>
                  <Text>Location: {item.location}</Text>
                </>
              )}
            </Box>

            <VStack ml="auto">
              <Tooltip label="Edit">
                <Button
                  width="80%"
                  bg="white"
                  leftIcon={<FiEdit2 />}
                  onClick={() => handleEditClick(item)}
                >
                  Edit
                </Button>
              </Tooltip>

              <Tooltip label="Delete">
                <Button
                  width="80%"
                  bg="white"
                  leftIcon={<FiTrash />}
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </Button>
              </Tooltip>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {editItem && (
              <Box>
                <Text>Name:</Text>
                <Input
                  placeholder="Edit Name"
                  value={editItem.name}
                  onChange={(e) =>
                    setEditItem({ ...editItem, name: e.target.value })
                  }
                />
                <Text>Description:</Text>
                <Input
                  placeholder="Edit Description"
                  value={editItem.description}
                  onChange={(e) =>
                    setEditItem({ ...editItem, description: e.target.value })
                  }
                />
                <Text>Price:</Text>
                <Input
                  placeholder="Edit Price"
                  value={editItem.price}
                  onChange={(e) =>
                    setEditItem({ ...editItem, price: e.target.value })
                  }
                />
                {renderEditForm()}
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              bg={"#DC143C"}
              color={"white"}
              _hover={{
                bg: "#DC143C",
              }}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button onClick={handleSaveEdit}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AdminItemList;
