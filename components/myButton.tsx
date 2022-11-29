import React from "react";

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  label: string;
  onClick?: () => void;
}

export const MyButton = ({
  backgroundColor,
  color,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`px-4 py-2 border border-black	  text-${color}  bg-${backgroundColor} rounded`}
      {...props}
    >
      {label}
    </button>
  );
};
