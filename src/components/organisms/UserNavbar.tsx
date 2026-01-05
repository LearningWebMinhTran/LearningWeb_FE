import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { toast } from "sonner";
import { Menu } from "lucide-react";

import { cn } from "../../lib/utils";
import { useAuthActions, useAuthMe } from "../../lib/auth";
import CommandPalette from "./CommandPalette";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type NavItem = {
  label: string;
  to: string;
  isActive?: (path: string) => boolean;
};

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
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

const APP_LOGO =
  "https://res.cloudinary.com/dtwrwvffl/image/upload/v1767611236/whiteBgColor2_anh6zf.png";

const UserNavbar = () => {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const navigate = useNavigate();
  const { data: user } = useAuthMe();
  const { logout } = useAuthActions();

  const displayName = user?.name ?? user?.email ?? "Account";
  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7ebf3] bg-white/95 backdrop-blur-sm dark:border-[#22303c] dark:bg-[#1a202c]/95">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link className="flex items-center gap-2 text-[#0d121b] dark:text-white transition-opacity hover:opacity-80" to="/">
              <img alt="LearningWeb logo" className="h-16 w-40 object-contain" src={APP_LOGO} />
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
          <CommandPalette className="hidden md:flex w-full max-w-xs" />
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="hidden md:inline-flex" size="sm" variant="ghost">
                  <span className="flex items-center gap-2">
                    <Avatar className="h-7 w-7">
                      <AvatarImage alt={displayName} src={user?.avatar as string | undefined} />
                      <AvatarFallback>{initials || "U"}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{displayName}</span>
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem onSelect={() => navigate({ to: "/account" })}>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={() => {
                    logout();
                    toast.success("Logged out successfully.");
                    navigate({ to: "/auth", search: { tab: "login" } });
                  }}>
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
            <Button asChild className="hidden md:inline-flex" size="sm" variant="outline">
                <Link search={{ tab: "register" }} to="/auth">
                  Sign Up
                </Link>
            </Button>
            <Button asChild className="hidden md:inline-flex" size="sm">
              <Link search={{ tab: "login" }} to="/auth">
                Sign In
              </Link>
            </Button>
          </>
          )}
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
