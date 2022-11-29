import { useState } from "react";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  onChange: () => void;
  onBlur: () => void;
}

const Input = ({
  label,
  placeholder,
  type,
  onChange,
  onBlur,
  ...props
}: InputProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className={`flex flex-col relative w-full `}>
      <label className="mb-1 text-sm  font-medium text-gray-700">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={
          label === "Bio"
            ? "pb-16  focus:outline-none focus:border-[1px] focus:border-indigo-500  h-full   p-2 text-sm font-medium placeholder-gray-400 border-[1px] pr-11   text-gray-900 rounded"
            : "focus:outline-none focus:border-[1px] focus:border-indigo-500  h-full   p-2 text-sm font-medium placeholder-gray-400 border-[1px] pr-11   text-gray-900 rounded"
        }
        {...props}
      />
      {isLoading ? (
        <div>
          <svg
            className={
              label === "Bio"
                ? "mr-3 h-5 w-5 animate-spin  absolute right-0 bottom-2"
                : "mr-3 h-5 w-5 animate-spin  absolute right-0 top-8"
            }
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor "
              stroke-width="4"
            ></circle>
            <path
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : null}
    </div>
  );
};
export default Input;
