import AdminLayout from "../../components/layouts/AdminLayout";
import MaterialIcon from "../../components/atoms/MaterialIcon";

const AdminManageUserPage = () => {
  const users = [
    {
      name: "Jane Doe",
      handle: "@janedoe",
      email: "jane.doe@edublog.com",
      role: "Administrator",
      roleClass:
        "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border border-purple-200 dark:border-purple-800",
      date: "Jan 12, 2023",
      avatar: { type: "initials", value: "JD", className: "bg-blue-100 text-blue-600" },
    },
    {
      name: "David Chen",
      handle: "@davidc_code",
      email: "david.chen@example.com",
      role: "Editor",
      roleClass:
        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800",
      date: "Mar 04, 2023",
      avatar: {
        type: "image",
        value:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAN_ORDb00PevrxJET3EkG2efKPIohzX9wTyUhE8pL_PMxavCcKntvb9exG9XGblz-slfUYSX-4mWFqmm7DwmxhsGlp2rF9Nawt0RBtrOxgCsgkZH_3LPRf3tTkx0mdKHUUPPSbTJMGrKGwWhUuM03pagtC7pbrbZR1fD-9KNvIqdPNymrj_xPxwzprmLSss7-zbWEsnmHmmbbUDEROax5y5ynm4WvWrsDybd_OFficj1f1vRLqMFSK3vnZhZ_f5V3EXx7JtD2n8I6Y",
      },
    },
    {
      name: "Anna Smith",
      handle: "@annasmith99",
      email: "anna.smith@university.edu",
      role: "Student",
      roleClass:
        "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800",
      date: "Jun 15, 2023",
      avatar: { type: "initials", value: "AS", className: "bg-green-100 text-green-600" },
    },
    {
      name: "Marcus King",
      handle: "@king_marcus",
      email: "marcus.king@webmail.com",
      role: "Student",
      roleClass:
        "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800",
      date: "Aug 22, 2023",
      avatar: { type: "initials", value: "MK", className: "bg-orange-100 text-orange-600" },
    },
    {
      name: "Jessica Lee",
      handle: "@jessylee",
      email: "jessica.lee@design.net",
      role: "Editor",
      roleClass:
        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800",
      date: "Oct 05, 2023",
      avatar: { type: "initials", value: "JL", className: "bg-pink-100 text-pink-600" },
    },
  ];

  return (
    <AdminLayout activeNav="users" searchPlaceholder="Search global...">
      <div className="mx-auto max-w-7xl flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Manage Users</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              View, edit, and manage user access and permissions.
            </p>
          </div>
          <button
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-medium shadow-sm shadow-primary/30 transition-all active:scale-95"
            type="button">
            <MaterialIcon className="text-[20px]" name="person_add" />
            <span>Add New User</span>
          </button>
        </div>

        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-72">
              <MaterialIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]"
                name="search"
              />
              <input
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-primary/20 rounded-lg pl-10 pr-4 py-2 text-sm transition-all outline-none text-slate-900 dark:text-white placeholder-slate-400"
                placeholder="Find by name or email..."
                type="text"
              />
            </div>
            <div className="relative w-full sm:w-48">
              <select
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-lg focus:ring-primary/20 focus:border-primary block p-2.5"
                defaultValue="all">
                <option value="all">All Roles</option>
                <option value="admin">Administrator</option>
                <option value="editor">Editor</option>
                <option value="student">Student</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2 w-full md:w-auto justify-end">
            <button
              className="px-3 py-2 text-sm font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
              type="button">
              <MaterialIcon className="text-[18px]" name="filter_list" />
              Filter
            </button>
            <button
              className="px-3 py-2 text-sm font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
              type="button">
              <MaterialIcon className="text-[18px]" name="download" />
              Export CSV
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col h-full">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
              <thead className="bg-slate-50 dark:bg-slate-900/50 text-xs uppercase font-semibold text-slate-500 dark:text-slate-400">
                <tr>
                  <th className="px-6 py-4 w-12">
                    <input
                      className="rounded border-slate-300 text-primary focus:ring-primary bg-slate-100 dark:bg-slate-800 dark:border-slate-600"
                      type="checkbox"
                    />
                  </th>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Email Address</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Registration Date</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {users.map((user) => (
                  <tr
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                    key={user.email}>
                    <td className="px-6 py-4">
                      <input
                        className="rounded border-slate-300 text-primary focus:ring-primary bg-slate-100 dark:bg-slate-800 dark:border-slate-600"
                        type="checkbox"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {user.avatar.type === "image" ? (
                          <img
                            alt={user.name}
                            className="h-9 w-9 rounded-full object-cover ring-2 ring-white dark:ring-slate-800"
                            src={user.avatar.value}
                          />
                        ) : (
                          <div
                            className={`h-9 w-9 rounded-full flex items-center justify-center font-bold text-xs ring-2 ring-white dark:ring-slate-800 ${user.avatar.className}`}
                          >
                            {user.avatar.value}
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white">{user.name}</p>
                          <p className="text-xs text-slate-500">{user.handle}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${user.roleClass}`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">{user.date}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                        <button
                          className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-colors"
                          title="Edit Profile"
                          type="button">
                          <MaterialIcon className="text-[18px]" name="edit" />
                        </button>
                        <button
                          className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded transition-colors"
                          title="Change Role"
                          type="button">
                          <MaterialIcon className="text-[18px]" name="admin_panel_settings" />
                        </button>
                        <button
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                          title="Delete User"
                          type="button">
                          <MaterialIcon className="text-[18px]" name="delete" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Showing <span className="font-semibold text-slate-900 dark:text-white">1</span> to{" "}
              <span className="font-semibold text-slate-900 dark:text-white">5</span> of{" "}
              <span className="font-semibold text-slate-900 dark:text-white">48</span> users
            </span>
            <div className="inline-flex -space-x-px rounded-md shadow-sm">
              <button
                className="px-3 py-2 text-sm font-medium text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-l-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                type="button">
                Previous
              </button>
              <button
                className="px-3 py-2 text-sm font-medium text-white bg-primary border border-primary hover:bg-primary-dark"
                type="button">
                1
              </button>
              <button
                className="px-3 py-2 text-sm font-medium text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
                type="button">
                2
              </button>
              <button
                className="px-3 py-2 text-sm font-medium text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
                type="button">
                3
              </button>
              <button
                className="px-3 py-2 text-sm font-medium text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-r-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                type="button">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminManageUserPage;
