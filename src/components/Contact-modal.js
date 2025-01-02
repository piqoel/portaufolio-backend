// src/components/ContactModal.js
import React from "react";
import { Modal } from "react-bootstrap";
import { Contact } from "./Contact";

export const ContactModal = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      className="contact-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Get In Touch</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Contact />
      </Modal.Body>
    </Modal>
  );
};