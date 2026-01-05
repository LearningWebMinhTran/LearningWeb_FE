import UserLayout from "../../components/layouts/UserLayout";
import MaterialIcon from "../../components/atoms/MaterialIcon";

const analyticsCards = [
  { label: "Posts Read", value: "128", icon: "menu_book", color: "text-primary bg-primary/10" },
  { label: "Hours Spent", value: "45h", icon: "schedule", color: "text-emerald-500 bg-emerald-500/10" },
  { label: "Badges Earned", value: "12", icon: "military_tech", color: "text-amber-500 bg-amber-500/10" },
  { label: "Streak Days", value: "9", icon: "local_fire_department", color: "text-orange-500 bg-orange-500/10" },
];

const UserAnalyticsPage = () => {
  return (
    <UserLayout activeNav="analytics">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Analytics</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Track your learning progress and stay consistent with your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {analyticsCards.map((card) => (
            <div
              className="bg-white dark:bg-[#1a2234] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2"
              key={card.label}
            >
              <div className="flex items-center justify-between">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{card.label}</p>
                <span className={`material-symbols-outlined ${card.color} p-1.5 rounded-lg`}>{card.icon}</span>
              </div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-[#1a2234] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Weekly Reading Activity</h2>
              <span className="text-xs text-slate-500">Last 7 days</span>
            </div>
            <div className="h-48 rounded-lg bg-slate-50 dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 text-sm">
              Chart placeholder
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-slate-500">Avg time/day</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">45 min</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Top category</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">AI & ML</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Completion rate</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">78%</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a2234] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Goal Progress</h2>
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
                  <span>Weekly reading goal</span>
                  <span className="font-semibold text-slate-900 dark:text-white">5/7 days</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "70%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
                  <span>Course completion</span>
                  <span className="font-semibold text-slate-900 dark:text-white">62%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "62%" }} />
                </div>
              </div>
              <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MaterialIcon className="text-primary" name="emoji_events" />
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Keep the streak</p>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Read for 15 minutes today to maintain your 9-day streak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserAnalyticsPage;
