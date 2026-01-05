import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, RefreshCw, Star } from "lucide-react";

import HomeArticleCard from "../components/organisms/HomeArticleCard";
import BlogBriefModal from "../components/organisms/BlogBriefModal";
import UserNavbar from "../components/organisms/UserNavbar";
import PublicFooter from "../components/organisms/PublicFooter";
import PageTransition from "../components/layouts/PageTransition";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { type Post } from "../data/posts";
import { sortPostsByDate } from "../lib/postUtils";
import { usePostsData } from "../lib/usePosts";

const HomePage = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const posts = usePostsData();

  useEffect(() => {
    if (!isModalOpen && selectedPost) {
      const timeout = window.setTimeout(() => setSelectedPost(null), 200);
      return () => window.clearTimeout(timeout);
    }
    return undefined;
  }, [isModalOpen, selectedPost]);

  const sortedPosts = useMemo(() => sortPostsByDate(posts), [posts]);
  const featuredPost = sortedPosts[0] ?? posts[0]!;
  const latestPosts = sortedPosts.slice(1);
  const visiblePosts = useMemo(() => latestPosts.slice(0, visibleCount), [latestPosts, visibleCount]);
  const canLoadMore = visibleCount < latestPosts.length;

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased overflow-x-hidden min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col">
        <UserNavbar />
        <PageTransition className="flex-1 flex flex-col">
          <main className="flex-1 flex flex-col items-center w-full">
            <section className="w-full hero-grid-bg py-12 md:py-20 px-4">
            <div className="mx-auto max-w-[1280px] w-full">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="flex flex-col gap-6 text-center lg:text-left">
                  <div className="space-y-4">
                    <Badge className="bg-blue-100 text-primary dark:bg-blue-900/30 dark:text-blue-300" variant="secondary">
                      New Learning Paths Available
                    </Badge>
                    <h1 className="text-4xl font-black leading-tight tracking-tight text-[#0d121b] sm:text-5xl lg:text-6xl dark:text-white">
                      Expand Your <span className="text-primary">Knowledge</span> Today
                    </h1>
                    <h2 className="text-lg font-normal text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0">
                      Free educational resources for everyone. Master new skills in programming, humanities, and
                      productivity with our expert-curated content.
                    </h2>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button asChild size="lg">
                      <Link to="/library">Start Reading</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link hash="categories" to="/library">
                        Browse Categories
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative w-full aspect-[4/3] lg:aspect-square max-h-[500px] lg:max-h-none mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-100 rounded-2xl rotate-3 transform dark:from-blue-900/40 dark:to-purple-900/40"></div>
                  <div
                    className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden -rotate-3 hover:rotate-0 transition-transform duration-500 ease-out dark:bg-[#1e293b]"
                    data-alt="Student studying with laptop and books abstract illustration"
                    style={{
                      backgroundImage:
                        "url('https://www.oecd.org/adobe/dynamicmedia/deliver/dm-aid--b6f77c0d-41e4-4b16-87cb-81adb2b91d17/learning-environment-1937135203.jpg?quality=80&preferwebp=true')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                      <p className="text-white font-medium text-lg">Join 10,000+ active learners today.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full px-4 py-12 max-w-[1280px]">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#0d121b] dark:text-white flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Featured Post
              </h2>
            </div>
            <Card className="group overflow-hidden rounded-2xl">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    data-alt={featuredPost.imageAlt}
                    style={{
                      backgroundImage: `url('${featuredPost.imageUrl}')`,
                    }}></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-primary" variant="secondary">
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <span>{featuredPost.dateLabel}</span>
                    <span>&bull;</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button
                    className="mb-3 text-left text-2xl font-bold text-[#0d121b] dark:text-white md:text-3xl hover:text-primary transition-colors"
                    onClick={() => {
                      setSelectedPost(featuredPost);
                      setIsModalOpen(true);
                    }}
                    type="button">
                    {featuredPost.title}
                  </button>
                  <p className="mb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage alt={featuredPost.author.name} src={featuredPost.author.avatar} />
                        <AvatarFallback>{featuredPost.author.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-[#0d121b] dark:text-white">
                        {featuredPost.author.name}
                      </p>
                      <p className="text-xs text-slate-500">{featuredPost.author.role}</p>
                    </div>
                  </div>
                    <Button asChild variant="link">
                      <Link to="/library/$slug" params={{ slug: featuredPost.slug }}>
                        Read Article
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </section>
          <section className="w-full px-4 py-8 pb-20 max-w-[1280px]">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#0d121b] dark:text-white">Latest Articles</h2>
              <Button asChild variant="link">
                <Link to="/library">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visiblePosts.map((article) => (
                <HomeArticleCard
                  key={article.slug}
                  authorAlt={article.author.name}
                  authorImage={article.author.avatar}
                  authorName={article.author.name}
                  category={article.category}
                  categoryClassName={article.categoryBadgeClass}
                  excerpt={article.excerpt}
                  imageAlt={article.imageAlt}
                  imageUrl={article.imageUrl}
                  metaLabel={article.dateLabel}
                  onSelect={() => {
                    setSelectedPost(article);
                    setIsModalOpen(true);
                  }}
                  title={article.title}
                />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Button
                className="gap-2"
                disabled={!canLoadMore}
                onClick={() => setVisibleCount(latestPosts.length)}
                variant="outline">
                {canLoadMore ? "Load More Articles" : "All Articles Loaded"}
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
            </section>
          </main>
          <PublicFooter />
          <BlogBriefModal
            isFeatured={selectedPost?.slug === featuredPost.slug}
            onOpenChange={setIsModalOpen}
            open={isModalOpen}
            post={selectedPost}
          />
        </PageTransition>
      </div>
    </div>
  );
};

export default HomePage;
