
import Button from "../Button/Button";
import { Modal2 } from "./Modal2";
import "./ModalPage.css";
import { useState } from "react";

export const ModalPage2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="modal-page">
      <button className="open-button" onClick={toggleModal}>
        Modal Styles Component
      </button>
      {isModalOpen && (
        <Modal2 onClose={toggleModal}>
          <h1>Modal Styles Component</h1>
          <p style={{ color: "red" }}>Button.jsx</p>
          <Button/>
        </Modal2>
        
      )}
    </div>
  );
};
