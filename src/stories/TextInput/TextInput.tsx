import { useState } from "react";
import "./TextInput.css";
// import clsx from "clsx";

export interface TextInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  type?: "text" | "password" | "email" | "number";
  className?: string;
  label?: string;
  name?: string;
  required?: boolean;
}

export const TextInput = ({
  label,
  name,
  placeholder = "Enter text",
  disabled = false,
  type = "text",
  className = "storybook-text-input",
  required = true,
}: TextInputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  };
  return (
    <div className={className}>
      <label htmlFor={name} className="text-input-label">
        {label}
      </label>
      <input
        name={name}
        aria-label={label}
        aria-required={required}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        required={required}
      />
    </div>
  );
};
