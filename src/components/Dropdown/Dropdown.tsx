import { useEffect, useState } from "react";
import DropdownItem from "./DropdownItem/DropdownItem";
import RegionDropdown from "./RegionDropdown/RegionDropdown";
import FilterDropdown from "./FilterDropdown/FilterDropdown";
import BedroomDropdown from "./BedroomDropdown/BedroomDropdown";

import "./Dropdown.scss";

const Dropdown = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownClick = (text: string) => {
    setActiveDropdown((prev) => (prev === text ? null : text));
  };


  //close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownContainer = document.querySelector(".dropdown-menu");
      if (
        dropdownContainer &&
        !dropdownContainer.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="dropdown-menu">
        <DropdownItem
          title="რეგიონი"
          text="რეგიონის მიხედვით"
          isActive={activeDropdown === "რეგიონი"}
          onClick={() => handleDropdownClick("რეგიონი")}
          content={<RegionDropdown />}
        />
        <DropdownItem
          title="საფასო კატეგორია"
          text="საფასო კატეგორიის მიხედვით"
          isActive={activeDropdown === "საფასო კატეგორია"}
          onClick={() => handleDropdownClick("საფასო კატეგორია")}
          content={<FilterDropdown />}
        />
        <DropdownItem
          title="ფართობი"
          text="ფართობის მიხედვით"
          isActive={activeDropdown === "ფართობი"}
          onClick={() => handleDropdownClick("ფართობი")}
          content={<FilterDropdown />}
        />
        <DropdownItem
          title="საძინებლების რაოდენობა"
          text="საძინებლების რაოდენობის მიხედვით"
          isActive={activeDropdown === "საძინებლების რაოდენობა"}
          onClick={() => handleDropdownClick("საძინებლების რაოდენობა")}
          content={<BedroomDropdown />}
        />
      </div>
    </div>
  );
};

export default Dropdown;
