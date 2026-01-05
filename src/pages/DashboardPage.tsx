import { Link } from "@tanstack/react-router";

import UserLayout from "../components/layouts/UserLayout";
import MaterialIcon from "../components/atoms/MaterialIcon";
import { slugify } from "../lib/utils";

const stats = [
  {
    label: "Courses in Progress",
    value: "3",
    icon: "school",
    iconClass: "text-primary bg-primary/10",
  },
  {
    label: "Badges Earned",
    value: "12",
    icon: "military_tech",
    iconClass: "text-amber-500 bg-amber-500/10",
  },
  {
    label: "Reading Time",
    value: "45h",
    icon: "timer",
    iconClass: "text-emerald-500 bg-emerald-500/10",
  },
];

const continueReading = [
  {
    title: "Advanced State Management in 2024",
    category: "React",
    categoryClass: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
    updated: "Updated 2h ago",
    progress: 65,
    timeLeft: "5 min left",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBp6FiMHdIiZqlOVOXIngTsu9dF2lqGX78j_4nrA1WFsDcjjRGEMKdB_xFQ95tRlktAtMTsrsGPlousKtBVb4wkGgo6g0k2cYAyfuFF4RWlGUp7eBP2Dh7pUKquZvKR5_I98mlS16Z4ztNJ8Ij3vz7Ysg0d02QERCC-zPaU1UaxqP7k7DRgP4x1x_gMEcVsKHGGaXi0fMRNWAyVHzYmtkWnrlU7qDFLz_VT5VCqmfFXvgKdWh7Rl_msR36Wx6lpELFn4fBNfGjcEsXr",
  },
  {
    title: "Principles of User Interface Design",
    category: "Design",
    categoryClass: "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300",
    updated: "Updated 1d ago",
    progress: 30,
    timeLeft: "12 min left",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzn0Yg4uMmd9SmlvGFoqpI_4AH9DMn3X-cVHWyerM1hNyZWIM4wlkqxDSS0SXu2f4TnKafWHdrK1Dj3VpIJLOQP1RtDKyIGDbO0UuNJIFctGMtY4cQMFhEu33j_mxaMT1gfH9UDna4njSWKLfjynrY-hwADimwzNLgYcFrR9hOpYxpP8BbpLapzeIK6xzabW_IUh6juNey-w-7budGeJ3RCW2-vKcLU4eynrc6q4KmlQuWPbCGrjCUJozW_wl-pCs4KkN4V5FgcULQ",
  },
];

const folders = [
  { title: "Web Dev", count: "12 items", iconColor: "text-amber-400" },
  { title: "Data Science", count: "8 items", iconColor: "text-purple-400" },
  { title: "UX Research", count: "4 items", iconColor: "text-cyan-400" },
];

const recommended = [
  {
    title: "Mastering Python Decorators",
    readTime: "10 min read",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmng-DSXrNWrkjZnLXtfcHmdn2pG0159L0mCdWgft3Id2AxZp6ADUoLjoh1MtN72ne2Y9F9v5cO1SkNki0EJxwuLpaOFHJOhDyQ-nx4R0PMBi30HxA1CrFOSN_TtTqHTYVa2TMFnaXcGBUbE1tBqq4w3-uYThaKWjEg9hIDLN6ua2uAZI59bNaUWcvW0LE5vSJjsU0lX0ac2pkEhQQfjKIZfS6CJcMwFfEcKe62kTAFg83BxViUmpfltD7pnQLjEvExdSEvNHy6K1p",
  },
  {
    title: "Advanced State Management in 2024",
    readTime: "9 min read",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBp6FiMHdIiZqlOVOXIngTsu9dF2lqGX78j_4nrA1WFsDcjjRGEMKdB_xFQ95tRlktAtMTsrsGPlousKtBVb4wkGgo6g0k2cYAyfuFF4RWlGUp7eBP2Dh7pUKquZvKR5_I98mlS16Z4ztNJ8Ij3vz7Ysg0d02QERCC-zPaU1UaxqP7k7DRgP4x1x_gMEcVsKHGGaXi0fMRNWAyVHzYmtkWnrlU7qDFLz_VT5VCqmfFXvgKdWh7Rl_msR36Wx6lpELFn4fBNfGjcEsXr",
  },
  {
    title: "Understanding Neural Networks",
    readTime: "15 min read",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3lTaKDQU9d_uUV0IzgMHg32pCt4B_eUg2fficyQzRtk3bBO30r36Hq6SrC96v4G3nyUPXsWZj7qaz91zvlxRBxWg_Ds-gxwoPQOLi10P7R09V45cOrZJIY6RVdt30hjCjnvdMLAnsZghZ9CNuUhdRRbbvqL-gIud1Ih_0n_MaxUMCBBKx2iWZ8ptcFjUR-taW2Ff7GLzgU_R2qffl62U_x_HXj5QvKEUS0G7hHG3T4bwOH9jnomnXWEc34th38VQenh4fXt4WXgI4",
  },
];

