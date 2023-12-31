import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Input,
  Stack,
  Text,
  Select,
  Heading,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [upiId, setUpiId] = useState("");
  const [selectedPrefix, setSelectedPrefix] = useState("");
  const [error, setError] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const storedTotalAmount = localStorage.getItem("totalAmount");
    setTotalAmount(storedTotalAmount ? JSON.parse(storedTotalAmount) : 0);
  }, []);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setError("");
  };

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };

  const handlePrefixChange = (event) => {
    setSelectedPrefix(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  // Inside the card payment section
  const cardNumberRef = useRef(null);
  const cardHolderNameRef = useRef(null);
  const expiryDateRef = useRef(null);
  const cvvRef = useRef(null);

  // Inside the UPI payment section
  const upiIdRef = useRef(null);

  const validatePayment = () => {
    if (!address && paymentMethod !== "cash") {
      setError("Please provide your address.");
      return false;
    }

    console.log("Address is valid...");

    if (paymentMethod === "upi") {
      const validPrefixes = ["@oksbi", "@axisbank", "@icici"];
      const isValidPrefix = validPrefixes.includes(selectedPrefix);

      if (!isValidPrefix || !upiId) {
        setError("Please enter a valid UPI ID with a valid prefix.");
        return false;
      }
    }

    if (paymentMethod === "card") {
      // Add validation for card-related fields
      const cardNumber = cardNumberRef.current.value;
      const cardHolderName = cardHolderNameRef.current.value;
      const expiryDate = expiryDateRef.current.value;
      const cvv = cvvRef.current.value;

      if (!cardNumber || !cardHolderName || !expiryDate || !cvv) {
        setError("Please fill in all card details.");
        return false;
      }
    }

    return true;
  };

  const handlePayNow = () => {
    console.log("Payment Method:", paymentMethod);

    if (validatePayment()) {
      console.log("Payment method is valid...");

      // Show toast based on payment method
      if (paymentMethod === "cash") {
        console.log("Processing cash payment...");

        toast({
          position: "top-left",
          title: "Order Placed",
          description: "Your order has been placed successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        console.log("Processing non-cash payment...");
        toast({
          position: "top-left",
          title: "Payment Successful",
          description:
            "Your payment has been processed successfully. Redirecting to the home page...",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }

      // Uncomment the line below to navigate to the home page after successful payment
      console.log("Navigating...");
      navigate("/");

      // Reset error after successful payment
      setError("");
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" w={"70%"} m={"auto"}>
      <Heading>
        Make a&nbsp;
        <Text as={"span"} color={"#DC143C"}>
          Payment
        </Text>
      </Heading>
      <br />
      <Text fontSize="2xl" fontWeight="bold" mt={4}>
        Total&nbsp;
        <Text as="span" color="red">
          Amount:&nbsp;
        </Text>
        ${Number(Math.ceil(totalAmount.toFixed(2)))}
      </Text>
      <br />
      <br />
      <Select
        value={paymentMethod}
        onChange={handlePaymentMethodChange}
        mb={4}
        focusBorderColor="#DC143C"
      >
        <option value="card">Card Payment</option>
        <option value="cash">Cash on Delivery</option>
        <option value="upi">UPI</option>
      </Select>
      {paymentMethod === "card" && (
        <Stack spacing={4}>
          <Input
            type="text"
            placeholder="Card Number"
            focusBorderColor="#DC143C"
            ref={cardNumberRef}
          />
          <Input
            type="text"
            placeholder="Card Holder Name"
            focusBorderColor="#DC143C"
            ref={cardHolderNameRef}
          />
          <Stack direction="row" spacing={4}>
            <Input
              type="date"
              placeholder="MM/YY"
              flex="1"
              focusBorderColor="#DC143C"
              ref={expiryDateRef}
            />
            <Input
              type="text"
              placeholder="CVV"
              flex="1"
              focusBorderColor="#DC143C"
              ref={cvvRef}
            />
          </Stack>
        </Stack>
      )}
      {paymentMethod === "upi" && (
        <>
          <Input
            type="text"
            placeholder="Enter UPI ID"
            mb={2}
            value={upiId}
            onChange={handleUpiIdChange}
            focusBorderColor="#DC143C"
            ref={upiIdRef}
          />
          <Select
            value={selectedPrefix}
            onChange={handlePrefixChange}
            mb={2}
            focusBorderColor="#DC143C"
          >
            <option value="">Select UPI Bank</option>
            <option value="@oksbi">@oksbi</option>
            <option value="@axisbank">@axisbank</option>
            <option value="@icici">@icici</option>
          </Select>
          {error && <Text color="red.500">{error}</Text>}
        </>
      )}
      <Textarea
        placeholder="Enter your address"
        value={address}
        onChange={handleAddressChange}
        mb={2}
        focusBorderColor="#DC143C"
      />
      <Button
        mt={4}
        bg={"#DC143C"}
        color={"white"}
        _hover={{
          bg: "#DC143C",
        }}
        onClick={handlePayNow}
      >
        {paymentMethod === "cash" ? "Place Order" : "Pay Now"}
      </Button>
    </Box>
  );
};

export default Payment;
