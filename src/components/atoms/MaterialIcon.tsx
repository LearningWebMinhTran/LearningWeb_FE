import type { HTMLAttributes } from "react";

type MaterialIconProps = HTMLAttributes<HTMLSpanElement> & {
  name: string;
  variant?: "symbols" | "outlined";
};

const MaterialIcon = ({ name, variant = "symbols", className = "", ...rest }: MaterialIconProps) => {
  const baseClass = variant === "outlined" ? "material-icons-outlined" : "material-symbols-outlined";

  return (
    <span className={`${baseClass} ${className}`.trim()} {...rest}>
      {name}
    </span>
  );
};

export default MaterialIcon;
