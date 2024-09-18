import Image from "../../assets/images/image.png";
import { useNavigate } from "react-router-dom";
import ListingDetails from "./ListingDetails/ListingDetails";
import { HiLocationMarker } from "react-icons/hi";
import { IoBed } from "react-icons/io5";
import { BiSolidArea } from "react-icons/bi";
import { BsSignpostFill } from "react-icons/bs";

import "./ListingCard.scss";

const ListingCard = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/listing-page");
  };

  return (
    <div className="listing-card" onClick={handleCardClick}>
      <div className="listing-card__image-container">
        <img className="listing-card__image" src={Image} alt="image" />
        <span className="listing-card__badge">ქირავდება</span>
      </div>

      <div className="listing-card__info">
        <div className="listing-card__info--header">
          <h3>80 000</h3>
          <ListingDetails
            icon={<HiLocationMarker />}
            text="თბილისი, ი. ჭავჭავაძის 53"
          />
        </div>

        <div className="listing-card__icons">
          <ListingDetails icon={<IoBed />} text="53" />
          <ListingDetails icon={<BiSolidArea />} text="53" />
          <ListingDetails icon={<BsSignpostFill />} text="53" />
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
