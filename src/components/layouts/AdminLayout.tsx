import type { ReactNode } from "react";

import AdminSidebar from "../organisms/AdminSidebar";
import AdminTopbar from "../organisms/AdminTopbar";

type AdminLayoutProps = {
  activeNav?: "dashboard" | "posts" | "users" | "settings";
  searchPlaceholder?: string;
  children: ReactNode;
};

const AdminLayout = ({ activeNav, searchPlaceholder, children }: AdminLayoutProps) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/20 selection:text-primary">
      <AdminSidebar active={activeNav} />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark relative">
        <AdminTopbar searchPlaceholder={searchPlaceholder} />
        <div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
