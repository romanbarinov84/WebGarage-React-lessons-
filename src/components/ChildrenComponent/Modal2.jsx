import "./ModalPage.css";

export const Modal2 = ({ children, onClose }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={onClose} className="close-button">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
