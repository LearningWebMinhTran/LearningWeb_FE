import type { ReactNode } from "react";
import MaterialIcon from "../atoms/MaterialIcon";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type PanelCardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  className: string;
  titleClassName: string;
  icon?: string;
  iconClassName?: string;
  iconVariant?: "symbols" | "outlined";
  headerRight?: ReactNode;
  children: ReactNode;
  headerClassName?: string;
};

const PanelCard = ({
  title,
  className,
  titleClassName,
  icon,
  iconClassName = "",
  iconVariant = "symbols",
  headerRight,
  children,
  headerClassName = "mb-4",
  ...rest
}: PanelCardProps) => {
  return (
    <Card className={className} {...rest}>
      <CardHeader className={`flex flex-row items-center justify-between ${headerClassName}`.trim()}>
        <CardTitle className={titleClassName}>
          {icon && <MaterialIcon className={iconClassName} name={icon} variant={iconVariant} />}
          {title}
        </CardTitle>
        {headerRight}
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
};

export default PanelCard;
