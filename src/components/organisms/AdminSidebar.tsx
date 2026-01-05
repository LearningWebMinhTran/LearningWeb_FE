import { Link } from "@tanstack/react-router";

import { cn } from "../../lib/utils";
import MaterialIcon from "../atoms/MaterialIcon";

type AdminNavKey = "dashboard" | "posts" | "users" | "settings";

type AdminSidebarProps = {
  active?: AdminNavKey;
};

const AdminSidebar = ({ active }: AdminSidebarProps) => {
  const primaryLinks = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard", to: "/admin" },
  ];

  const contentLinks = [
    { id: "create", label: "Create Post", icon: "edit_square", to: "/upload" },
    { id: "posts", label: "Manage Posts", icon: "article", to: "/admin/posts" },
  ];

  const adminLinks = [
    { id: "users", label: "Manage Users", icon: "group", to: "/admin/users" },
    { id: "settings", label: "Settings", icon: "settings", to: "/admin/settings" },
  ];

  const linkClass = (isActive: boolean) =>
    cn(
      "group flex items-center gap-3 rounded-lg px-4 py-3 transition-colors",
      isActive
        ? "bg-primary/10 text-primary"
        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
    );

  const iconClass = (isActive: boolean) => cn("text-[20px]", isActive ? "text-primary" : "text-slate-500");

  return (
    <aside className="flex w-72 flex-col justify-between border-r border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 transition-all duration-300 ease-in-out shrink-0 hidden md:flex">
      <div className="flex flex-col gap-6 p-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white">
            <MaterialIcon className="text-2xl" name="school" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">EduBlog Admin</h1>
        </div>
        <nav className="flex flex-col gap-2 mt-4">
          {primaryLinks.map((item) => {
            const isActive = active === item.id;
            return (
              <Link className={linkClass(isActive)} key={item.id} to={item.to}>
                <MaterialIcon className={iconClass(isActive)} name={item.icon} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
          <div className="my-2 border-t border-slate-100 dark:border-slate-800"></div>
          <p className="px-4 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Content
          </p>
          {contentLinks.map((item) => {
            const isActive = active === item.id;
            return (
              <Link className={linkClass(isActive)} key={item.id} to={item.to}>
                <MaterialIcon className={iconClass(isActive)} name={item.icon} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
          <div className="my-2 border-t border-slate-100 dark:border-slate-800"></div>
          <p className="px-4 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Administration
          </p>
          {adminLinks.map((item) => {
            const isActive = active === item.id;
            return (
              <Link className={linkClass(isActive)} key={item.id} to={item.to}>
                <MaterialIcon className={iconClass(isActive)} name={item.icon} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <Link
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors"
          to="/login">
          <MaterialIcon className="text-[20px]" name="logout" />
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
