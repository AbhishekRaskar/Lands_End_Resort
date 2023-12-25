import {
  Box,
  Heading,
  Select,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const AdminAddItem = () => {
  const [selectedCategory, setSelectedCategory] = useState("MENU");
  const [formData, setFormData] = useState({});
  const toast = useToast();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleInputChange = (e) => {
    console.log("Input changed:", e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const dataToSend = {
        ...formData,
        category: selectedCategory,
      };
      console.log("Form Data:", dataToSend);

      dataToSend.capacity = parseInt(dataToSend.capacity, 10);
      
      const response = await axios.post(
        "https://land-end-resort.onrender.com/menus/add",
        dataToSend
      );

      if (response.status === 200) {
        toast({
          title: "Item Added",
          description: "The item has been added successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        setFormData({});
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while adding the item.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const renderFormFields = () => {
    switch (selectedCategory) {
      case "MENU":
        return (
          <>
            <FormControl mt={4}>
              <FormLabel>Name</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                focusBorderColor="#DC143C"
                placeholder="Enter description"
                name="description"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="number"
                placeholder="Enter price"
                name="price"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image URL</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="text"
                placeholder="Enter image URL"
                name="image"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Ingredients</FormLabel>
              <Textarea
                focusBorderColor="#DC143C"
                placeholder="Enter ingredients (comma-separated)"
                name="ingredients"
                onChange={handleInputChange}
              />
            </FormControl>
          </>
        );
      case "DINING":
        return (
          <>
            <FormControl mt={4}>
              <FormLabel>Name</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                focusBorderColor="#DC143C"
                placeholder="Enter description"
                name="description"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="number"
                placeholder="Enter price"
                name="price"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image URL</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="text"
                placeholder="Enter image URL"
                name="image"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Capacity</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="number"
                placeholder="Enter capacity"
                name="capacity"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Amenities</FormLabel>
              <Textarea
                focusBorderColor="#DC143C"
                placeholder="Enter amenities (comma-separated)"
                name="amenities"
                onChange={handleInputChange}
              />
            </FormControl>
          </>
        );
      case "DEALS":
        return (
          <>
            <FormControl mt={4}>
              <FormLabel>Name</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                focusBorderColor="#DC143C"
                placeholder="Enter description"
                name="description"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="number"
                placeholder="Enter price"
                name="price"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image URL</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="text"
                placeholder="Enter image URL"
                name="image"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Valid Days</FormLabel>
              <Textarea
                focusBorderColor="#DC143C"
                placeholder="Enter valid days (comma-separated)"
                name="validDays"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Discount Percentage</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="number"
                placeholder="Enter discount percentage"
                name="discountPercentage"
                onChange={handleInputChange}
              />
            </FormControl>
          </>
        );
      case "SPECIALS":
        return (
          <>
            <FormControl mt={4}>
              <FormLabel>Name</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                focusBorderColor="#DC143C"
                placeholder="Enter description"
                name="description"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="number"
                placeholder="Enter price"
                name="price"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image URL</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="text"
                placeholder="Enter image URL"
                name="image"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Courses</FormLabel>
              <Textarea
                focusBorderColor="#DC143C"
                placeholder="Enter courses (comma-separated)"
                name="courses"
                onChange={handleInputChange}
              />
            </FormControl>
          </>
        );
      case "EVENTS":
        return (
          <>
            <FormControl mt={4}>
              <FormLabel>Name</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                focusBorderColor="#DC143C"
                placeholder="Enter description"
                name="description"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="number"
                placeholder="Enter price"
                name="price"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image URL</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="text"
                placeholder="Enter image URL"
                name="image"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Date</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="date"
                name="date"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Time</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="time"
                name="time"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Input
                focusBorderColor="#DC143C"
                type="text"
                placeholder="Enter location"
                name="location"
                onChange={handleInputChange}
              />
            </FormControl>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      <Heading>Add a New Item</Heading>
      <FormControl mt={4}>
        <FormLabel>Category</FormLabel>
        <Select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="MENU">Menu</option>
          <option value="DINING">Dining</option>
          <option value="DEALS">Deals</option>
          <option value="SPECIALS">Specials</option>
          <option value="EVENTS">Events</option>
        </Select>
      </FormControl>
      {renderFormFields()}
      <Button
        mt={4}
        bg={"#DC143C"}
        color={"white"}
        _hover={{
          bg: "#DC143C",
        }}
        onClick={handleSubmit}
      >
        Add Item
      </Button>
    </Box>
  );
};

export default AdminAddItem;
