import React, { useState } from "react";
import {
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";

const AdminRegister = () => {
  const toast = useToast();

  const initialState = {
    name: "",
    img: "",
    email: "",
    password: "",
    city: "",
    phone: "",
  };

  const [admin, setAdmin] = useState(initialState);

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("Form values:", admin); 

    // Validate if any input field is empty
    if (Object.values(admin).some((value) => value === "")) {
      toast({
        title: "Fill all data",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      // fetch request 
      const response = await fetch(
        "https://land-end-resort.onrender.com/admin/admin-register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(admin),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add admin");
      }

      // Reset form state
      setAdmin(initialState);

      // Show success toast
      toast({
        title: "Admin Added",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.error("Error adding admin:", error);
      toast({
        title: "Error Adding Admin",
        description: "An error occurred while adding admin.",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <>
      <Text fontSize="4xl" fontWeight="bold" mb={6}>
        Register New Admin
      </Text>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          textAlign: "left",
          placeItems: "center",
          height: "auto",
          margin: "40px auto",
          padding: "20px",
          borderRadius: "8px",
          background: "white",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={admin.name}
            onChange={handleChange}
            focusBorderColor="#DC143C"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Image</FormLabel>
          <Input
            type="text"
            name="img"
            value={admin.img}
            onChange={handleChange}
            focusBorderColor="#DC143C"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={admin.email}
            onChange={handleChange}
            focusBorderColor="#DC143C"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={admin.password}
            onChange={handleChange}
            focusBorderColor="#DC143C"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            name="city"
            value={admin.city}
            onChange={handleChange}
            focusBorderColor="#DC143C"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Contact Number</FormLabel>
          <Input
            type="text"
            name="phone"
            value={admin.phone}
            onChange={handleChange}
            focusBorderColor="#DC143C"
          />
        </FormControl>

        <br />
        <Button
          type="submit"
          fontSize="large"
          bgColor={"#DC143C"}
          _hover={{
            bg: "#DC143C",
          }}
          color={"white"}
          gridColumn="span 2"
        >
          Register Admin
        </Button>
      </form>
    </>
  );
};

export default AdminRegister;
