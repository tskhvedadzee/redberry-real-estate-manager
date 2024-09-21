import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import Image from "../../../assets/images/woman.png";
import ListingDetails from "../../../components/ListingCard/ListingDetails/ListingDetails";

import "./ListingAgent.scss";

const ListingAgent = () => {
  return (
    <div className="listing-agent">
      <div className="listing-agent__profile">
        <div className="listing-agent__profile--image">
          <img src={Image} alt="" />
        </div>
        <div className="listing-agent__profile--name">
          <h4>სოფიო გელოვანი</h4>
          <span>აგენტი</span>
        </div>
      </div>
      <div className="listing-agent__contact">
        <ListingDetails
          icon={<MdOutlineMailOutline />}
          text="sophio.gelovani@redberry.ge"
        />
        <ListingDetails icon={<FiPhoneCall />} text="577 777 777" />
      </div>
    </div>
  );
};

export default ListingAgent;
