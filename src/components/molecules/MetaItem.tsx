import MaterialIcon from "../atoms/MaterialIcon";

type MetaItemProps = {
  icon: string;
  label: string;
  className?: string;
  iconClassName?: string;
};

const MetaItem = ({ icon, label, className = "", iconClassName = "" }: MetaItemProps) => {
  return (
    <span className={`flex items-center gap-1 ${className}`.trim()}>
      <MaterialIcon className={iconClassName} name={icon} />
      <span>{label}</span>
    </span>
  );
};

export default MetaItem;
