import { useRef } from "react";
import { toast } from "sonner";

import PageTransition from "../components/layouts/PageTransition";
import UserLayout from "../components/layouts/UserLayout";
import MaterialIcon from "../components/atoms/MaterialIcon";

const UploadPage = () => {
  const theoryRef = useRef<HTMLDivElement | null>(null);
  const practiceRef = useRef<HTMLDivElement | null>(null);

  return (
    <UserLayout activeNav="my-posts" searchPlaceholder="Search for courses, articles, or tags...">
      <PageTransition>
        <div className="max-w-[1400px] mx-auto flex flex-col gap-8 h-full">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Create New Post</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  Compose your educational content with theory and practice sections.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors bg-white dark:bg-[#1a2234]"
                  onClick={() => toast.success("Draft saved.")}
                  type="button"
                >
                  Save Draft
                </button>
                <button
                  className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all flex items-center gap-2"
                  onClick={() => toast.success("Post published.")}
                  type="button"
                >
                  <MaterialIcon className="text-lg" name="publish" />
                  Publish
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-[#1a2234] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-5">
              <div className="w-full">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Post Title
                </label>
                <input
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder-slate-400 text-lg font-medium"
                  placeholder="e.g., Understanding React Hooks in 2024"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Tags / Categories
                  </label>
                  <div className="relative">
                    <MaterialIcon
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg"
                      name="label"
                    />
                    <input
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Add tags separated by comma..."
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Assign to Folder
                  </label>
                  <div className="relative">
                    <MaterialIcon
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg"
                      name="folder_open"
                    />
                    <select className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none">
                      <option disabled value="">
                        Select a folder...
                      </option>
                      <option value="web">Web Development</option>
                      <option value="data">Data Science</option>
                      <option value="algo">Algorithms</option>
                      <option value="new">+ Create New Folder</option>
                    </select>
                    <MaterialIcon
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-lg"
                      name="expand_more"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pb-6 flex-1">
            <div className="flex flex-col gap-3 h-full">
              <div className="flex items-center justify-between px-1">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="size-6 rounded bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 flex items-center justify-center">
                    <MaterialIcon className="text-sm" name="menu_book" />
                  </span>
                  Theory
                  <span className="text-slate-400 font-normal text-sm ml-1">(Ly thuyet)</span>
                </h2>
              </div>
              <div className="bg-white dark:bg-[#1a2234] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col flex-1 min-h-[500px] overflow-hidden">
                <div className="p-4 border-b border-slate-100 dark:border-slate-800/50">
                  <label className="group flex items-center justify-center w-full h-20 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-primary hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all">
                    <div className="flex flex-col items-center gap-1 text-slate-400 group-hover:text-primary transition-colors">
                      <div className="flex items-center gap-2">
                        <MaterialIcon className="text-xl" name="add_photo_alternate" />
                        <span className="text-xs font-semibold">Add Theory Image</span>
                      </div>
                    </div>
                    <input className="hidden" type="file" />
                  </label>
                </div>
                <div className="flex items-center gap-1 p-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 overflow-x-auto">
                  {[
                    { name: "format_bold", title: "Bold" },
                    { name: "format_italic", title: "Italic" },
                    { name: "format_underlined", title: "Underline" },
                  ].map((item) => (
                    <button
                      className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
                      key={item.name}
                      title={item.title}
                      type="button"
                    >
                      <MaterialIcon className="text-lg" name={item.name} />
                    </button>
                  ))}
                  <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-1" />
                  {[
                    { name: "format_list_bulleted", title: "Bullet List" },
                    { name: "format_list_numbered", title: "Numbered List" },
                  ].map((item) => (
                    <button
                      className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
                      key={item.name}
                      title={item.title}
                      type="button"
                    >
                      <MaterialIcon className="text-lg" name={item.name} />
                    </button>
                  ))}
                  <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-1" />
                  {[
                    { name: "link", title: "Link" },
                    { name: "format_quote", title: "Quote" },
                  ].map((item) => (
                    <button
                      className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
                      key={item.name}
                      title={item.title}
                      type="button"
                    >
                      <MaterialIcon className="text-lg" name={item.name} />
                    </button>
                  ))}
                </div>
                <div
                  className="flex-1 p-5 overflow-y-auto cursor-text"
                  onClick={() => theoryRef.current?.focus()}
                >
                  <div
                    className="editor-content outline-none text-slate-700 dark:text-slate-300 leading-relaxed min-h-full"
                    contentEditable
                    data-placeholder="Start writing the theoretical explanation here..."
                    ref={theoryRef}
                    suppressContentEditableWarning
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 h-full">
              <div className="flex items-center justify-between px-1">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="size-6 rounded bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 flex items-center justify-center">
                    <MaterialIcon className="text-sm" name="terminal" />
                  </span>
                  Practice
                  <span className="text-slate-400 font-normal text-sm ml-1">(Thuc hanh)</span>
                </h2>
              </div>
              <div className="bg-white dark:bg-[#1a2234] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col flex-1 min-h-[500px] overflow-hidden">
                <div className="p-4 border-b border-slate-100 dark:border-slate-800/50">
                  <label className="group flex items-center justify-center w-full h-20 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-all">
                    <div className="flex flex-col items-center gap-1 text-slate-400 group-hover:text-emerald-600 transition-colors">
                      <div className="flex items-center gap-2">
                        <MaterialIcon className="text-xl" name="add_photo_alternate" />
                        <span className="text-xs font-semibold">Add Practice Image</span>
                      </div>
                    </div>
                    <input className="hidden" type="file" />
                  </label>
                </div>
                <div className="flex items-center gap-1 p-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 overflow-x-auto">
                  {[
                    { name: "format_bold", title: "Bold" },
                    { name: "format_italic", title: "Italic" },
                  ].map((item) => (
                    <button
                      className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
                      key={item.name}
                      title={item.title}
                      type="button"
                    >
                      <MaterialIcon className="text-lg" name={item.name} />
                    </button>
                  ))}
                  <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-1" />
                  {[
                    { name: "code", title: "Code Block" },
                    { name: "terminal", title: "Terminal" },
                  ].map((item) => (
                    <button
                      className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
                      key={item.name}
                      title={item.title}
                      type="button"
                    >
                      <MaterialIcon className="text-lg" name={item.name} />
                    </button>
                  ))}
                  <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-1" />
                  <button
                    className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
                    title="Link"
                    type="button"
                  >
                    <MaterialIcon className="text-lg" name="link" />
                  </button>
                </div>
                <div
                  className="flex-1 p-5 overflow-y-auto cursor-text bg-slate-50/30 dark:bg-black/10"
                  onClick={() => practiceRef.current?.focus()}
                >
                  <div
                    className="editor-content outline-none text-slate-700 dark:text-slate-300 font-mono text-sm leading-relaxed min-h-full"
                    contentEditable
                    data-placeholder="Write practice steps, code snippets, or exercises here..."
                    ref={practiceRef}
                    suppressContentEditableWarning
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </UserLayout>
  );
};

export default UploadPage;
