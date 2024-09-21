import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import "./DropdownItem.scss";
import ActionButton from "../../ActionButton/ActionButton";
import { ReactNode } from "react";

interface DropdownProps {
  text: string;
  options?: string[];
  title: string;
  isActive: boolean;
  onClick: () => void;
  content?: ReactNode;
}

const DropdownItem: React.FC<DropdownProps> = ({
  text,
  title,
  isActive,
  onClick,
  content,
}) => {
  return (
    <div className="dropdown-item">
      <button
        className={`dropdown-item__button ${
          isActive ? "dropdown-item__button--active" : ""
        }`}
        onClick={onClick}
      >
        {title} <div>{isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
      </button>

      {isActive && (
        <div className="dropdown-item__content">
          <span className="dropdown-item__content--text">{text}</span>
          <div>
            {content}
            <div className="dropdown-item__content--button">
              <ActionButton primary text="არჩევა" onClick={() => {}} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownItem;