const DashboardPage = () => {
  return (
    <UserLayout activeNav="dashboard" searchPlaceholder="Search for courses, articles, or tags...">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Welcome back, Alex!</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base">
              You have 3 posts in progress and earned 2 new badges this week.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              className="bg-white dark:bg-[#1a2234] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-1 hover:border-primary/50 transition-colors cursor-default group"
              key={stat.label}
            >
              <div className="flex items-center justify-between">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
                <span className={`material-symbols-outlined ${stat.iconClass} p-1.5 rounded-lg group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </span>
              </div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{stat.value}</p>
            </div>
          ))}
          <div className="bg-primary p-5 rounded-xl border border-primary shadow-sm flex flex-col justify-center items-center gap-2 text-center text-white cursor-pointer hover:bg-primary/90 transition-colors">
            <MaterialIcon className="text-3xl" name="add_circle" />
            <p className="text-sm font-bold">Explore New Topics</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Continue Reading</h2>
                <button className="text-sm font-medium text-primary hover:text-primary/80" type="button">
                  View all
                </button>
              </div>
              <div className="flex flex-col gap-3">
                {continueReading.map((item) => {
                  const slug = slugify(item.title);
                  return (
                    <Link
                      className="bg-white dark:bg-[#1a2234] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex gap-4 hover:shadow-md transition-shadow"
                      key={item.title}
                      params={{ slug }}
                      to="/library/$slug"
                    >
                      <div
                        className="w-24 h-24 sm:w-32 sm:h-24 shrink-0 rounded-lg bg-center bg-cover"
                        data-alt={item.title}
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                      <div className="flex flex-col justify-between flex-1 py-1">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`${item.categoryClass} text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider`}
                            >
                              {item.category}
                            </span>
                            <span className="text-slate-400 text-xs">{item.updated}</span>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight line-clamp-1">
                            {item.title}
                          </h3>
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                            <span>{item.progress}% Completed</span>
                            <span>{item.timeLeft}</span>
                          </div>
                          <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: `${item.progress}%` }} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">My Folders</h2>
                <button className="text-slate-500 hover:text-primary transition-colors" type="button">
                  <MaterialIcon name="add" />
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {folders.map((folder) => (
                  <div
                    className="bg-white dark:bg-[#1a2234] p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary hover:shadow-md transition-all cursor-pointer group flex flex-col gap-3"
                    key={folder.title}
                  >
                    <MaterialIcon className={`text-4xl ${folder.iconColor} group-hover:scale-110 transition-transform origin-left`} name="folder" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">{folder.title}</h4>
                      <p className="text-xs text-slate-500">{folder.count}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <MaterialIcon className="text-yellow-300" name="bolt" />
                  <span className="font-bold text-sm uppercase tracking-wide opacity-90">Daily Challenge</span>
                </div>
                <h3 className="text-xl font-bold leading-tight">Complete the "Javascript Basics" quiz.</h3>
                <button
                  className="mt-2 bg-white text-primary text-sm font-bold py-2 px-4 rounded-lg w-max hover:bg-opacity-90 transition-colors"
                  type="button"
                >
                  Start Quiz
                </button>
              </div>
              <MaterialIcon className="absolute -bottom-4 -right-4 text-9xl text-white opacity-10" name="quiz" />
            </div>

            <div className="bg-white dark:bg-[#1a2234] rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">Recommended for You</h3>
              <div className="flex flex-col gap-4">
                {recommended.map((item, index) => {
                  const slug = slugify(item.title);
                  return (
                  <div key={item.title}>
                    <Link className="flex gap-3 group" params={{ slug }} to="/library/$slug">
                      <div
                        className="size-12 rounded-lg bg-cover bg-center shrink-0"
                        data-alt={item.title}
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">{item.readTime}</p>
                      </div>
                    </Link>
                    {index < recommended.length - 1 ? (
                      <hr className="border-slate-100 dark:border-slate-700 mt-4" />
                    ) : null}
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default DashboardPage;

