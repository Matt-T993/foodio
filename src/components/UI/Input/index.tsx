import React from "react";

// Define possible shapes for the input
const shapes = {
  round: "rounded-lg",
} as const;

// Define variant styles for the input
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-500",
  },
} as const;

// Define sizes for the input
const sizes = {
  sm: "h-[52px] pl-4 pr-[35px] text-xl",
  xs: "h-[52px] pl-6 pr-[35px] text-base",
} as const;

// Define possible types for HTML input elements
type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "date"
  | "url"
  | "search"
  | "tel";

// Define the props for the Input component
type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> & {
  className?: string;
  name?: string;
  placeholder?: string;
  type?: InputType;
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onChange?: (value: string) => void;
  shape?: keyof typeof shapes;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  color?: string;
};

// Input component definition using forwardRef
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      variant = "fill",
      size = "xs",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    // Handle input changes
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      let value = e.target.value;

      // Custom behavior based on input type
      if (type === "number") {
        value = value.replace(/[^\d]/g, ""); // Remove non-digits for number type
      }

      if (onChange) onChange(value);
    };

    // Render the component
    return (
      <>
        <div
          className={`${className} flex items-center justify-center text-gray-500 text-xl border-gray-400 border border-solid ${
            shapes[shape]
          } ${
            variants[variant][color as keyof (typeof variants)[typeof variant]]
          } ${sizes[size]} rounded-lg`}
        >
          {label && <label className="mr-2">{label}</label>}
          {prefix && <span className="mr-2">{prefix}</span>}
          <input
            ref={ref}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            className="flex-1"
            {...restProps}
          />
          {suffix && <span className="ml-2">{suffix}</span>}
        </div>
      </>
    );
  }
);

export { Input };
