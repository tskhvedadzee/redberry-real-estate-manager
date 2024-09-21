import Input from "../../../components/Input/Input";
import ListingDescription from "../ListingDescription/ListingDescription";
import { ListingImageUpload } from "../ListingImageUpload/ListingImageUpload";

import "./ListingDetails.scss";

const ListingDetails = () => {
  return (
    <div>
      <h3 className="add-listing__title">ბინის დეტალები</h3>
      <div className="add-listing-details">
        <div className="add-listing__inputs">
          <Input type="number" label="ფასი" />
          <Input type="number" label="ფართობი" />
          <Input type="number" label="საძინებლების რაოდენობა*" />
        </div>
        <ListingDescription />
        <ListingImageUpload />
      </div>
    </div>
  );
};

export default ListingDetails;
