import MaterialIcon from "../atoms/MaterialIcon";

type AdminTopbarProps = {
  searchPlaceholder?: string;
};

const AdminTopbar = ({ searchPlaceholder = "Search..." }: AdminTopbarProps) => {
  return (
    <header className="h-20 shrink-0 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-10 flex items-center justify-between z-10">
      <button className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg" type="button">
        <MaterialIcon name="menu" />
      </button>
      <div className="hidden md:flex flex-1 max-w-lg">
        <div className="relative w-full group">
          <MaterialIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors"
            name="search"
          />
          <input
            className="w-full bg-slate-100 dark:bg-slate-800 border-transparent focus:border-primary focus:ring-0 rounded-lg pl-10 pr-4 py-2.5 text-sm transition-all outline-none text-slate-900 dark:text-white placeholder-slate-400"
            placeholder={searchPlaceholder}
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-6 ml-auto">
        <button
          className="relative p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
          type="button">
          <MaterialIcon name="notifications" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">Jane Doe</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-white dark:ring-slate-800 shadow-sm">
            <img
              alt="Admin profile"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFQA-fabmgA95keIG9Wfr1yHwV2XIkF60G-0XirxkD1mu6JcKEh_oNYUQB6hlDglW44Z4pI4g1rmL9qHEIS0K2ihcPS1CD5tTugL43PDn48H-DZEHTdwAcBn82g2Oh8KwoON_AHJ8r25J9CL6gsa-uku9GsMXWfiASX0ZYz7pDDEmgobTSfbQjM38gKb6gHgkVNgmEHqFaUwV5UQnRZTo1RI7QUBaal9P78YolomEkXTZd6bS8rUKkewZ_HdAkNtpW4-IHx59vak3A"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
