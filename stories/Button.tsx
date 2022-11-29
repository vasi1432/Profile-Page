import React from "react";

interface ButtonProps {
  type?: "primary" | "secondary";
  label: string;
  onClick?: () => void;
}

export const Button = ({ type, label, onClick, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${
        type === "primary"
          ? "px-4 py-2 border border-black font-medium text-sm text-white bg-gray-900 rounded"
          : ""
      }
      ${
        type === "secondary"
          ? "px-4 py-2 border border-black font-medium text-sm  text-black bg-white rounded"
          : ""
      }`}
      {...props}
    >
      {label}
    </button>
  );
};
