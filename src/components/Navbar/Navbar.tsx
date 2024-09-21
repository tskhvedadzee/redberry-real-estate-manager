import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import AddAgentModal from "../AddAgentModal/AddAgentModal";
import ActionButton from "../ActionButton/ActionButton";

import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleAddListingClick = () => {
    navigate("/add-listing");
  };

  const handleAgentClick = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <div className="navbar">
      <div>dropdown</div>

      <div className="navbar__buttons">
        <ActionButton
          primary
          icon={<FiPlus />}
          text="ლისტინგის დამატება"
          onClick={handleAddListingClick}
        />
        <ActionButton
          icon={<FiPlus />}
          text="აგენტის დამატება"
          onClick={handleAgentClick}
        />

        <AddAgentModal isVisible={isModalVisible} onClick={handleAgentClick} />
      </div>
    </div>
  );
};

export default Navbar;
