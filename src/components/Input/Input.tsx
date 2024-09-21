import React, { useState } from "react";

import "./Input.scss";

interface InputProps {
  type: "string" | "number" | "email" | "dropdown";
  label: string;
  onChange?: (value: string) => void;
  options?: string[];
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  onChange,
  options,
  disabled,
}) => {
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(false);

  const validateInput = (input: string) => {
    if (type === "string") {
      if (/\d/.test(input)) {
        setHasError(true);
      } else if (input.length <= 2) {
        setHasError(true);
      } else {
        setHasError(false);
      }
    }

    if (type === "number") {
      if (!/^\d*$/.test(input)) {
        setHasError(true);
      } else {
        setHasError(false);
      }
    }

    if (type === "email") {
      if (!input.endsWith("@redberry.ge")) {
        setHasError(true);
      } else {
        setHasError(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const input = e.target.value;
    setValue(input);
    if (type !== "dropdown") {
      validateInput(input);
    }
    if (onChange) onChange(input);
  };

  const getValidationMessage = () => {
    if (type === "string") return "მინიმუმ ორი სიმბოლო";
    if (type === "number") return "მხოლოდ რიცხვები";
    if (type === "email") return "გამოიყენეთ @redberry.ge ფოსტა";
  };

  return (
    <div className="input">
      <label className="input__label">{label}</label>
      {type === "dropdown" && options ? (
        <select
          className="input__select"
          value={value}
          onChange={handleChange}
          disabled={disabled}
        >
          <option value="" disabled>
             {label}
          </option>
          {options.map((option, index) => (
            <option className="option" key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="input__item"
          type={type === "number" ? "text" : type}
          value={value}
          onChange={handleChange}
          style={{
            borderColor: hasError ? "red" : "black",
          }}
        />
      )}
      {type !== "dropdown" && (
        <span className="input__validation-message">
          {getValidationMessage()}
        </span>
      )}{" "}
    </div>
  );
};

export default Input;
