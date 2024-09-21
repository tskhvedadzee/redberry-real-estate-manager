import Input from "../../Input/Input";
import { UploadImage } from "../../UploadImage/UploadImage";

import "./AddAgentForm.scss";

const AddAgentForm = () => {
  return (
    <div className="add-agent">
      <h3 className="add-agent__title">აგენტის დამატება</h3>

      <div className="add-agent__inputs">
        <Input type="string" label="სახელი *" />
        <Input type="string" label="გვარი" />
        <Input type="email" label="გამოიყენეთ @redberry.ge ფოსტა *" />
        <Input type="number" label="ტელეფონის ნომერი" />
      </div>
      <UploadImage />
    </div>
  );
};

export default AddAgentForm;
