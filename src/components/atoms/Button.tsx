import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, className = "", ...rest }: ButtonProps) => {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
