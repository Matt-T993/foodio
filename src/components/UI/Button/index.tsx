import React from "react";

const shapes = {
  round: "rounded-[16px]",
  circle: "rounded-[50%]",
} as const;
const variants = {
  fill: {
    light_blue_A700: "bg-light_blue-A700 text-indigo-900",
    red_A700: "bg-red-A700 text-red-A700_01",
    gray_400: "bg-gray-400 text-gray-900",
    white_A700: "bg-white-A700",
    gray_50_01: "bg-gray-50_01 text-light_blue-800",
    blue_400: "bg-blue-400",
    red_400_19: "bg-red-400_19 text-red-400",
    white_A700_7f: "bg-white-A700_7f text-red-400",
    indigo_300: "bg-indigo-300 text-white-A700",
    gray_900: "bg-gray-900 text-white-A700",
    gray_400_01: "bg-gray-400_01 text-gray-900",
    gray_300: "bg-gray-300",
    gray_200: "bg-gray-200 text-black-900",
    blue_gray_100_02: "bg-blue_gray-100_02",
    red_400: "bg-red-400 text-white-A700",
  },
} as const;
const sizes = {
  "8xl": "h-[100px] px-[33px] text-[25px]",
  "6xl": "h-[80px] px-[35px] text-[25px]",
  "2xl": "h-[60px] px-[35px] text-[25px]",
  "4xl": "h-[60px] px-[35px] text-xl",
  "7xl": "h-[80px] px-[35px] text-xl",
  xs: "h-[35px] px-[7px]",
  md: "h-[50px] px-[34px] text-sm",
  lg: "h-[50px] px-[13px]",
  sm: "h-[35px] px-3.5 text-sm",
  "5xl": "h-[74px] px-[35px] text-xl",
  xl: "h-[54px] px-[35px] text-base",
  "3xl": "h-[60px] px-[15px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "3xl",
  color = "red_400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant &&
          variants[variant]?.[
            color as keyof (typeof variants)[typeof variant]
          ]) ||
        ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
