import EnhancedComponent from "./EnhancedComponent";
import { Modal } from "./Modal";
import "./ModalPage.css";
import { useState } from "react";

export const ModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="modal-page">
      <button className="open-button" onClick={toggleModal}>
        HIGH ORDER COMPONENT
      </button>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h1>HIGH ORDER COMPONENT</h1>
          <p style={{ color: "red" }}>EnhancedComponent.jsx</p>
          <EnhancedComponent />
        </Modal>
      )}
    </div>
  );
};
