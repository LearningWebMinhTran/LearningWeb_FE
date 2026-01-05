import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { ArrowRight, RefreshCw, Star } from "lucide-react";

import HomeArticleCard from "../components/organisms/HomeArticleCard";
import UserNavbar from "../components/organisms/UserNavbar";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { featuredPost, latestPosts } from "../data/posts";

const HomePage = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const visiblePosts = useMemo(() => latestPosts.slice(0, visibleCount), [visibleCount]);
  const canLoadMore = visibleCount < latestPosts.length;

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0d121b] antialiased overflow-x-hidden">
      <div className="relative flex min-h-screen w-full flex-col">
        <UserNavbar />
        <main className="flex-1 flex flex-col items-center w-full">
          <section className="w-full bg-gradient-to-b from-[#f0f4fc] to-transparent py-12 md:py-20 px-4">
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
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGx9H4nnFn9aeXosFIw3EICJ3A6X6qZS368XmLYw_5DXYJn--zuGHwmTRk2VsEAYLQsz4P3tq9JVo6qXKXfhEpAnyHycmW7eWeempM6IZg0X_2vD17D_HribheYY2gE7dBM27j8NGfO5RkjsaEz5zzmNvPkLn0MLBHOkj0ArwNW1oPtV5HAv6P_3yLD3gp8MQ1OYSRnA-YzWetR_i9vVKN3RaDfkofnCDJe_eX5hOInatwFyOGE1AypoJ2_gcd6UVnfeK8XdbZRGio')",
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
                  <Link
                    className="mb-3 text-2xl font-bold text-[#0d121b] dark:text-white md:text-3xl hover:text-primary transition-colors"
                    to={`/posts/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
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
                      <Link to={`/posts/${featuredPost.slug}`}>
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
                  href={`/posts/${article.slug}`}
                  imageAlt={article.imageAlt}
                  imageUrl={article.imageUrl}
                  metaLabel={article.dateLabel}
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
        <footer className="w-full border-t border-[#e7ebf3] bg-white py-12 dark:bg-[#101622] dark:border-slate-800">
          <div className="mx-auto max-w-[1280px] px-4">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[#0d121b] dark:text-white">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    E
                  </span>
                  <span className="text-xl font-bold tracking-tight">EduBlog</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Empowering learners worldwide with free, high-quality educational content.
                </p>
                <div className="flex gap-4 mt-2 text-slate-400">
                  <span>Blog</span>
                  <span>Newsletter</span>
                  <span>RSS</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-[#0d121b] dark:text-white">Explore</h4>
                <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/courses">
                  Programming
                </Link>
                <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/library">
                  Data Science
                </Link>
                <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/library">
                  Humanities
                </Link>
                <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/library">
                  Productivity
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-[#0d121b] dark:text-white">Company</h4>
                <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/about">
                  About Us
                </Link>
                <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/courses">
                  Courses
                </Link>
                <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/community">
                  Community
                </Link>
                <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/contact">
                  Contact
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-[#0d121b] dark:text-white">Stay Updated</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Get the latest articles sent right to your inbox.
                </p>
                <form
                  className="flex flex-col gap-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    toast.success("Thanks for subscribing!");
                  }}>
                  <Input placeholder="Your email address" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
            <div className="mt-12 flex flex-col items-center justify-between border-t border-[#e7ebf3] pt-8 sm:flex-row dark:border-slate-800">
              <p className="text-xs text-slate-400">c 2024 EduBlog Inc. All rights reserved.</p>
              <p className="text-xs text-slate-400 mt-2 sm:mt-0">Powered by MongoDB</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;

