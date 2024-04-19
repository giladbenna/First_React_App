import React from "react";

// Define an interface for the component's props
interface ButtonComponentProps {
  label: string; // Specify that 'label' should be a string
  onClick: () => void; // Specify that 'onClick' is a function that returns void
}

// Apply the interface to the component's props
function ButtonComponent({ label, onClick }: ButtonComponentProps) {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default ButtonComponent;
