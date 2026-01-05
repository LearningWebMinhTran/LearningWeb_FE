import { useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

import { cn } from "../../lib/utils";
import { Skeleton } from "../ui/skeleton";

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
  skeleton?: ReactNode;
  minDurationMs?: number;
};

const DefaultSkeleton = () => {
  return (
    <div className="w-full min-h-screen px-4 py-10">
      <div className="mx-auto max-w-[1200px] space-y-6">
        <Skeleton className="h-8 w-2/5" />
        <Skeleton className="h-4 w-3/5" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
        </div>
      </div>
    </div>
  );
};

const PageTransition = ({ children, className, skeleton, minDurationMs = 160 }: PageTransitionProps) => {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setIsPending(true);
    const timeout = window.setTimeout(() => setIsPending(false), minDurationMs);
    return () => window.clearTimeout(timeout);
  }, [pathname, minDurationMs]);

  return <div className={cn("w-full", className)}>{isPending ? skeleton ?? <DefaultSkeleton /> : children}</div>;
};

export default PageTransition;
