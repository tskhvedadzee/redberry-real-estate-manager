import Input from "../../../components/Input/Input";

import "./ChooseAgent.scss"

const ChooseAgent = () => {
  const agents = ["agent 1", "agent 2"];
  return (
    <div className="choose-agent">
      <h3 className="add-listing__title">აგენტი</h3>
      <div className="choose-agent__input">
        <Input type="dropdown" label="აირჩიე" options={agents} />
      </div>
    </div>
  );
};

export default ChooseAgent;
