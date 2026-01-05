import { Link } from "@tanstack/react-router";

import CommandPalette from "./CommandPalette";
import MaterialIcon from "../atoms/MaterialIcon";

type UserTopbarProps = {
  searchPlaceholder?: string;
};

const UserTopbar = ({ searchPlaceholder }: UserTopbarProps) => {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-[#1a2234] border-b border-slate-200 dark:border-slate-800 shrink-0 z-10">
      <div className="flex items-center gap-2">
        <button className="md:hidden p-2 text-slate-600 dark:text-slate-300" type="button">
          <MaterialIcon name="menu" />
        </button>
      </div>
      <div className="flex items-center gap-4 flex-1 max-w-xl mx-auto md:mx-0">
        {searchPlaceholder ? <CommandPalette className="hidden md:flex w-full max-w-md" placeholder={searchPlaceholder} /> : null}
      </div>
      <div className="flex items-center gap-4">
        <Link
          className="bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-all shadow-sm shadow-primary/30"
          to="/upload"
        >
          <MaterialIcon className="text-lg" name="add" />
          <span className="hidden sm:inline">New Post</span>
        </Link>
        <button
          className="relative p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
          type="button"
        >
          <MaterialIcon name="notifications" />
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white dark:border-[#1a2234]" />
        </button>
      </div>
    </header>
  );
};

export default UserTopbar;
