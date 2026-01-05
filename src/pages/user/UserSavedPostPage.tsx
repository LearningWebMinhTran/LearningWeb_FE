import { Link } from "@tanstack/react-router";

import UserLayout from "../../components/layouts/UserLayout";
import MaterialIcon from "../../components/atoms/MaterialIcon";
import { slugify } from "../../lib/utils";

const savedPosts = [
  {
    title: "Advanced State Management in 2024",
    category: "Development",
    date: "Oct 24, 2023",
    readTime: "9 min read",
    excerpt:
      "Explore the newest patterns in React state management, including Context API updates, Redux Toolkit, and atomic state libraries.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBp6FiMHdIiZqlOVOXIngTsu9dF2lqGX78j_4nrA1WFsDcjjRGEMKdB_xFQ95tRlktAtMTsrsGPlousKtBVb4wkGgo6g0k2cYAyfuFF4RWlGUp7eBP2Dh7pUKquZvKR5_I98mlS16Z4ztNJ8Ij3vz7Ysg0d02QERCC-zPaU1UaxqP7k7DRgP4x1x_gMEcVsKHGGaXi0fMRNWAyVHzYmtkWnrlU7qDFLz_VT5VCqmfFXvgKdWh7Rl_msR36Wx6lpELFn4fBNfGjcEsXr",
  },
  {
    title: "Mastering Python Decorators",
    category: "Data Science",
    date: "Oct 22, 2023",
    readTime: "8 min read",
    excerpt:
      "Decorators are a significant part of Python. This guide breaks them down step-by-step with practical examples.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmng-DSXrNWrkjZnLXtfcHmdn2pG0159L0mCdWgft3Id2AxZp6ADUoLjoh1MtN72ne2Y9F9v5cO1SkNki0EJxwuLpaOFHJOhDyQ-nx4R0PMBi30HxA1CrFOSN_TtTqHTYVa2TMFnaXcGBUbE1tBqq4w3-uYThaKWjEg9hIDLN6ua2uAZI59bNaUWcvW0LE5vSJjsU0lX0ac2pkEhQQfjKIZfS6CJcMwFfEcKe62kTAFg83BxViUmpfltD7pnQLjEvExdSEvNHy6K1p",
  },
  {
    title: "Understanding Neural Networks",
    category: "AI & ML",
    date: "Sep 15, 2023",
    readTime: "12 min read",
    excerpt:
      "A deep dive into backpropagation and activation functions with practical visual intuition.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3lTaKDQU9d_uUV0IzgMHg32pCt4B_eUg2fficyQzRtk3bBO30r36Hq6SrC96v4G3nyUPXsWZj7qaz91zvlxRBxWg_Ds-gxwoPQOLi10P7R09V45cOrZJIY6RVdt30hjCjnvdMLAnsZghZ9CNuUhdRRbbvqL-gIud1Ih_0n_MaxUMCBBKx2iWZ8ptcFjUR-taW2Ff7GLzgU_R2qffl62U_x_HXj5QvKEUS0G7hHG3T4bwOH9jnomnXWEc34th38VQenh4fXt4WXgI4",
  },
];

const UserSavedPostPage = () => {
  return (
    <UserLayout activeNav="saved">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Saved Posts</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Your personal reading list. Pick up where you left off anytime.
          </p>
        </div>

        <div className="grid gap-4">
          {savedPosts.map((post) => {
            const slug = slugify(post.title);
            return (
            <div
              className="bg-white dark:bg-[#1a2234] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-6 p-5"
              key={post.title}
            >
              <Link className="block" params={{ slug }} to="/library/$slug">
                <div
                  className="w-full md:w-56 h-40 shrink-0 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
              </Link>
              <div className="flex flex-col flex-1 gap-3">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <MaterialIcon className="text-[14px]" name="calendar_today" />
                    {post.date}
                  </span>
                  <span className="size-1 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1">
                    <MaterialIcon className="text-[14px]" name="schedule" />
                    {post.readTime}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</p>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    <Link className="hover:text-primary transition-colors" params={{ slug }} to="/library/$slug">
                      {post.title}
                    </Link>
                  </h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{post.excerpt}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <Link
                    className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                    params={{ slug }}
                    to="/library/$slug"
                  >
                    Read Now
                  </Link>
                  <button
                    className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </UserLayout>
  );
};

export default UserSavedPostPage;
