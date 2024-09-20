import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import { IoMdClose } from "react-icons/io";

import "./DeleteListingModal.scss";

interface DeleteListingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteListingModal: React.FC<DeleteListingModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-content__close-button" onClick={onClose}>
          <IoMdClose />
        </button>
        <h2 className="modal-content__header">გსურთ წაშალოთ ლისტინგი?</h2>
        <div className="modal-content__modal-buttons">
          <ActionButton text="გაუქმება" onClick={onClose} />{" "}
          <ActionButton
            primary
            text="დადასტურება"
            onClick={() => {
              console.log("წაშლა");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteListingModal;
