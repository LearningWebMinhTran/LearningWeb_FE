import { useEffect, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";

import UserLayout from "../../components/layouts/UserLayout";
import MaterialIcon from "../../components/atoms/MaterialIcon";
import { slugify } from "../../lib/utils";

const results = [
  {
    title: "Advanced State Management in 2024",
    category: "Development",
    categoryClass: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    level: "Intermediate",
    levelIcon: "signal_cellular_alt",
    date: "Oct 24, 2023",
    excerpt:
      "Explore the newest patterns in React state management, including Context API updates, Redux Toolkit, and atomic state libraries like Recoil and Jotai.",
    author: "John Doe",
    authorInitials: "JD",
    tags: ["#React", "#Frontend"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBp6FiMHdIiZqlOVOXIngTsu9dF2lqGX78j_4nrA1WFsDcjjRGEMKdB_xFQ95tRlktAtMTsrsGPlousKtBVb4wkGgo6g0k2cYAyfuFF4RWlGUp7eBP2Dh7pUKquZvKR5_I98mlS16Z4ztNJ8Ij3vz7Ysg0d02QERCC-zPaU1UaxqP7k7DRgP4x1x_gMEcVsKHGGaXi0fMRNWAyVHzYmtkWnrlU7qDFLz_VT5VCqmfFXvgKdWh7Rl_msR36Wx6lpELFn4fBNfGjcEsXr",
  },
  {
    title: "Mastering Python Decorators",
    category: "Data Science",
    categoryClass: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    level: "Beginner",
    levelIcon: "signal_cellular_alt_1_bar",
    date: "Oct 22, 2023",
    excerpt:
      "Decorators are a significant part of Python. This guide breaks them down step-by-step with practical examples.",
    author: "Alex Learner",
    authorInitials: "AL",
    tags: ["#Python", "#Coding"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmng-DSXrNWrkjZnLXtfcHmdn2pG0159L0mCdWgft3Id2AxZp6ADUoLjoh1MtN72ne2Y9F9v5cO1SkNki0EJxwuLpaOFHJOhDyQ-nx4R0PMBi30HxA1CrFOSN_TtTqHTYVa2TMFnaXcGBUbE1tBqq4w3-uYThaKWjEg9hIDLN6ua2uAZI59bNaUWcvW0LE5vSJjsU0lX0ac2pkEhQQfjKIZfS6CJcMwFfEcKe62kTAFg83BxViUmpfltD7pnQLjEvExdSEvNHy6K1p",
  },
  {
    title: "Principles of User Interface Design",
    category: "Design",
    categoryClass: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    level: "Intermediate",
    levelIcon: "signal_cellular_alt_2_bar",
    date: "Oct 18, 2023",
    excerpt:
      "We explore the 10 heuristics of UI design and how to apply them to modern web applications.",
    author: "Mia Kim",
    authorInitials: "MK",
    tags: ["#UIUX", "#Design"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzn0Yg4uMmd9SmlvGFoqpI_4AH9DMn3X-cVHWyerM1hNyZWIM4wlkqxDSS0SXu2f4TnKafWHdrK1Dj3VpIJLOQP1RtDKyIGDbO0UuNJIFctGMtY4cQMFhEu33j_mxaMT1gfH9UDna4njSWKLfjynrY-hwADimwzNLgYcFrR9hOpYxpP8BbpLapzeIK6xzabW_IUh6juNey-w-7budGeJ3RCW2-vKcLU4eynrc6q4KmlQuWPbCGrjCUJozW_wl-pCs4KkN4V5FgcULQ",
  },
  {
    title: "Understanding Neural Networks",
    category: "AI & ML",
    categoryClass: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    level: "Advanced",
    levelIcon: "signal_cellular_alt",
    date: "Sep 15, 2023",
    excerpt:
      "A deep dive into backpropagation and activation functions with practical visual intuition.",
    author: "Dr. Ross",
    authorInitials: "DR",
    tags: ["#AI", "#DeepLearning"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3lTaKDQU9d_uUV0IzgMHg32pCt4B_eUg2fficyQzRtk3bBO30r36Hq6SrC96v4G3nyUPXsWZj7qaz91zvlxRBxWg_Ds-gxwoPQOLi10P7R09V45cOrZJIY6RVdt30hjCjnvdMLAnsZghZ9CNuUhdRRbbvqL-gIud1Ih_0n_MaxUMCBBKx2iWZ8ptcFjUR-taW2Ff7GLzgU_R2qffl62U_x_HXj5QvKEUS0G7hHG3T4bwOH9jnomnXWEc34th38VQenh4fXt4WXgI4",
  },
];

const UserExplorePage = () => {
  const navigate = useNavigate();
  const searchParams = useRouterState({ select: (state) => state.location.search });
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (typeof searchParams?.q === "string") {
      setSearchValue(searchParams.q);
      return;
    }
    setSearchValue("");
  }, [searchParams?.q]);

  const handleSearch = () => {
    const trimmed = searchValue.trim();
    navigate({
      to: "/dashboard/explore",
      search: trimmed ? { q: trimmed } : {},
    });
  };

  return (
    <UserLayout activeNav="explore">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Explore Content</h1>
            <p className="text-slate-500 dark:text-slate-400">
              Find tutorials, articles, and guides to boost your learning.
            </p>
          </div>
          <div className="bg-white dark:bg-[#1a2234] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
            <div className="relative w-full">
              <MaterialIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-2xl" name="search" />
              <input
                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl text-base text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                onChange={(event) => setSearchValue(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handleSearch();
                  }
                }}
                placeholder="Search by title, topic, or keyword..."
                type="text"
                value={searchValue}
              />
              <button
                className="absolute right-2 top-1.5 bottom-1.5 bg-primary hover:bg-primary/90 text-white px-4 rounded-lg font-medium text-sm transition-colors"
                onClick={handleSearch}
                type="button"
              >
                Search
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              <select className="form-select w-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:ring-primary focus:border-primary">
                <option value="">By Category</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="data">Data Science</option>
              </select>
              <select className="form-select w-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:ring-primary focus:border-primary">
                <option value="">By Tags</option>
                <option value="react">React</option>
                <option value="javascript">JavaScript</option>
                <option value="css">CSS</option>
                <option value="python">Python</option>
              </select>
              <select className="form-select w-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:ring-primary focus:border-primary">
                <option value="">By Author</option>
                <option value="sarah">Sarah Smith</option>
                <option value="mike">Mike Johnson</option>
                <option value="alex">Alex Learner</option>
              </select>
              <select className="form-select w-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:ring-primary focus:border-primary">
                <option value="">Difficulty Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              <select className="form-select w-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:ring-primary focus:border-primary">
                <option value="">Date Range</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            <span className="text-slate-900 dark:text-white font-bold">42</span> results found
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 uppercase font-bold tracking-wider hidden sm:inline">Sort by:</span>
            <select className="form-select py-1 pl-3 pr-8 text-xs bg-transparent border-none text-slate-700 dark:text-slate-300 font-medium focus:ring-0 cursor-pointer">
              <option>Relevance</option>
              <option>Newest First</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {results.map((item) => {
            const slug = slugify(item.title);
            return (
              <Link className="block" key={item.title} params={{ slug }} to="/library/$slug">
                <article className="bg-white dark:bg-[#1a2234] p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:shadow-md transition-all group cursor-pointer flex flex-col sm:flex-row gap-5">
                  <div
                    className="w-full sm:w-48 h-32 sm:h-32 shrink-0 rounded-lg bg-cover bg-center"
                    data-alt={item.title}
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="flex flex-col flex-1 justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span
                          className={`${item.categoryClass} text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider`}
                        >
                          {item.category}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400 text-xs">
                          <MaterialIcon className="text-[14px]" name={item.levelIcon} />
                          {item.level}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400 text-xs ml-auto">
                          <MaterialIcon className="text-[14px]" name="calendar_today" />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">{item.excerpt}</p>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[10px] font-bold">
                          {item.authorInitials}
                        </div>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{item.author}</span>
                      </div>
                      <div className="flex gap-2">
                        {item.tags.map((tag) => (
                          <span
                            className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs"
                            key={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 pt-4 pb-8">
          <button
            className="flex items-center justify-center size-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
            type="button"
          >
            <MaterialIcon className="text-sm" name="arrow_back_ios_new" />
          </button>
          <button className="flex items-center justify-center size-10 rounded-lg bg-primary text-white font-bold shadow-sm shadow-primary/30" type="button">
            1
          </button>
          <button
            className="flex items-center justify-center size-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            type="button"
          >
            2
          </button>
          <button
            className="flex items-center justify-center size-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            type="button"
          >
            3
          </button>
          <span className="text-slate-400 px-2">...</span>
          <button
            className="flex items-center justify-center size-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            type="button"
          >
            8
          </button>
          <button
            className="flex items-center justify-center size-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            type="button"
          >
            <MaterialIcon className="text-sm" name="arrow_forward_ios" />
          </button>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserExplorePage;
