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
  Textarea,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { NavLink } from "react-router-dom";

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

  const handleEditClick = (item) => {
    setEditItem(item);
    onOpen();
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.patch(
        `https://land-end-resort.onrender.com/menus/update/${editItem._id}`,
        editItem
      );
      console.log("Edit successful:", response.data);
      onClose();
      fetchData();
    } catch (error) {
      console.error("Error editing data:", error);
    }
  };

  const renderEditForm = () => {
    switch (editItem.category) {
      case "MENU":
        return (
          <Box>
            <Input
              placeholder="Edit Ingredients (comma-separated)"
              value={editItem.ingredients.join(", ")}
              onChange={(e) =>
                setEditItem({
                  ...editItem,
                  ingredients: e.target.value.split(", "),
                })
              }
            />
          </Box>
        );

      case "DINING":
        return (
          <Box>
            <Input
              placeholder="Edit Capacity"
              value={editItem.capacity}
              onChange={(e) =>
                setEditItem({ ...editItem, capacity: e.target.value })
              }
            />
            <Input
              placeholder="Edit Amenities (comma-separated)"
              value={editItem.amenities.join(", ")}
              onChange={(e) =>
                setEditItem({
                  ...editItem,
                  amenities: e.target.value.split(", "),
                })
              }
            />
          </Box>
        );

      case "DEALS":
        return (
          <Box>
            <Input
              placeholder="Edit Valid Days (comma-separated)"
              value={editItem.valid_days.join(", ")}
              onChange={(e) =>
                setEditItem({
                  ...editItem,
                  valid_days: e.target.value.split(", "),
                })
              }
            />
            <Input
              placeholder="Edit Discount Percentage"
              value={editItem.discount_percentage}
              onChange={(e) =>
                setEditItem({
                  ...editItem,
                  discount_percentage: e.target.value,
                })
              }
            />
          </Box>
        );

      case "SPECIALS":
        return (
          <Box>
            <Input
              placeholder="Edit Courses (comma-separated)"
              value={editItem.courses.join(", ")}
              onChange={(e) =>
                setEditItem({
                  ...editItem,
                  courses: e.target.value.split(", "),
                })
              }
            />
          </Box>
        );

      case "EVENTS":
        return (
          <Box>
            <Input
              type="date"
              placeholder="Edit Date"
              value={editItem.date}
              onChange={(e) =>
                setEditItem({ ...editItem, date: e.target.value })
              }
            />
            <Input
              type="time"
              placeholder="Edit Time"
              value={editItem.time}
              onChange={(e) =>
                setEditItem({ ...editItem, time: e.target.value })
              }
            />
            <Input
              placeholder="Edit Location"
              value={editItem.location}
              onChange={(e) =>
                setEditItem({ ...editItem, location: e.target.value })
              }
            />
          </Box>
        );

      default:
        return null;
    }
  };

  if (loading) {
    return (
      <VStack height="100vh" justifyContent="center">
        <CircularProgress isIndeterminate color="green.300" />
      </VStack>
    );
  }

  return (
    <Box w={"100%"}>
      <Heading>Items</Heading>
      <SimpleGrid columns={2} spacing={2} mt={4}>
        {items.map((item) => (
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

            {/* Move buttons to the side */}
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
                <Button width="80%" bg="white" leftIcon={<FiTrash />}>
                  Delete
                </Button>
              </Tooltip>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      {/* Modal for editing */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Form for editing */}
            {editItem && (
              <Box>
                <Input
                  placeholder="Edit Name"
                  value={editItem.name}
                  onChange={(e) =>
                    setEditItem({ ...editItem, name: e.target.value })
                  }
                />
                <Input
                  placeholder="Edit Description"
                  value={editItem.description}
                  onChange={(e) =>
                    setEditItem({ ...editItem, description: e.target.value })
                  }
                />
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
