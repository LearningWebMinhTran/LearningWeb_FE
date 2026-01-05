import { useEffect, useState, type ReactNode } from "react";

import UserSidebar, { type UserNavKey } from "../organisms/UserSidebar";
import UserTopbar from "../organisms/UserTopbar";

type UserLayoutProps = {
  activeNav?: UserNavKey;
  searchPlaceholder?: string;
  children: ReactNode;
};

const SIDEBAR_COLLAPSE_KEY = "user_sidebar_collapsed";

const UserLayout = ({ activeNav, searchPlaceholder, children }: UserLayoutProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const resolvedSearchPlaceholder = searchPlaceholder ?? "Search posts, topics, or tags...";

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const stored = localStorage.getItem(SIDEBAR_COLLAPSE_KEY);
    setIsSidebarCollapsed(stored === "true");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    localStorage.setItem(SIDEBAR_COLLAPSE_KEY, String(isSidebarCollapsed));
  }, [isSidebarCollapsed]);

  return (
    <div className="flex h-screen w-full overflow-y-hidden overflow-x-visible bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
      <UserSidebar
        active={activeNav}
        collapsed={isSidebarCollapsed}
        onToggleSidebar={() => setIsSidebarCollapsed((prev) => !prev)}
      />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark relative">
        <UserTopbar searchPlaceholder={resolvedSearchPlaceholder} />
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">{children}</div>
      </main>
    </div>
  );
};

export default UserLayout;
