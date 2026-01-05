import type { Post } from "../data/posts";
import type { Category, Content } from "./contentApi";

const DEFAULT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGx9H4nnFn9aeXosFIw3EICJ3A6X6qZS368XmLYw_5DXYJn--zuGHwmTRk2VsEAYLQsz4P3tq9JVo6qXKXfhEpAnyHycmW7eWeempM6IZg0X_2vD17D_HribheYY2gE7dBM27j8NGfO5RkjsaEz5zzmNvPkLn0MLBHOkj0ArwNW1oPtV5HAv6P_3yLD3gp8MQ1OYSRnA-YzWetR_i9vVKN3RaDfkofnCDJe_eX5hOInatwFyOGE1AypoJ2_gcd6UVnfeK8XdbZRGio";

const CATEGORY_BADGE_CLASSES: Record<string, string> = {
  Database:
    "absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-primary uppercase tracking-wider",
  Frontend:
    "absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-indigo-600 uppercase tracking-wider",
  "AI & ML":
    "absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-purple-600 uppercase tracking-wider",
  Productivity:
    "absolute top-3 left-3 rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
  Programming:
    "absolute top-3 left-3 rounded-md bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
  Humanities:
    "absolute top-3 left-3 rounded-md bg-purple-100 px-2.5 py-1 text-xs font-bold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300",
  Science:
    "absolute top-3 left-3 rounded-md bg-indigo-100 px-2.5 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300",
  IoT:
    "absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-teal-600 uppercase tracking-wider",
};

const DEFAULT_BADGE_CLASS = CATEGORY_BADGE_CLASSES.Database;

const formatDateLabel = (value?: string) => {
  const date = value ? new Date(value) : new Date();
  const safeDate = Number.isNaN(date.getTime()) ? new Date() : date;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(safeDate);
};

const getCategoryName = (content: Content, categoryMap: Map<string, string>) => {
  const categoryId = content.categories?.[0];
  return (categoryId && categoryMap.get(categoryId)) ?? "General";
};

const getContentBlocks = (content: Content) => {
  if (content.content_blocks && content.content_blocks.length > 0) {
    return content.content_blocks;
  }
  if (content.objectives && content.objectives.length > 0) {
    return content.objectives;
  }
  if (content.body) {
    return content.body
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .slice(0, 3);
  }
  return [];
};

export const buildPostsFromContent = (contents: Content[], categories: Category[]): Post[] => {
  const categoryMap = new Map(categories.map((category) => [category._id, category.name]));

  return contents
    .filter((content) => content.type === "post" && content.status !== "draft")
    .map((content) => {
      const category = getCategoryName(content, categoryMap);
      const imageUrl = content.thumbnail ?? DEFAULT_IMAGE;
      const author = content.author ?? {};
      const dateValue = content.createdAt ?? content.updatedAt ?? new Date().toISOString();

      return {
        slug: content.slug,
        title: content.title,
        excerpt: content.excerpt ?? content.description ?? "",
        content: getContentBlocks(content),
        category,
        categoryBadgeClass: CATEGORY_BADGE_CLASSES[category] ?? DEFAULT_BADGE_CLASS,
        imageUrl,
        imageAlt: content.image_alt ?? content.title,
        date: dateValue,
        dateLabel: formatDateLabel(dateValue),
        readTime: content.read_time ?? "5 min read",
        tags: content.tags ?? [],
        author: {
          name: author.name ?? "Learning Team",
          role: author.role ?? "Contributor",
          avatar: author.avatar ?? "",
        },
      };
    });
};

export const sortPostsByDate = (posts: Post[]) =>
  [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getCategoryCounts = (posts: Post[]) => {
  const counts = new Map<string, number>();
  posts.forEach((post) => counts.set(post.category, (counts.get(post.category) ?? 0) + 1));
  return Array.from(counts.entries()).map(([name, count]) => ({ name, count }));
};

export const getTagsFromPosts = (posts: Post[]) => {
  const tags = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags.values());
};
