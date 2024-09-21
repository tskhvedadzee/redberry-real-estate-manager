import { useNavigate } from "react-router-dom";
import ChooseAgent from "./ChooseAgent/ChooseAgent";
import ListingDetails from "./ListingDetails/ListingDetails";
import ListingLocation from "./ListingLocation/ListingLocation";
import ActionButton from "../../components/ActionButton/ActionButton";
import { Container } from "../../components/Container/Container.styled";
import ListingRadioButtons from "./ListingRadioButtons/ListingRadioButtons";

import "./AddListing.scss";

const AddListing = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <div className="add-listing">
        <h1>ლისტინგის დამატება</h1>
        <div className="add-listing__fields">
          <ListingRadioButtons />
          <ListingLocation />
          <ListingDetails />
          <ChooseAgent />

          <div className="add-listing__buttons">
            <ActionButton text="გაუქმება" onClick={handleBackClick} />
            <ActionButton
              primary
              text="დაამატე ლისტინგი"
              onClick={() => {
                console.log("დაამატე ლისტინგი");
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddListing;
