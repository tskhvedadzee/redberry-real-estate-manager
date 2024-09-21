import "./ListingRadioButtons.scss";

const ListingRadioButtons = () => {
  return (
    <div className="button-container">
      <span className="add-listing__title">გარიგების ტიპი</span>
      <div className="button-wrapper">
        <div className="button-wrapper__item">
          <input type="radio" name="radio" />
          <label>იყიდება</label>
        </div>
        <div className="button-wrapper__item">
          <input type="radio" name="radio" />
          <label>ქირავდება</label>
        </div>
      </div>
    </div>
  );
};

export default ListingRadioButtons;
