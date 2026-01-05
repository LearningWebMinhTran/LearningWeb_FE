import type { ReactNode } from "react";
import MaterialIcon from "../atoms/MaterialIcon";

type SectionHeadingProps = {
  icon: string;
  title: string;
  className?: string;
  iconClassName?: string;
  rightSlot?: ReactNode;
};

const SectionHeading = ({ icon, title, className = "", iconClassName = "", rightSlot }: SectionHeadingProps) => {
  return (
    <div className={`flex items-center justify-between ${className}`.trim()}>
      <h3 className="flex items-center gap-2">
        <MaterialIcon className={iconClassName} name={icon} />
        {title}
      </h3>
      {rightSlot}
    </div>
  );
};

export default SectionHeading;
