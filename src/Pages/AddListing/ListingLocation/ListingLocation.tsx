import { useState } from "react";
import Input from "../../../components/Input/Input";

import "./ListingLocation.scss";

const ListingLocation = () => {
  const regions = ["Tbilisi", "Adjara", "Imereti"];
  const citiesByRegion: { [key: string]: string[] } = {
    Tbilisi: ["Tbilisi"],
    Adjara: ["Batumi", "Kobuleti"],
    Imereti: ["Kutaisi", "Zestafoni"],
  };

  const [selectedRegion, setSelectedRegion] = useState("");
  const [availableCities, setAvailableCities] = useState<string[]>([]);

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    setAvailableCities(citiesByRegion[region] || []);
  };
  
  return (
    <div>
      <h3 className="add-listing__title">მდებარეობა</h3>
      <div className="add-listing__inputs">
        <Input type="string" label="მისამართი *" />
        <Input type="number" label="საფოსტო ინდექსი *" />
        <Input
          type="dropdown"
          label="რეგიონი"
          options={regions}
          onChange={handleRegionChange}
        />
        <Input
          type="dropdown"
          label="ქალაქი"
          options={availableCities}
          disabled={!selectedRegion}
        />
      </div>
    </div>
  );
};

export default ListingLocation;
