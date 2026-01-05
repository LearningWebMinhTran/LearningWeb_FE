import UserLayout from "../../components/layouts/UserLayout";
import MaterialIcon from "../../components/atoms/MaterialIcon";

const folders = [
  { name: "Web Dev", count: "12 items", color: "text-amber-400" },
  { name: "Data Science", count: "8 items", color: "text-purple-400" },
  { name: "UX Research", count: "4 items", color: "text-cyan-400" },
  { name: "AI Notes", count: "6 items", color: "text-blue-400" },
];

const UserFoldersPage = () => {
  return (
    <UserLayout activeNav="folders">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">My Folders</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Organize saved posts into folders so you can find them later.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {folders.map((folder) => (
            <div
              className="bg-white dark:bg-[#1a2234] p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary hover:shadow-md transition-all cursor-pointer flex flex-col gap-3"
              key={folder.name}
            >
              <MaterialIcon className={`text-4xl ${folder.color}`} name="folder" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">{folder.name}</h3>
                <p className="text-xs text-slate-500">{folder.count}</p>
              </div>
            </div>
          ))}
          <button
            className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-5 text-slate-500 hover:text-primary hover:border-primary transition-colors flex flex-col items-center justify-center gap-2"
            type="button"
          >
            <MaterialIcon className="text-3xl" name="add" />
            <span className="text-sm font-semibold">Create Folder</span>
          </button>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserFoldersPage;
