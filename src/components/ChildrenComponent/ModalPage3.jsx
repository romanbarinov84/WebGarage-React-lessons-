import { ButtonStyled } from "../styledComponents/Button.styled";
import { Modal3 } from "./Modal3";
import "./ModalPage.css";
import { useState } from "react";

export const ModalPage3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="modal-page">
      <button className="open-button" onClick={toggleModal}>
         Styled Component
      </button>
      {isModalOpen && (
        <Modal3 onClose={toggleModal}>
          <h1> Styled Component</h1>
          <p style={{ color: "red" }}>Button.js</p>
          <ButtonStyled>Первая кнопка</ButtonStyled>
        </Modal3>
      )}
    </div>
  );
};
