import { useEffect, useMemo, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { toast } from "sonner";
import { Search, SlidersHorizontal } from "lucide-react";

import LibraryPostCard from "../components/organisms/LibraryPostCard";
import BlogBriefModal from "../components/organisms/BlogBriefModal";
import PanelCard from "../components/organisms/PanelCard";
import UserNavbar from "../components/organisms/UserNavbar";
import PublicFooter from "../components/organisms/PublicFooter";
import PageTransition from "../components/layouts/PageTransition";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { type Post } from "../data/posts";
import { getCategoryCounts, getTagsFromPosts } from "../lib/postUtils";
import { usePostsData } from "../lib/usePosts";

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "readtime", label: "Most Time" },
];

const LibraryPage = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pageSize = 3;
  const searchParams = useRouterState({ select: (state) => state.location.search });
  const posts = usePostsData();

  useEffect(() => {
    if (!isModalOpen && selectedPost) {
      const timeout = window.setTimeout(() => setSelectedPost(null), 200);
      return () => window.clearTimeout(timeout);
    }
    return undefined;
  }, [isModalOpen, selectedPost]);

  useEffect(() => {
    const query = typeof searchParams?.q === "string" ? searchParams.q : "";
    const category = typeof searchParams?.category === "string" ? searchParams.category : null;
    const tag = typeof searchParams?.tag === "string" ? searchParams.tag : null;

    if (query !== "") {
      setSearch(query);
    }
    if (searchParams?.q === undefined) {
      setSearch("");
    }

    setActiveCategory(category);
    setActiveTag(tag);
    setPage(1);
  }, [searchParams?.category, searchParams?.q, searchParams?.tag]);

  const categories = useMemo(() => getCategoryCounts(posts), [posts]);
  const tags = useMemo(() => getTagsFromPosts(posts), [posts]);

  const filteredPosts = useMemo(() => {
    const normalized = search.trim().toLowerCase();
    let filtered = posts.filter((post) => {
      const matchesSearch = normalized
        ? post.title.toLowerCase().includes(normalized) || post.excerpt.toLowerCase().includes(normalized)
        : true;
      const matchesCategory = activeCategory ? post.category === activeCategory : true;
      const matchesTag = activeTag ? post.tags.includes(activeTag) : true;
      return matchesSearch && matchesCategory && matchesTag;
    });

    filtered = [...filtered].sort((a, b) => {
      if (sortBy === "oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      if (sortBy === "readtime") {
        const readA = parseInt(a.readTime, 10) || 0;
        const readB = parseInt(b.readTime, 10) || 0;
        return readB - readA;
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return filtered;
  }, [activeCategory, activeTag, search, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pagedPosts = filteredPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleAddToFolder = (title: string) => {
    toast.success(`Added "${title}" to your folder.`);
  };

  const handleSubscribe = () => {
    toast.success("Thanks for subscribing!");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-x-hidden min-h-screen font-display antialiased">
      <UserNavbar />
      <PageTransition>
        <div className="layout-container flex flex-col min-h-screen">
        <div className="w-full bg-white dark:bg-[#1a202c] border-b border-[#e7ebf3] dark:border-[#22303c]">
          <div className="px-4 md:px-10 py-10 max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-sm text-[#4c669a] dark:text-gray-400">
                <Link className="hover:text-primary" to="/">
                  Home
                </Link>
                <span className="text-xs">/</span>
                <span className="text-[#0d121b] dark:text-gray-200 font-medium">Library</span>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Explore Our Library
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-lg font-normal max-w-2xl">
                  Discover tutorials, guides, and insights to level up your development skills. New content added weekly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-10 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            <main className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-3 border-b border-[#e7ebf3] dark:border-[#22303c] pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#4c669a] dark:text-gray-400">
                    Showing {pagedPosts.length} of {filteredPosts.length} posts
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#4c669a] dark:text-gray-400 hidden sm:inline">Sort by:</span>
                    <Select
                      onValueChange={(value) => {
                        setPage(1);
                        setSortBy(value);
                      }}
                      value={sortBy}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort" />
                      </SelectTrigger>
                      <SelectContent>
                        {sortOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative flex-1 min-w-[220px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#4c669a]" />
                    <Input
                      className="pl-9"
                      placeholder="Search topics..."
                      value={search}
                      onChange={(event) => {
                        setPage(1);
                        setSearch(event.target.value);
                      }}
                    />
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setActiveCategory(null);
                      setActiveTag(null);
                      setSearch("");
                      setSortBy("newest");
                      setPage(1);
                    }}>
                    <SlidersHorizontal className="h-4 w-4" />
                    Reset Filters
                  </Button>
                </div>
              </div>
              {pagedPosts.map((post) => (
                <LibraryPostCard
                  key={post.slug}
                  authorAlt={post.author.name}
                  authorImage={post.author.avatar}
                  authorName={post.author.name}
                  category={post.category}
                  categoryClassName={post.categoryBadgeClass}
                  dateLabel={post.dateLabel}
                  excerpt={post.excerpt}
                  imageAlt={post.imageAlt}
                  imageUrl={post.imageUrl}
                  onAddToFolder={() => handleAddToFolder(post.title)}
                  onSelect={() => {
                    setSelectedPost(post);
                    setIsModalOpen(true);
                  }}
                  readTime={post.readTime}
                  title={post.title}
                />
              ))}
              <div className="flex justify-center pt-8">
                <div className="flex items-center gap-2">
                  <Button
                    disabled={currentPage === 1}
                    onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                    variant="outline">
                    Previous
                  </Button>
                  <span className="text-sm text-[#4c669a] dark:text-gray-400">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    disabled={currentPage === totalPages}
                    onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                    variant="outline">
                    Next
                  </Button>
                </div>
              </div>
            </main>
            <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-8">
              <PanelCard
                className="shadow-sm"
                title="Search"
                titleClassName="text-lg font-bold text-[#0d121b] dark:text-white">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#4c669a]" />
                  <Input
                    className="pl-9"
                    placeholder="Search topics..."
                    value={search}
                    onChange={(event) => {
                      setPage(1);
                      setSearch(event.target.value);
                    }}
                  />
                </div>
              </PanelCard>
              <PanelCard
                className="shadow-sm"
                title="Folders"
                titleClassName="text-lg font-bold text-[#0d121b] dark:text-white"
                headerRight={
                  <Button onClick={() => toast.message("Create folder action coming soon.")} size="icon" variant="ghost">
                    +
                  </Button>
                }>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg border border-transparent p-2 hover:border-primary/20 hover:bg-blue-50/50 dark:hover:bg-blue-900/10">
                    <span className="text-sm font-medium">My Reading List</span>
                    <Badge variant="secondary">3</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-transparent p-2 hover:border-primary/20 hover:bg-blue-50/50 dark:hover:bg-blue-900/10">
                    <span className="text-sm font-medium">Research</span>
                    <Badge variant="secondary">12</Badge>
                  </div>
                </div>
              </PanelCard>
              <PanelCard
                className="shadow-sm"
                id="categories"
                title="Categories"
                titleClassName="text-lg font-bold text-[#0d121b] dark:text-white"
                headerClassName="mb-2">
                <div className="space-y-2">
                  {categories.map((category) => {
                    const isActive = activeCategory === category.name;
                    return (
                    <button
                      key={category.name}
                      className={`flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm ${
                        isActive ? "text-primary" : "text-[#4c669a] dark:text-gray-400"
                      } hover:text-primary`}
                      onClick={() => {
                        setPage(1);
                        setActiveCategory(isActive ? null : category.name);
                      }}>
                      <span>{category.name}</span>
                      <Badge variant="secondary">{category.count}</Badge>
                    </button>
                  );
                  })}
                </div>
              </PanelCard>
              <PanelCard
                className="shadow-sm"
                title="Popular Tags"
                titleClassName="text-lg font-bold text-[#0d121b] dark:text-white">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => {
                    const isActive = activeTag === tag;
                    return (
                      <Button
                        key={tag}
                        onClick={() => {
                          setPage(1);
                          setActiveTag(isActive ? null : tag);
                        }}
                        size="sm"
                        variant={isActive ? "default" : "outline"}>
                        {tag}
                      </Button>
                    );
                  })}
                </div>
              </PanelCard>
              <PanelCard
                className="shadow-sm"
                title="Top Authors"
                titleClassName="text-lg font-bold text-[#0d121b] dark:text-white">
                <div className="flex flex-col gap-4">
                  {posts.slice(0, 3).map((post) => (
                    <div className="flex items-center gap-3" key={post.author.name}>
                      <Avatar className="size-10">
                        <AvatarImage alt={post.author.name} src={post.author.avatar} />
                        <AvatarFallback>{post.author.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-[#0d121b] dark:text-white">{post.author.name}</span>
                        <span className="text-xs text-[#4c669a] dark:text-gray-400">{post.author.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </PanelCard>
              <PanelCard
                className="bg-primary text-white shadow-sm"
                title="Weekly Digest"
                titleClassName="text-lg font-bold">
                <p className="text-sm text-blue-100 mb-4 leading-relaxed">
                  Get the best coding tutorials delivered straight to your inbox.
                </p>
                <Button className="w-full" onClick={handleSubscribe} variant="secondary">
                  Subscribe Now
                </Button>
              </PanelCard>
            </aside>
          </div>
        </div>
        <PublicFooter />
        <BlogBriefModal onOpenChange={setIsModalOpen} open={isModalOpen} post={selectedPost} />
        </div>
      </PageTransition>
    </div>
  );
};

export default LibraryPage;

