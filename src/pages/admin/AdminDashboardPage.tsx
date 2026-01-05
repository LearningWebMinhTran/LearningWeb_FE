import { Link } from "@tanstack/react-router";

import AdminLayout from "../../components/layouts/AdminLayout";
import MaterialIcon from "../../components/atoms/MaterialIcon";

const AdminDashboardPage = () => {
  const trendingItems = [
    {
      title: "Understanding Modern CSS Grid Layouts",
      meta: "1.2k views - 2 days ago",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1bl0g1IWK-xj8w-0dT1tx72PBxeYtB99xeSTznfPIRPn7t3K7OmmyI8o3hrxNIhRNWYbYPp7ugwUZH8aKhW4_tQJopBnq3s0Z6EK5JIfjEBx82dJc5Ok7_fohn_2Ju9axQ1ryZ3H-Hvipf1Bqa7OsfG-Arb66tw7bswSFqnU7Yi3tBrV4JFBxZ_E493-BrEktso9C2T_o0gROb5zS_Mg3FtoyrliM7nbejq9UU9_ZKy7RtOhBgPmvkUL6qG0y8Sd-R6Gj559Egt4W",
      imageAlt: "Abstract colorful gradient representing post thumbnail",
    },
    {
      title: "JavaScript Async/Await Explained Simply",
      meta: "984 views - 4 days ago",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC0pOvdlZhGX-YduDm7ageBQLX9lIUm4mYhLyaulisd0vR_z8R8e4_tnM3kDLIyEcl33hjpXIj5izeE3MhO_mlDr5QTWKT299Rw-kqnU_JtV1pe0xTaxedesr37t90GXIXQYRQBzXfCsi2A_20C3WVJ19sGHKutqqP4HPpDxj9mBRqm72GC9JncAqqbEiDOp0rVEuQbZtHmQd6PEvTACU13B8W060xJ1zu1d2eaA3uCuBWG74qS5L6DyKJyIPA7rzHRKpaFjkj63ACB",
      imageAlt: "Code syntax highlighting close up",
    },
    {
      title: "10 Tips for Better Study Habits",
      meta: "856 views - 1 week ago",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCm5ylc2B3dNINCBXVDTe2v7jTI8E8OE01rtC0L-_0NEqrrATQsIlwosvf0BPVs8ZZU3MiuwjIcSipr31UOZNfk3O010Pi4sg2OiZb8YdVi4YySSIf8iB2CQi0l2EN_g00iqXTuyiAukMWKp-mof-qPm6NlV63Ul4x2xJKhp1S8B0uJGo45jsBDR7m2cGMRd1JCI83PH_vk0gXZb8neydGCbN_zksNInsl7dBkWmMt1ronuas6-pKpEFjdec36gOWC2_oGi8sJURgg9",
      imageAlt: "Abstract geometric shapes",
    },
  ];

  return (
    <AdminLayout activeNav="dashboard" searchPlaceholder="Search posts, users, or comments...">
      <div className="mx-auto max-w-7xl flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Welcome back, here is what is happening with your blog today.
            </p>
          </div>
          <Link
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-medium shadow-sm shadow-primary/30 transition-all active:scale-95"
            to="/upload">
            <MaterialIcon className="text-[20px]" name="add" />
            <span>Write New Post</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-1 relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-lg">
                <MaterialIcon name="article" />
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                +2 this week
              </span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-4">124</h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Published Posts</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-1 relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                <MaterialIcon name="school" />
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                +12%
              </span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-4">1,205</h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Registered Students</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-1 relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg">
                <MaterialIcon name="visibility" />
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                +5.4k
              </span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-4">45.2k</h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Views</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-1 relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg">
                <MaterialIcon name="chat_bubble" />
              </div>
              <span className="text-xs font-medium text-orange-600 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-full">
                Action Needed
              </span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-4">5</h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Pending Comments</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Engagement Overview</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Weekly views performance</p>
              </div>
              <select
                className="bg-slate-50 dark:bg-slate-900 border-none text-sm font-medium text-slate-600 dark:text-slate-300 rounded-lg focus:ring-0 cursor-pointer"
                defaultValue="7">
                <option value="7">Last 7 Days</option>
                <option value="30">Last 30 Days</option>
              </select>
            </div>
            <div className="relative h-64 w-full mt-4">
              <div className="absolute bottom-0 left-0 right-0 top-0 flex items-end justify-between gap-2 pt-8">
                {[
                  { day: "Mon", height: "h-[40%]" },
                  { day: "Tue", height: "h-[65%]" },
                  { day: "Wed", height: "h-[55%]" },
                  { day: "Thu", height: "h-[80%]" },
                  { day: "Fri", height: "h-[95%]", highlight: true },
                  { day: "Sat", height: "h-[45%]" },
                  { day: "Sun", height: "h-[30%]" },
                ].map((bar) => (
                  <div className="group relative flex w-full flex-col items-center gap-2" key={bar.day}>
                    <div
                      className={
                        bar.highlight
                          ? "w-full max-w-[40px] rounded-t-lg bg-primary group-hover:bg-primary-dark transition-all h-[95%] shadow-[0_0_15px_-3px_rgba(19,127,236,0.3)]"
                          : `w-full max-w-[40px] rounded-t-lg bg-slate-100 dark:bg-slate-700 group-hover:bg-primary/30 transition-all ${bar.height}`
                      }
                    ></div>
                    <span
                      className={
                        bar.highlight
                          ? "text-xs font-bold text-primary"
                          : "text-xs text-slate-400"
                      }>
                      {bar.day}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    className="border-t border-dashed border-slate-200 dark:border-slate-700 w-full"
                    key={`grid-${index}`}
                  ></div>
                ))}
                <div className="border-b border-slate-200 dark:border-slate-700 w-full"></div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Trending Content</h3>
            <div className="flex flex-col gap-4">
              {trendingItems.map((item) => (
                <div className="flex gap-4 items-start group" key={item.title}>
                  <div className="h-16 w-20 shrink-0 rounded-lg overflow-hidden bg-slate-200">
                    <img
                      alt={item.imageAlt}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                      src={item.imageUrl}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">{item.meta}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              className="mt-auto w-full py-2.5 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors border border-dashed border-primary/30 mt-6 text-center"
              to="/admin/posts">
              View All Posts
            </Link>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Latest actions performed on the platform</p>
            </div>
            <div className="flex gap-2">
              <button
                className="px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                type="button">
                Filter
              </button>
              <button
                className="px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                type="button">
                Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
              <thead className="bg-slate-50 dark:bg-slate-900/50 text-xs uppercase font-semibold text-slate-500 dark:text-slate-400">
                <tr>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Action</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-right">Option</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                        MK
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">Marcus King</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">New comment on "CSS Grid"</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4">2 mins ago</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:text-primary-dark font-medium text-xs" type="button">
                      Review
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">
                        JL
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">Jessica Lee</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">Registered new account</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">45 mins ago</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" type="button">
                      <MaterialIcon className="text-[18px]" name="more_vert" />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        alt="User"
                        className="h-8 w-8 rounded-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN_ORDb00PevrxJET3EkG2efKPIohzX9wTyUhE8pL_PMxavCcKntvb9exG9XGblz-slfUYSX-4mWFqmm7DwmxhsGlp2rF9Nawt0RBtrOxgCsgkZH_3LPRf3tTkx0mdKHUUPPSbTJMGrKGwWhUuM03pagtC7pbrbZR1fD-9KNvIqdPNymrj_xPxwzprmLSss7-zbWEsnmHmmbbUDEROax5y5ynm4WvWrsDybd_OFficj1f1vRLqMFSK3vnZhZ_f5V3EXx7JtD2n8I6Y"
                      />
                      <span className="font-medium text-slate-900 dark:text-white">David Chen</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">Updated profile settings</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Success
                    </span>
                  </td>
                  <td className="px-6 py-4">2 hours ago</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" type="button">
                      <MaterialIcon className="text-[18px]" name="more_vert" />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-xs">
                        AS
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">Anna Smith</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">Published post "NodeJS Basics"</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Published
                    </span>
                  </td>
                  <td className="px-6 py-4">5 hours ago</td>
                  <td className="px-6 py-4 text-right">
                    <Link className="text-primary hover:text-primary-dark font-medium text-xs" to="/admin/posts">
                      View
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex justify-center">
            <button
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1"
              type="button">
              View Full Activity Log
              <MaterialIcon className="text-[16px]" name="arrow_forward" />
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboardPage;
