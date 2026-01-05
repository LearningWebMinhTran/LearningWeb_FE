import { Link } from "@tanstack/react-router";

import UserLayout from "../../components/layouts/UserLayout";
import MaterialIcon from "../../components/atoms/MaterialIcon";
import { slugify } from "../../lib/utils";

const posts = [
  {
    title: "Advanced State Management in 2024",
    folder: "Development",
    status: "Published",
    statusClass:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20",
    date: "Oct 24, 2023",
    time: "10:42 AM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBp6FiMHdIiZqlOVOXIngTsu9dF2lqGX78j_4nrA1WFsDcjjRGEMKdB_xFQ95tRlktAtMTsrsGPlousKtBVb4wkGgo6g0k2cYAyfuFF4RWlGUp7eBP2Dh7pUKquZvKR5_I98mlS16Z4ztNJ8Ij3vz7Ysg0d02QERCC-zPaU1UaxqP7k7DRgP4x1x_gMEcVsKHGGaXi0fMRNWAyVHzYmtkWnrlU7qDFLz_VT5VCqmfFXvgKdWh7Rl_msR36Wx6lpELFn4fBNfGjcEsXr",
  },
  {
    title: "Mastering Python Decorators",
    folder: "Data Science",
    status: "Pending Review",
    statusClass:
      "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20",
    date: "Nov 02, 2023",
    time: "Submitted 2h ago",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmng-DSXrNWrkjZnLXtfcHmdn2pG0159L0mCdWgft3Id2AxZp6ADUoLjoh1MtN72ne2Y9F9v5cO1SkNki0EJxwuLpaOFHJOhDyQ-nx4R0PMBi30HxA1CrFOSN_TtTqHTYVa2TMFnaXcGBUbE1tBqq4w3-uYThaKWjEg9hIDLN6ua2uAZI59bNaUWcvW0LE5vSJjsU0lX0ac2pkEhQQfjKIZfS6CJcMwFfEcKe62kTAFg83BxViUmpfltD7pnQLjEvExdSEvNHy6K1p",
  },
  {
    title: "Principles of User Interface Design",
    folder: "Design",
    status: "Draft",
    statusClass: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600",
    date: "--",
    time: "Last edited 1d ago",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzn0Yg4uMmd9SmlvGFoqpI_4AH9DMn3X-cVHWyerM1hNyZWIM4wlkqxDSS0SXu2f4TnKafWHdrK1Dj3VpIJLOQP1RtDKyIGDbO0UuNJIFctGMtY4cQMFhEu33j_mxaMT1gfH9UDna4njSWKLfjynrY-hwADimwzNLgYcFrR9hOpYxpP8BbpLapzeIK6xzabW_IUh6juNey-w-7budGeJ3RCW2-vKcLU4eynrc6q4KmlQuWPbCGrjCUJozW_wl-pCs4KkN4V5FgcULQ",
    isDraft: true,
  },
  {
    title: "Understanding Neural Networks",
    folder: "AI & ML",
    status: "Published",
    statusClass:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20",
    date: "Sep 15, 2023",
    time: "8:10 AM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3lTaKDQU9d_uUV0IzgMHg32pCt4B_eUg2fficyQzRtk3bBO30r36Hq6SrC96v4G3nyUPXsWZj7qaz91zvlxRBxWg_Ds-gxwoPQOLi10P7R09V45cOrZJIY6RVdt30hjCjnvdMLAnsZghZ9CNuUhdRRbbvqL-gIud1Ih_0n_MaxUMCBBKx2iWZ8ptcFjUR-taW2Ff7GLzgU_R2qffl62U_x_HXj5QvKEUS0G7hHG3T4bwOH9jnomnXWEc34th38VQenh4fXt4WXgI4",
  },
];

const UserMyPostPage = () => {
  return (
    <UserLayout activeNav="my-posts" searchPlaceholder="Search site...">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">My Posts</h1>
            <p className="text-slate-500 dark:text-slate-400">
              Manage your blog content, view status, and track engagement.
            </p>
          </div>
          <button
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold py-2.5 px-5 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
            type="button"
          >
            <MaterialIcon className="text-lg" name="edit_note" />
            Create New Post
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 bg-white dark:bg-[#1a2234] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="relative flex-1">
            <MaterialIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" name="search" />
            <input
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary"
              placeholder="Search your posts..."
              type="text"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-1 lg:pb-0">
            <select className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 min-w-[140px]">
              <option>All Statuses</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="pending">Pending Review</option>
            </select>
            <select className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 min-w-[140px]">
              <option>All Folders</option>
              <option value="web-dev">Web Dev</option>
              <option value="data-science">Data Science</option>
              <option value="design">Design</option>
            </select>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1a2234] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-500 dark:text-slate-400">
              <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs uppercase text-slate-700 dark:text-slate-300 font-bold">
                <tr>
                  <th className="px-6 py-4" scope="col">
                    Post Details
                  </th>
                  <th className="px-6 py-4" scope="col">
                    Status
                  </th>
                  <th className="px-6 py-4" scope="col">
                    Date
                  </th>
                  <th className="px-6 py-4 text-right" scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {posts.map((post) => {
                  const slug = slugify(post.title);
                  return (
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group" key={post.title}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-12 rounded bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-700 ${
                            post.isDraft ? "opacity-70" : ""
                          }`}
                          style={{ backgroundImage: `url('${post.image}')` }}
                        />
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white text-base">
                            {post.isDraft ? (
                              <span className="group-hover:text-primary transition-colors">{post.title}</span>
                            ) : (
                              <Link
                                className="group-hover:text-primary transition-colors"
                                params={{ slug }}
                                to="/library/$slug"
                              >
                                {post.title}
                              </Link>
                            )}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <MaterialIcon className="text-[14px]" name="folder" />
                            <span className="text-xs">{post.folder}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${post.statusClass}`}>
                        <span className="size-1.5 rounded-full bg-current"></span>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-slate-900 dark:text-white font-medium">{post.date}</span>
                        <span className="text-xs">{post.time}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {post.isDraft ? (
                          <button
                            className="p-2 rounded-lg transition-colors text-slate-300 cursor-not-allowed"
                            disabled
                            title="View"
                            type="button"
                          >
                            <MaterialIcon className="text-lg" name="visibility_off" />
                          </button>
                        ) : (
                          <Link
                            className="p-2 rounded-lg transition-colors text-slate-500 hover:text-primary hover:bg-primary/10"
                            params={{ slug }}
                            title="View"
                            to="/library/$slug"
                          >
                            <MaterialIcon className="text-lg" name="visibility" />
                          </Link>
                        )}
                        <button
                          className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-600/10 rounded-lg transition-colors"
                          title="Edit"
                          type="button"
                        >
                          <MaterialIcon className="text-lg" name="edit" />
                        </button>
                        <button
                          className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-600/10 rounded-lg transition-colors"
                          title="Delete"
                          type="button"
                        >
                          <MaterialIcon className="text-lg" name="delete" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="bg-white dark:bg-[#1a2234] p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Showing <span className="font-bold text-slate-900 dark:text-white">1-5</span> of{" "}
              <span className="font-bold text-slate-900 dark:text-white">12</span> posts
            </span>
            <div className="flex gap-2">
              <button
                className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50"
                disabled
                type="button"
              >
                Previous
              </button>
              <button
                className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800"
                type="button"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserMyPostPage;
