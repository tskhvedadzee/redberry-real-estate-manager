import "./ListingCardDetails.scss";

interface ListingCardDetailProps {
  icon: any;
  text: string;
}

const ListingCardDetails: React.FC<ListingCardDetailProps> = ({
  text,
  icon,
}) => {
  return (
    <div className="listing-card-details">
      <span className="listing-card-details__icon">{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default ListingCardDetails;
