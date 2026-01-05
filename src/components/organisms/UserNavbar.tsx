import { Link, useRouterState } from "@tanstack/react-router";
import { toast } from "sonner";
import { Menu, Search } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type NavItem = {
  label: string;
  to: string;
  isActive?: (path: string) => boolean;
};

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Blog",
    to: "/blog",
    isActive: (path) => path === "/blog" || path.startsWith("/blog/") || path.startsWith("/posts/"),
  },
  {
    label: "Library",
    to: "/library",
    isActive: (path) => path === "/library",
  },
  { label: "Courses", to: "/courses" },
  { label: "Community", to: "/community" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const UserNavbar = () => {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7ebf3] bg-white/95 backdrop-blur-sm dark:border-[#22303c] dark:bg-[#1a202c]/95">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link className="flex items-center gap-2 text-[#0d121b] dark:text-white transition-opacity hover:opacity-80" to="/">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary text-lg">
              E
            </span>
            <span className="text-xl font-bold tracking-tight">EduBlog</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const active = item.isActive ? item.isActive(pathname) : pathname === item.to;
              return (
                <Link
                  key={item.to}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active
                      ? "text-primary"
                      : "text-[#0d121b] hover:text-primary dark:text-gray-200 dark:hover:text-primary"
                  )}
                  to={item.to}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex w-full max-w-xs items-center rounded-lg bg-[#e7ebf3] px-3 py-2 dark:bg-[#1e293b]">
            <Search className="h-4 w-4 text-[#4c669a]" />
            <Input
              className="ml-2 border-none bg-transparent p-0 text-sm text-[#0d121b] placeholder-[#4c669a] focus-visible:ring-0 dark:text-white"
              placeholder="Search topics..."
              type="text"
            />
          </div>
          <Button asChild className="hidden md:inline-flex" size="sm" variant="outline">
            <Link to="/upload">Create</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex" size="sm">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button
            className="lg:hidden"
            onClick={() => toast.message("Mobile menu coming soon.")}
            size="icon"
            variant="ghost">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default UserNavbar;
