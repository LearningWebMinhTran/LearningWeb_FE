import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

import type { Post } from "../../data/posts";
import { X } from "lucide-react";

import MaterialIcon from "../atoms/MaterialIcon";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";
import { Skeleton } from "../ui/skeleton";

const learnItems = [
  "Embedding vs. referencing tradeoffs",
  "One-to-many relationship patterns",
  "Schema validation best practices",
];

const exerciseItems = [
  { label: "3 concept check quizzes", icon: "quiz" },
  { label: "Modeling challenge: E-Commerce", icon: "code" },
  { label: "Aggregation pipeline task", icon: "terminal" },
];

type BlogBriefModalProps = {
  post: Post | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isFeatured?: boolean;
};

const BlogBriefModal = ({ post, open, onOpenChange, isFeatured = false }: BlogBriefModalProps) => {
  const [activePost, setActivePost] = useState<Post | null>(post);

  useEffect(() => {
    if (post) {
      setActivePost(post);
    }
  }, [post]);

  const displayPost = post ?? activePost;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[min(96vw,1100px)] max-w-none overflow-hidden border border-slate-200 bg-white p-0 shadow-2xl dark:border-slate-800 dark:bg-[#0f172a]">
        <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-slate-700 shadow-md transition hover:bg-white dark:bg-slate-900/80 dark:text-slate-200">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogTitle className="sr-only">{displayPost?.title ?? "Post preview"}</DialogTitle>
        <DialogDescription className="sr-only">
          {displayPost?.excerpt ?? "Quick preview of the selected post."}
        </DialogDescription>
        {displayPost ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
            <div className="relative min-h-[280px] bg-[#1f6f70]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${displayPost.imageUrl}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
              {isFeatured ? (
                <div className="absolute left-6 top-6">
                  <Badge className="bg-white text-primary font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    <MaterialIcon className="!text-[16px] mr-1" name="star" />
                    Featured
                  </Badge>
                </div>
              ) : null}
            </div>
            <div className="p-8 lg:p-10 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <Badge className="bg-blue-50 text-blue-700 font-semibold px-3 py-1 rounded-full">
                  {displayPost.category}
                </Badge>
                <span className="text-slate-400">&bull;</span>
                <span className="text-slate-500 font-medium">{displayPost.dateLabel}</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">{displayPost.title}</h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">{displayPost.excerpt}</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-4 dark:border-blue-900/40 dark:bg-blue-900/10">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                    <MaterialIcon className="text-primary !text-[18px]" name="lightbulb" />
                    What you will learn
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {learnItems.map((item) => (
                      <li className="flex items-start gap-2" key={item}>
                        <MaterialIcon className="text-emerald-500 !text-[18px] shrink-0 mt-0.5" name="check_circle" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-4 dark:border-orange-900/40 dark:bg-orange-900/10">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                    <MaterialIcon className="text-orange-500 !text-[18px]" name="fitness_center" />
                    Practice exercises
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {exerciseItems.map((item) => (
                      <li className="flex items-start gap-2" key={item.label}>
                        <MaterialIcon className="text-orange-500 !text-[18px] shrink-0 mt-0.5" name={item.icon} />
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Avatar className="h-12 w-12">
                  <AvatarImage alt={displayPost.author.name} src={displayPost.author.avatar} />
                  <AvatarFallback>{displayPost.author.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{displayPost.author.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{displayPost.author.role}</p>
                </div>
              </div>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {displayPost.tags.slice(0, 3).map((tag) => (
                    <span
                      className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800 dark:text-slate-300"
                      key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild>
                  <Link to="/library/$slug" params={{ slug: displayPost.slug }}>
                    Read Article
                    <MaterialIcon className="!text-[18px]" name="arrow_forward" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 p-8 lg:grid-cols-[1.05fr_1fr] lg:p-10">
            <Skeleton className="h-[320px] w-full rounded-2xl" />
            <div className="flex flex-col gap-4">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <div className="grid gap-4 md:grid-cols-2">
                <Skeleton className="h-36 w-full rounded-2xl" />
                <Skeleton className="h-36 w-full rounded-2xl" />
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-6 w-32" />
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BlogBriefModal;
