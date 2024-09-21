import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

import "./ListingDescription.scss";

const ListingDescription: React.FC = () => {
  const [description, setDescription] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setDescription(value);

    const wordCount = value.trim().split(/\s+/).length;
    setIsValid(wordCount >= 5);
  };

  return (
    <div className="listing-description">
      <label htmlFor="description" className="listing-description__label">
        აღწერა *
      </label>
      <textarea
        id="description"
        className={`listing-description__textarea ${
          !isValid ? "listing-description__textarea--invalid" : ""
        }`}
        value={description}
        onChange={handleChange}
      />
      <span className="listing-description__validation-message">
        <FaCheck /> მინიმუმ ხუთი სიტყვა
      </span>
    </div>
  );
};

export default ListingDescription;
