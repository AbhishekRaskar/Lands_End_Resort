import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalCloseButton } from "@chakra-ui/react";
import AdminLogin from "../Pages/AdminLogin";
import AdminSignup from "../Pages/AdminSignup";

const AuthModal = ({ isOpen, onClose, type }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        {type === "login" && <AdminLogin isOpen={isOpen} onClose={onClose} />}
        {type === "register" && <AdminSignup />}
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
