import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { FaArrowLeft } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BiSolidArea } from "react-icons/bi";
import { IoBed } from "react-icons/io5";
import { BsSignpostFill } from "react-icons/bs";

import Image from "../../assets/images/listingImage.png";
import { Container } from "../../components/Container/Container.styled";
import ListingDetails from "../../components/ListingCard/ListingDetails/ListingDetails";
import ImageItem from "../../components/ImageItem/ImageItem";
import ListingAgent from "./ListingAgent/ListingAgent";
import DeleteListingModal from "../../components/DeleteListingModal/DeleteListingModal";

import "./ListingPage.scss";

export const ListingPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <div className="listing-page-container">
        <button className="listing-page__back-button" onClick={handleBackClick}>
          <FaArrowLeft />
        </button>

        <div className="listing-page">
          <div className="listing-page__image">
            <ImageItem image={Image} badge="ქირავდება" />
          </div>

          <div className="listing-page__info">
            <div className="listing-page__info--properties">
              <h1>80, 458 ₾</h1>
              <div className="listing-page__info--details">
                <ListingDetails
                  text="თბილისი, ი. ჭავჭავაძის 53"
                  icon={<HiLocationMarker />}
                />
                <ListingDetails text="ფართი" icon={<BiSolidArea />} />
                <ListingDetails text="საძინებელი" icon={<IoBed />} />
                <ListingDetails
                  text="საფოსტო ინდექსი"
                  icon={<BsSignpostFill />}
                />
              </div>
            </div>

            <div className="listing-page__info--description">
              <p>
                იყიდება ბინა ჭავჭავაძის ქუჩაზე, ვაკეში. ბინა არის ახალი
                რემონტით, ორი საძინებლითა და დიდი აივნებით. მოწყობილია ავეჯითა
                და ტექნიკით.
              </p>

              <div>
                <ListingAgent />
                <button
                  className="listing-page__info--delete-listing"
                  onClick={handleDeleteClick}
                >
                  ლისტინგის წაშლა
                </button>
                <DeleteListingModal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
