import ActionButton from "../ActionButton/ActionButton";
import AddAgentForm from "./AddAgentForm/AddAgentForm";

import "./AddAgentModal.scss";

interface AddAgentModalProps {
  isVisible: boolean;
  onClick: () => void;
}

const AddAgentModal: React.FC<AddAgentModalProps> = ({
  isVisible,
  onClick,
}) => {
  if (!isVisible) return null;

  return (
    <div className="add-agent-modal" onClick={onClick}>
      <div
        className="add-agent-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <AddAgentForm />
        <div className="add-agent-modal__buttons">
          <ActionButton text="გაუქმება" onClick={onClick} />
          <ActionButton
            primary
            text="დაამატე ლისტინგი"
            onClick={() => {
              console.log("დაამატე აგენტი");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddAgentModal;
