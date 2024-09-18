import "./ListingDetails.scss";

interface ListingCardDetailProps {
  icon: any;
  text: string;
}

const ListingDetails: React.FC<ListingCardDetailProps> = ({ text, icon }) => {
  return (
    <div className="listing-details">
      <span className="listing-details__icon">{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default ListingDetails;
