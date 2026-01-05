import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";

import { cn } from "../../lib/utils";
import { getCategoryCounts } from "../../lib/postUtils";
import { usePostsData } from "../../lib/usePosts";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../ui/command";

const navigationItems = [
  { label: "Home", to: "/", keywords: "landing start", hint: "/" },
  { label: "Library", to: "/library", keywords: "posts articles", hint: "/library" },
  { label: "Courses", to: "/courses", keywords: "learning", hint: "/courses" },
  { label: "Community", to: "/community", keywords: "forum", hint: "/community" },
  { label: "About", to: "/about", keywords: "team", hint: "/about" },
  { label: "Contact", to: "/contact", keywords: "support", hint: "/contact" },
  { label: "Account", to: "/account", keywords: "profile settings", hint: "/account" },
];

const actionItems = [
  { label: "Create new post", to: "/upload", keywords: "write publish", hint: "/upload" },
  { label: "Sign in", to: "/auth", keywords: "auth login", hint: "/auth" },
  { label: "Sign up", to: "/auth", keywords: "register signup", hint: "/auth" },
];

type CommandPaletteProps = {
  className?: string;
  placeholder?: string;
};

const CommandPalette = ({ className, placeholder }: CommandPaletteProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const posts = usePostsData();
  const categoryItems = useMemo(() => getCategoryCounts(posts), [posts]);
  const displayPlaceholder = placeholder ?? "Search pages, posts, categories...";
  const postItems = useMemo(
    () =>
      posts.map((post) => ({
        label: post.title,
        category: post.category,
        keywords: `${post.title} ${post.category} ${post.tags.join(" ")}`,
      })),
    [posts]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavigate = (to: string, search?: Record<string, string>) => {
    setOpen(false);
    navigate({ to, search });
  };

  return (
    <>
      <button
        className={cn(
          "flex h-9 w-full items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800",
          className
        )}
        onClick={() => setOpen(true)}
        type="button">
        <Search className="h-4 w-4 text-slate-400" />
        <span className="text-sm text-slate-500 dark:text-slate-400">{displayPlaceholder}</span>
        <span className="ml-auto hidden text-xs text-slate-400 sm:inline">Ctrl K</span>
      </button>
      <CommandDialog
        description="Search for pages and actions in the app."
        onOpenChange={setOpen}
        open={open}
        title="Command palette">
        <CommandInput placeholder={displayPlaceholder} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            {navigationItems.map((item) => (
              <CommandItem
                key={item.to}
                onSelect={() => handleNavigate(item.to)}
                value={`${item.label} ${item.keywords}`}>
                <span>{item.label}</span>
                <CommandShortcut>{item.hint}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            {actionItems.map((item) => (
              <CommandItem
                key={item.to}
                onSelect={() => {
                  if (item.label === "Sign up") {
                    handleNavigate(item.to, { tab: "register" });
                    return;
                  }
                  if (item.label === "Sign in") {
                    handleNavigate(item.to, { tab: "login" });
                    return;
                  }
                  handleNavigate(item.to);
                }}
                value={`${item.label} ${item.keywords}`}>
                <span>{item.label}</span>
                <CommandShortcut>{item.hint}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Posts">
            {postItems.map((post) => (
              <CommandItem
                key={post.label}
                onSelect={() => handleNavigate("/library", { q: post.label })}
                value={`${post.label} ${post.keywords}`}>
                <span>{post.label}</span>
                <CommandShortcut>{post.category}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Categories">
            {categoryItems.map((category) => (
              <CommandItem
                key={category.name}
                onSelect={() => handleNavigate("/library", { category: category.name })}
                value={`${category.name} category`}>
                <span>{category.name}</span>
                <CommandShortcut>{category.count} posts</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandPalette;
