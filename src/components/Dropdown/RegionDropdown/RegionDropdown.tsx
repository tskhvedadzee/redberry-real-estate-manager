import "./RegionDropdown.scss";

const regions = ["Region 1", "Region 2", "Region 3", "Region 4"];

const RegionDropdown = () => {
  return (
    <div className="region-dropdown">
      <ul className="region-dropdown__container">
        {regions.map((region, index) => (
          <li key={index} className="region-dropdown__item">
            <input
              type="checkbox"
              value={region}
              className="region-dropdown__checkbox"
            />
            <label>{region}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegionDropdown;
