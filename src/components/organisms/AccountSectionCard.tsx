import type { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

type AccountSectionCardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
};

const AccountSectionCard = ({
  title,
  children,
  footer,
  className = "",
  headerClassName = "",
  bodyClassName = "",
  ...rest
}: AccountSectionCardProps) => {
  return (
    <Card className={className} {...rest}>
      <CardHeader className={`border-b border-[#e7ebf3] dark:border-[#2d3748] ${headerClassName}`.trim()}>
        <CardTitle className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className={`flex flex-col gap-6 ${bodyClassName}`.trim()}>{children}</CardContent>
      {footer && <CardFooter className="p-0">{footer}</CardFooter>}
    </Card>
  );
};

export default AccountSectionCard;
