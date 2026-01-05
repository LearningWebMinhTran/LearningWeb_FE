import AdminLayout from "../../components/layouts/AdminLayout";
import MaterialIcon from "../../components/atoms/MaterialIcon";

const AdminManagePostPage = () => {
  const posts = [
    {
      title: "Understanding Modern CSS Grid Layouts",
      slug: "understanding-css-grid",
      author: "Jane Doe",
      authorAvatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBFQA-fabmgA95keIG9Wfr1yHwV2XIkF60G-0XirxkD1mu6JcKEh_oNYUQB6hlDglW44Z4pI4g1rmL9qHEIS0K2ihcPS1CD5tTugL43PDn48H-DZEHTdwAcBn82g2Oh8KwoON_AHJ8r25J9CL6gsa-uku9GsMXWfiASX0ZYz7pDDEmgobTSfbQjM38gKb6gHgkVNgmEHqFaUwV5UQnRZTo1RI7QUBaal9P78YolomEkXTZd6bS8rUKkewZ_HdAkNtpW4-IHx59vak3A",
      category: "Technology",
      categoryClass:
        "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-100 dark:border-purple-800",
      status: "Published",
      statusClass: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      date: "Oct 24, 2023",
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1bl0g1IWK-xj8w-0dT1tx72PBxeYtB99xeSTznfPIRPn7t3K7OmmyI8o3hrxNIhRNWYbYPp7ugwUZH8aKhW4_tQJopBnq3s0Z6EK5JIfjEBx82dJc5Ok7_fohn_2Ju9axQ1ryZ3H-Hvipf1Bqa7OsfG-Arb66tw7bswSFqnU7Yi3tBrV4JFBxZ_E493-BrEktso9C2T_o0gROb5zS_Mg3FtoyrliM7nbejq9UU9_ZKy7RtOhBgPmvkUL6qG0y8Sd-R6Gj559Egt4W",
    },
    {
      title: "10 Tips for Better Study Habits",
      slug: "10-study-tips",
      author: "Marcus King",
      authorAvatar: null,
      authorInitials: "MK",
      category: "Education",
      categoryClass:
        "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border border-orange-100 dark:border-orange-800",
      status: "Draft",
      statusClass: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
      date: "-",
      thumbnail: null,
    },
    {
      title: "JavaScript Async/Await Explained Simply",
      slug: "js-async-await",
      author: "Anna Smith",
      authorAvatar: null,
      authorInitials: "AS",
      category: "Technology",
      categoryClass:
        "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-100 dark:border-purple-800",
      status: "Published",
      statusClass: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      date: "Oct 22, 2023",
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC0pOvdlZhGX-YduDm7ageBQLX9lIUm4mYhLyaulisd0vR_z8R8e4_tnM3kDLIyEcl33hjpXIj5izeE3MhO_mlDr5QTWKT299Rw-kqnU_JtV1pe0xTaxedesr37t90GXIXQYRQBzXfCsi2A_20C3WVJ19sGHKutqqP4HPpDxj9mBRqm72GC9JncAqqbEiDOp0rVEuQbZtHmQd6PEvTACU13B8W060xJ1zu1d2eaA3uCuBWG74qS5L6DyKJyIPA7rzHRKpaFjkj63ACB",
    },
    {
      title: "The Evolution of Art History",
      slug: "art-history-evolution",
      author: "David Chen",
      authorAvatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAN_ORDb00PevrxJET3EkG2efKPIohzX9wTyUhE8pL_PMxavCcKntvb9exG9XGblz-slfUYSX-4mWFqmm7DwmxhsGlp2rF9Nawt0RBtrOxgCsgkZH_3LPRf3tTkx0mdKHUUPPSbTJMGrKGwWhUuM03pagtC7pbrbZR1fD-9KNvIqdPNymrj_xPxwzprmLSss7-zbWEsnmHmmbbUDEROax5y5ynm4WvWrsDybd_OFficj1f1vRLqMFSK3vnZhZ_f5V3EXx7JtD2n8I6Y",
      category: "History",
      categoryClass:
        "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 border border-red-100 dark:border-red-800",
      status: "Review",
      statusClass: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
      date: "Sep 15, 2023",
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAN_ORDb00PevrxJET3EkG2efKPIohzX9wTyUhE8pL_PMxavCcKntvb9exG9XGblz-slfUYSX-4mWFqmm7DwmxhsGlp2rF9Nawt0RBtrOxgCsgkZH_3LPRf3tTkx0mdKHUUPPSbTJMGrKGwWhUuM03pagtC7pbrbZR1fD-9KNvIqdPNymrj_xPxwzprmLSss7-zbWEsnmHmmbbUDEROax5y5ynm4WvWrsDybd_OFficj1f1vRLqMFSK3vnZhZ_f5V3EXx7JtD2n8I6Y",
    },
    {
      title: "Introduction to MongoDB",
      slug: "mongodb-intro",
      author: "Jane Doe",
      authorAvatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBFQA-fabmgA95keIG9Wfr1yHwV2XIkF60G-0XirxkD1mu6JcKEh_oNYUQB6hlDglW44Z4pI4g1rmL9qHEIS0K2ihcPS1CD5tTugL43PDn48H-DZEHTdwAcBn82g2Oh8KwoON_AHJ8r25J9CL6gsa-uku9GsMXWfiASX0ZYz7pDDEmgobTSfbQjM38gKb6gHgkVNgmEHqFaUwV5UQnRZTo1RI7QUBaal9P78YolomEkXTZd6bS8rUKkewZ_HdAkNtpW4-IHx59vak3A",
      category: "Technology",
      categoryClass:
        "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-100 dark:border-purple-800",
      status: "Published",
      statusClass: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      date: "Oct 20, 2023",
      thumbnail: null,
    },
  ];

  return (
    <AdminLayout activeNav="posts" searchPlaceholder="Global search...">
      <div className="mx-auto max-w-7xl flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Manage Posts</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Organize, edit, and manage all blog content.</p>
          </div>
          <button
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-medium shadow-sm shadow-primary/30 transition-all active:scale-95"
            type="button">
            <MaterialIcon className="text-[20px]" name="add" />
            <span>Create New Post</span>
          </button>
        </div>

        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-80 group">
            <MaterialIcon
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-[20px]"
              name="search"
            />
            <input
              className="w-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-primary rounded-lg pl-10 pr-4 py-2 text-sm transition-all outline-none text-slate-900 dark:text-white placeholder-slate-400"
              placeholder="Search by title..."
              type="text"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400 hidden sm:block">Filter by:</span>
              <select
                className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2 text-slate-700 dark:text-slate-300"
                defaultValue="all">
                <option value="all">All Statuses</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <select
              className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2 text-slate-700 dark:text-slate-300"
              defaultValue="all">
              <option value="all">All Categories</option>
              <option value="technology">Technology</option>
              <option value="education">Education</option>
              <option value="study">Study Tips</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
            <select
              className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2 text-slate-700 dark:text-slate-300"
              defaultValue="all">
              <option value="all">All Authors</option>
              <option value="jane">Jane Doe</option>
              <option value="marcus">Marcus King</option>
              <option value="anna">Anna Smith</option>
            </select>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
              <thead className="bg-slate-50 dark:bg-slate-900/50 text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-6 py-4 w-12">
                    <input
                      className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4 bg-slate-50 dark:bg-slate-900 dark:border-slate-600"
                      type="checkbox"
                    />
                  </th>
                  <th className="px-6 py-4 min-w-[300px]">Title</th>
                  <th className="px-6 py-4">Author</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Publish Date</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {posts.map((post) => (
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group" key={post.slug}>
                    <td className="px-6 py-4">
                      <input
                        className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4 bg-slate-50 dark:bg-slate-900 dark:border-slate-600"
                        type="checkbox"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-14 shrink-0 rounded bg-slate-200 overflow-hidden flex items-center justify-center text-slate-400">
                          {post.thumbnail ? (
                            <img alt="Thumbnail" className="h-full w-full object-cover" src={post.thumbnail} />
                          ) : (
                            <MaterialIcon className="text-lg" name="image" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">
                            {post.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">slug: {post.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {post.authorAvatar ? (
                          <div className="h-6 w-6 rounded-full bg-slate-200 overflow-hidden">
                            <img alt={post.author} className="h-full w-full object-cover" src={post.authorAvatar} />
                          </div>
                        ) : (
                          <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold">
                            {post.authorInitials}
                          </div>
                        )}
                        <span className="text-sm">{post.author}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${post.categoryClass}`}
                      >
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${post.statusClass}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">{post.date}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          className="p-1.5 text-slate-500 hover:text-primary hover:bg-primary/10 rounded transition-colors"
                          title="Edit"
                          type="button">
                          <MaterialIcon className="text-[18px]" name="edit" />
                        </button>
                        <button
                          className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Delete"
                          type="button">
                          <MaterialIcon className="text-[18px]" name="delete" />
                        </button>
                        <button
                          className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 dark:hover:text-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
                          title="View"
                          type="button">
                          <MaterialIcon className="text-[18px]" name="visibility" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to{" "}
              <span className="font-medium text-slate-900 dark:text-white">5</span> of{" "}
              <span className="font-medium text-slate-900 dark:text-white">56</span> results
            </p>
            <nav className="flex items-center gap-1">
              <button
                className="p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 disabled:opacity-50"
                type="button">
                <MaterialIcon className="text-[20px]" name="chevron_left" />
              </button>
              <button className="px-3.5 py-2 text-sm font-medium rounded bg-primary text-white" type="button">
                1
              </button>
              <button
                className="px-3.5 py-2 text-sm font-medium rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
                type="button">
                2
              </button>
              <button
                className="px-3.5 py-2 text-sm font-medium rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
                type="button">
                3
              </button>
              <span className="px-2 text-slate-400">...</span>
              <button
                className="px-3.5 py-2 text-sm font-medium rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
                type="button">
                8
              </button>
              <button
                className="p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400"
                type="button">
                <MaterialIcon className="text-[20px]" name="chevron_right" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminManagePostPage;
