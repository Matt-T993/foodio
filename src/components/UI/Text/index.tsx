import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  lg: "text-xl font-normal leading-[200%]",
  s: "text-base font-normal",
  "2xl": "text-3xl font-light leading-[200%]",
  "3xl": "text-[40px] font-normal",
  xl: "text-[25px] font-medium leading-[200%]",
  md: "text-lg font-medium leading-[110%]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "s",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-gray-900_cc font-opensans ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
