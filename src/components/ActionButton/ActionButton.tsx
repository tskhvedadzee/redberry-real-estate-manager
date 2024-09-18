import React from "react";

import "./ActionButton.scss";

interface ActionButtonProps {
  text: string;
  primary?: boolean;
  onClick: () => void;
  icon?: any;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  primary,
  onClick,
  icon,
}) => {
  return (
    <button
      className={`button ${primary ? "primary" : "secondary"}`}
      onClick={onClick}
    >
      <span className="button__icon">{icon}</span>
      <span>{text}</span>
    </button>
  );
};

export default ActionButton;
