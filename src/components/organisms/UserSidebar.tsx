import { Link } from "@tanstack/react-router";

import MaterialIcon from "../atoms/MaterialIcon";
import { cn } from "../../lib/utils";
import { useAuthMe } from "../../lib/auth";

export type UserNavKey =
  | "dashboard"
  | "explore"
  | "feed"
  | "my-posts"
  | "folders"
  | "saved"
  | "analytics"
  | "settings";

const navItems: Array<{ id: UserNavKey; label: string; icon: string; to: string }> = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard", to: "/dashboard" },
  { id: "explore", label: "Explore", icon: "search", to: "/dashboard/explore" },
  { id: "feed", label: "New Feed", icon: "feed", to: "/dashboard/new-feed" },
  { id: "my-posts", label: "My Posts", icon: "article", to: "/dashboard/my-posts" },
  { id: "folders", label: "My Folders", icon: "folder_open", to: "/dashboard/folders" },
  { id: "saved", label: "Saved Posts", icon: "bookmarks", to: "/dashboard/saved" },
  { id: "analytics", label: "Analytics", icon: "bar_chart", to: "/dashboard/analytics" },
  { id: "settings", label: "Settings", icon: "settings", to: "/account" },
];

const DEFAULT_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAqEV6q1VMv3zrMYv01xJhp6n8dYMQ5Xu6ngf0_aIC_YBVxLwQzEbXyUt4irJwixib4VJOoCKtzaZfrMS4CvtaxbZZG-FL-fTzx0FXB5D1aJcwS8_tERzQkrrO4H1qLsSlJ0qdKbtn9_UXMykOyc5AaeB9vh6EVt7MySZcr9A3Io27xYMCsHOaNRY-fYTU2Km7oXVUjTiqIdyPx2jHOV_DyMkIjK9nua-gtau4pg4fYkyRkPkIrYrrbbbKDVd1O4kMy9tXpuecq4G7Y";
const APP_LOGO =
  "https://res.cloudinary.com/dtwrwvffl/image/upload/v1767611236/whiteBgColor2_anh6zf.png";
const APP_LOGO_COLLAPSED =
  "https://res.cloudinary.com/dtwrwvffl/image/upload/v1767611775/symbol_jdvndh.svg";

type UserSidebarProps = {
  active?: UserNavKey;
  collapsed?: boolean;
  onToggleSidebar?: () => void;
};

const UserSidebar = ({ active, collapsed = false, onToggleSidebar }: UserSidebarProps) => {
  const { data: user } = useAuthMe();
  const name = user?.name ?? "Alex Learner";
  const role = user?.role ?? "Student Account";
  const avatar = user?.avatar ?? DEFAULT_AVATAR;

  return (
    <aside
      className={cn(
        "bg-white dark:bg-[#1a2234] border-r border-slate-200 dark:border-slate-800 flex flex-col h-full hidden md:flex transition-all duration-300 relative overflow-visible",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div
        className={cn(
          "h-16 flex items-center border-b border-slate-100 dark:border-slate-800",
          collapsed ? "px-3 justify-between" : "px-4 justify-between"
        )}
      >
        {collapsed ? (
          <div className="size-9 rounded-lg bg-white shadow-sm flex items-center justify-center overflow-hidden">
            <img alt="LearningWeb logo" className="h-full w-full object-contain" src={APP_LOGO_COLLAPSED} />
          </div>
        ) : (
          <img alt="LearningWeb logo" className="h-16 w-40 object-contain" src={APP_LOGO} />
        )}
        {onToggleSidebar ? (
          <button
            className="absolute right-0 translate-x-[100%] h-15 w-4 px-1 rounded-r-md rounded-l-none  bg-white dark:bg-[#202a3c] text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center shadow-sm z-20"
            onClick={onToggleSidebar}
            title={collapsed ? "Expand navigation" : "Collapse navigation"}
            type="button"
          >
            <MaterialIcon className="text-base" name={collapsed ? "chevron_right" : "chevron_left"} />
          </button>
        ) : null}
      </div>
      <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-6 custom-scrollbar">
        <div className={cn("flex items-center gap-3 px-2", collapsed && "justify-center px-0")}>
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-slate-200 dark:border-slate-700"
            data-alt="User profile avatar"
            style={{ backgroundImage: `url('${avatar}')` }}
          />
          {!collapsed ? (
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-slate-900 dark:text-white text-sm font-semibold truncate">{name}</h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs truncate">{role}</p>
            </div>
          ) : null}
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors",
                active === item.id && "bg-primary/10 text-primary dark:text-primary dark:bg-primary/20",
                collapsed && "justify-center px-2"
              )}
              key={item.id}
              to={item.to}
            >
              <MaterialIcon className={active === item.id ? "fill-1" : ""} name={item.icon} />
              <span className={cn("text-sm font-medium", collapsed && "hidden")}>{item.label}</span>
            </Link>
          ))}
        </nav>
        {!collapsed ? (
          <div className="mt-auto">
            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-4 flex flex-col gap-2 items-start">
              <MaterialIcon className="text-primary text-2xl" name="emoji_events" />
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Weekly Goal</p>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: "75%" }} />
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-bold">3/4 Badges Earned</p>
            </div>
          </div>
        ) : null}
      </div>
    </aside>
  );
};

export default UserSidebar;
