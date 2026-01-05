import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { toast } from "sonner";

import UserNavbar from "../components/organisms/UserNavbar";
import MaterialIcon from "../components/atoms/MaterialIcon";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { featuredPost, latestPosts } from "../data/posts";

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

const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const BlogBriefPage = () => {
  const recentPosts = latestPosts.slice(0, 3);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0d121b] dark:text-white min-h-screen flex flex-col overflow-x-hidden">
      <UserNavbar />
      <main className="flex-1 flex flex-col items-center w-full pb-20">
        <motion.section
          className="w-full px-4 sm:px-6 lg:px-8 py-10 max-w-[1280px]"
          initial="hidden"
          animate="show"
          variants={sectionVariants}>
          <motion.div className="mb-10 text-center" variants={fadeUpVariants}>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0d121b] dark:text-white mb-4">
              Discover &amp; Learn
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explore our latest articles, tutorials, and insights to master new skills.
            </p>
          </motion.div>

          <motion.article
            className="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.03),0_10px_25px_rgba(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 mb-16 grid grid-cols-1 lg:grid-cols-2"
            variants={fadeUpVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}>
            <div className="relative w-full min-h-[320px] lg:min-h-[520px] overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${featuredPost.imageUrl}')` }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/95 text-primary font-bold px-3 py-1.5 rounded-lg dark:bg-surface-dark/95 dark:text-white text-xs uppercase tracking-wide shadow-sm flex items-center gap-1">
                  <MaterialIcon className="!text-[16px]" name="star" />
                  Featured
                </Badge>
              </div>
            </div>
            <div className="p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                <Badge className="bg-blue-50 text-blue-700 font-bold px-2.5 py-0.5 rounded-md dark:bg-blue-900/30 dark:text-blue-300 text-xs uppercase">
                  {featuredPost.category}
                </Badge>
                <span className="text-slate-400">&bull;</span>
                <span className="text-slate-500 dark:text-slate-400 font-medium">{featuredPost.dateLabel}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0d121b] dark:text-white mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50/50 dark:bg-blue-900/10 rounded-xl p-5 border border-blue-100 dark:border-blue-800/30">
                  <h3 className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3">
                    <MaterialIcon className="text-primary !text-[18px]" name="lightbulb" />
                    What you will learn
                  </h3>
                  <ul className="space-y-2.5">
                    {learnItems.map((item) => (
                      <li className="flex items-start gap-2.5" key={item}>
                        <MaterialIcon className="text-emerald-500 !text-[18px] shrink-0 mt-0.5" name="check_circle" />
                        <span className="text-sm text-slate-600 dark:text-slate-400 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50/50 dark:bg-orange-900/10 rounded-xl p-5 border border-orange-100 dark:border-orange-800/30">
                  <h3 className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3">
                    <MaterialIcon className="text-orange-500 !text-[18px]" name="fitness_center" />
                    Practice exercises
                  </h3>
                  <ul className="space-y-2.5">
                    {exerciseItems.map((item) => (
                      <li className="flex items-start gap-2.5" key={item.label}>
                        <MaterialIcon className="text-orange-400 !text-[18px] shrink-0 mt-0.5" name={item.icon} />
                        <span className="text-sm text-slate-600 dark:text-slate-400 leading-snug">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-12 w-12 border border-gray-100 dark:border-gray-700">
                    <AvatarImage alt={featuredPost.author.name} src={featuredPost.author.avatar} />
                    <AvatarFallback>{featuredPost.author.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-base font-bold text-[#0d121b] dark:text-white">{featuredPost.author.name}</p>
                    <p className="text-xs text-primary font-bold uppercase tracking-wider">{featuredPost.author.role}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-100 dark:border-gray-800 pt-6">
                  <div className="flex gap-2 flex-wrap">
                    {featuredPost.tags.slice(0, 2).map((tag) => (
                      <span
                        className="px-2 py-1 bg-gray-100 text-slate-500 text-[10px] font-semibold rounded-md dark:bg-gray-800 dark:text-slate-400 uppercase tracking-wide"
                        key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="gap-2">
                    <Link to={`/posts/${featuredPost.slug}`}>
                      Read Article
                      <MaterialIcon className="!text-[18px]" name="arrow_forward" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.section>

        <motion.section
          className="w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]"
          initial="hidden"
          animate="show"
          variants={sectionVariants}>
          <motion.div className="flex items-center justify-between mb-8 border-b border-gray-100 dark:border-gray-800 pb-4" variants={fadeUpVariants}>
            <h3 className="text-2xl font-bold text-[#0d121b] dark:text-white">Latest Posts</h3>
            <Link className="text-sm font-bold text-primary hover:underline hidden sm:block" to="/library">
              View All
            </Link>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={sectionVariants}>
            {recentPosts.map((post) => (
              <motion.article
                className="flex flex-col h-full bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.03),0_10px_25px_rgba(0,0,0,0.04)] border border-gray-100 dark:border-gray-800"
                key={post.slug}
                variants={fadeUpVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}>
                <div className="h-52 w-full overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${post.imageUrl}')` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="absolute top-4 left-4 bg-white/95 dark:bg-surface-dark/95 text-primary font-bold px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-3 gap-2">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{post.dateLabel}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#0d121b] dark:text-white mb-3 line-clamp-2 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        className="px-2 py-0.5 bg-slate-50 text-slate-400 text-[10px] font-medium rounded border border-slate-100 dark:bg-slate-800/50 dark:border-slate-800 dark:text-slate-500"
                        key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2.5">
                      <Avatar className="h-9 w-9 ring-2 ring-white dark:ring-gray-800">
                        <AvatarImage alt={post.author.name} src={post.author.avatar} />
                        <AvatarFallback>{post.author.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <p className="text-xs font-bold text-[#0d121b] dark:text-white">{post.author.name}</p>
                        <p className="text-[10px] text-slate-500 font-medium">{post.author.role}</p>
                      </div>
                    </div>
                    <Button asChild className="text-xs font-bold bg-blue-50 text-primary hover:text-primary-dark dark:bg-blue-900/20" variant="secondary">
                      <Link to={`/posts/${post.slug}`}>
                        Read More
                        <MaterialIcon className="!text-[14px]" name="arrow_forward" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <motion.div className="mt-12 flex justify-center" variants={fadeUpVariants}>
            <Button
              className="gap-2"
              onClick={() => toast.message("More articles are coming soon.")}
              variant="outline">
              Load More Articles
              <MaterialIcon className="!text-[20px]" name="refresh" />
            </Button>
          </motion.div>
        </motion.section>
      </main>

      <footer className="w-full border-t border-[#e7ebf3] bg-white py-12 dark:bg-[#101622] dark:border-slate-800">
        <div className="mx-auto max-w-[1280px] px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#0d121b] dark:text-white">
                <MaterialIcon className="text-primary !text-[28px]" name="school" />
                <span className="text-xl font-bold tracking-tight">EduBlog</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Empowering learners worldwide with free, high-quality educational content. Join our community today.
              </p>
              <div className="flex gap-4 mt-2 text-slate-400">
                <button className="hover:text-primary transition-colors" type="button">
                  <MaterialIcon className="!text-[20px]" name="public" />
                </button>
                <button className="hover:text-primary transition-colors" type="button">
                  <MaterialIcon className="!text-[20px]" name="alternate_email" />
                </button>
                <button className="hover:text-primary transition-colors" type="button">
                  <MaterialIcon className="!text-[20px]" name="rss_feed" />
                </button>
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
                Careers
              </Link>
              <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/about">
                Privacy Policy
              </Link>
              <Link className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/about">
                Terms of Service
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
  );
};

export default BlogBriefPage;
