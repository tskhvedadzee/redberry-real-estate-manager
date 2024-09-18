import ActionButton from "../ActionButton/ActionButton";
import { FiPlus } from "react-icons/fi";

import "./Navbar.scss";

const Navbar = () => {
  return (
    
      <div className="navbar">
        <div>dropdown</div>

        <div className="navbar__buttons">
          <ActionButton
            primary
            icon={<FiPlus />}
            text="ლისტინგის დამატება"
            onClick={() => {
              console.log("ლისტინგის დამატება clicked");
            }}
          />
          <ActionButton
            icon={<FiPlus />}
            text="აგენტის დამატება"
            onClick={() => {
              console.log("აგენტის დამატება clicked");
            }}
          />
        </div>
      </div>
    
  );
};

export default Navbar;
