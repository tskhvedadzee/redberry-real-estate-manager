import { useState } from "react";
import "./BedroomDropdown.scss";

const BedroomDropdown = () => {
  const bedroomNumbers = [1, 2, 3, 4, 5, 6];
  const [selectedBedroom, setSelectedBedroom] = useState<number | null>(null);

  const handleSelect = (number: number) => {
    setSelectedBedroom(number);
  };

  return (
    <div className="bedroom-dropdown">
      {bedroomNumbers.map((number) => (
        <div
          key={number}
          className={`bedroom-dropdown__option ${
            selectedBedroom === number
              ? "bedroom-dropdown__option--selected"
              : ""
          }`}
          onClick={() => handleSelect(number)}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default BedroomDropdown;
