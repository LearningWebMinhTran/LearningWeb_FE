import { Link } from "@tanstack/react-router";

import MaterialIcon from "../../components/atoms/MaterialIcon";

const AdminSettingsPage = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased overflow-hidden">
      <div className="flex h-screen w-full overflow-hidden">
        <aside className="hidden md:flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#15202b] flex-shrink-0 z-20">
          <div className="flex items-center gap-2 px-6 py-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white">
              <MaterialIcon className="text-xl" name="school" />
            </div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              EduBlog<span className="text-primary">.</span>
            </h1>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
            <Link
              className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all"
              to="/admin">
              <MaterialIcon className="text-[20px]" name="dashboard" />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link
              className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all"
              to="/admin/posts">
              <MaterialIcon className="text-[20px]" name="article" />
              <span className="text-sm font-medium">Posts</span>
            </Link>
            <Link
              className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all"
              to="/upload">
              <MaterialIcon className="text-[20px]" name="folder" />
              <span className="text-sm font-medium">Media</span>
            </Link>
            <Link
              className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all"
              to="/admin/users">
              <MaterialIcon className="text-[20px]" name="group" />
              <span className="text-sm font-medium">Users</span>
            </Link>
            <div className="pt-4 pb-2">
              <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Configuration</p>
            </div>
            <Link
              className="group flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary"
              to="/admin/settings">
              <MaterialIcon className="text-[20px]" name="settings" />
              <span className="text-sm font-medium">Settings</span>
            </Link>
            <div className="ml-9 border-l-2 border-primary/20 pl-4 space-y-3 mt-1">
              <a className="block text-sm font-medium text-primary" href="#general">
                General
              </a>
              <a
                className="block text-sm font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                href="#appearance">
                Appearance
              </a>
              <a
                className="block text-sm font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                href="#gamification">
                Gamification
              </a>
              <a
                className="block text-sm font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                href="#integrations">
                Integrations
              </a>
            </div>
          </nav>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <button
              className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
              type="button">
              <MaterialIcon className="text-[20px]" name="logout" />
              Log Out
            </button>
          </div>
        </aside>
        <main className="flex-1 flex flex-col h-full overflow-hidden relative">
          <header className="flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-[#15202b]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-10 sticky top-0">
            <div className="flex flex-col gap-1">
              <nav aria-label="Breadcrumb" className="flex">
                <ol className="flex items-center space-x-2">
                  <li>
                    <Link className="text-slate-500 hover:text-primary text-sm font-medium" to="/admin">
                      Admin
                    </Link>
                  </li>
                  <li>
                    <span className="text-slate-400 text-sm">/</span>
                  </li>
                  <li>
                    <span aria-current="page" className="text-slate-900 dark:text-white text-sm font-medium">
                      Settings
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 rounded-full transition-colors"
                type="button">
                <MaterialIcon className="text-[22px]" name="notifications" />
              </button>
              <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-slate-200 dark:border-slate-600">
                <img
                  alt="Admin profile"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-aPvDrYvjgDPdNuJtMGFyemN-YnS7_Fq9qdEPo1it_MztbBcpvWDVfMPjKdFyT12pWU4EZskhEM1hBG06emvGdB46jslKOVIZKPqrRLFsMoZN65_5gqtvIBj5BCROPfYGm6zz3JFN_oxJVM2rD_LwVIRvafiXofqOw-QrUlfb-Q_YMdFEbzobUcz3fL2tClM3JunPL83l5xcL1AwEpaprlVwWpMQcxWbow7MXAYaijUu1uHd288bovsm3OCJ1F3jSqnEWx35Es6wu"
                />
              </div>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
            <div className="max-w-4xl mx-auto space-y-8 pb-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Admin Settings</h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-2 text-base">
                    Configure creative and unique functionalities for your educational blog.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
                    type="button">
                    Discard
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm hover:shadow transition-all"
                    type="button">
                    Save Changes
                  </button>
                </div>
              </div>

              <section className="scroll-mt-24" id="general">
                <div className="bg-white dark:bg-[#1e2936] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-[#1e2936]">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <MaterialIcon className="text-primary" name="tune" />
                      General Information
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <label className="block">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                          Site Title
                        </span>
                        <input
                          className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm h-11"
                          defaultValue="EduBlog Academy"
                          type="text"
                        />
                      </label>
                      <label className="block">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                          Support Email
                        </span>
                        <input
                          className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm h-11"
                          defaultValue="admin@edublog.com"
                          type="email"
                        />
                      </label>
                    </div>
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                        Site Description (SEO)
                      </span>
                      <textarea
                        className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm resize-none"
                        defaultValue="A leading platform for interactive learning and educational resources for students worldwide."
                        rows={3}
                      ></textarea>
                    </label>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-24" id="appearance">
                <div className="bg-white dark:bg-[#1e2936] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-[#1e2936]">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <MaterialIcon className="text-primary" name="palette" />
                      Appearance and Layout
                    </h3>
                  </div>
                  <div className="p-6 space-y-8">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-900 dark:text-white">Featured Post Section</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          Display a large hero section for the latest featured post on the homepage.
                        </span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" defaultChecked type="checkbox" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <hr className="border-slate-100 dark:border-slate-700/50" />
                    <div>
                      <span className="text-sm font-medium text-slate-900 dark:text-white mb-4 block">
                        Blog Post Layout Theme
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <label className="cursor-pointer relative group">
                          <input className="peer sr-only" defaultChecked name="layout" type="radio" />
                          <div className="p-1 rounded-lg border-2 border-slate-200 dark:border-slate-700 peer-checked:border-primary hover:border-primary/50 transition-all bg-slate-50 dark:bg-slate-800">
                            <div className="aspect-video bg-white dark:bg-slate-700 rounded mb-2 overflow-hidden flex flex-col gap-1 p-2">
                              <div className="h-2 w-1/3 bg-slate-200 dark:bg-slate-600 rounded"></div>
                              <div className="h-12 w-full bg-slate-100 dark:bg-slate-600/50 rounded"></div>
                              <div className="flex gap-1 mt-auto">
                                <div className="h-2 w-2 bg-slate-200 dark:bg-slate-600 rounded-full"></div>
                                <div className="h-2 w-1/4 bg-slate-200 dark:bg-slate-600 rounded"></div>
                              </div>
                            </div>
                            <div className="text-center pb-1">
                              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Classic Card</span>
                            </div>
                          </div>
                          <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-0.5 opacity-0 peer-checked:opacity-100 transition-opacity">
                            <MaterialIcon className="text-[16px]" name="check" />
                          </div>
                        </label>
                        <label className="cursor-pointer relative group">
                          <input className="peer sr-only" name="layout" type="radio" />
                          <div className="p-1 rounded-lg border-2 border-slate-200 dark:border-slate-700 peer-checked:border-primary hover:border-primary/50 transition-all bg-slate-50 dark:bg-slate-800">
                            <div className="aspect-video bg-white dark:bg-slate-700 rounded mb-2 overflow-hidden flex gap-2 p-2">
                              <div className="w-1/3 h-full bg-slate-200 dark:bg-slate-600 rounded"></div>
                              <div className="flex-1 flex flex-col gap-1">
                                <div className="h-2 w-3/4 bg-slate-200 dark:bg-slate-600 rounded"></div>
                                <div className="h-8 w-full bg-slate-100 dark:bg-slate-600/50 rounded"></div>
                              </div>
                            </div>
                            <div className="text-center pb-1">
                              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Magazine List</span>
                            </div>
                          </div>
                          <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-0.5 opacity-0 peer-checked:opacity-100 transition-opacity">
                            <MaterialIcon className="text-[16px]" name="check" />
                          </div>
                        </label>
                        <label className="cursor-pointer relative group">
                          <input className="peer sr-only" name="layout" type="radio" />
                          <div className="p-1 rounded-lg border-2 border-slate-200 dark:border-slate-700 peer-checked:border-primary hover:border-primary/50 transition-all bg-slate-50 dark:bg-slate-800">
                            <div className="aspect-video bg-white dark:bg-slate-700 rounded mb-2 overflow-hidden relative">
                              <div className="absolute inset-0 bg-slate-800/20 z-0"></div>
                              <div className="absolute bottom-2 left-2 right-2 flex flex-col gap-1 z-10">
                                <div className="h-2 w-1/2 bg-white/80 rounded"></div>
                                <div className="h-2 w-3/4 bg-white/40 rounded"></div>
                              </div>
                            </div>
                            <div className="text-center pb-1">
                              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Full Visual</span>
                            </div>
                          </div>
                          <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-0.5 opacity-0 peer-checked:opacity-100 transition-opacity">
                            <MaterialIcon className="text-[16px]" name="check" />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-24" id="content">
                <div className="bg-white dark:bg-[#1e2936] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-[#1e2936]">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <MaterialIcon className="text-primary" name="folder_open" />
                      Content Management
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <label className="block">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                          Default Category
                        </span>
                        <select
                          className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm h-11"
                          defaultValue="General Learning">
                          <option>General Learning</option>
                          <option>Programming</option>
                          <option>Design</option>
                          <option>Mathematics</option>
                        </select>
                      </label>
                      <label className="block">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                          Comments Strategy
                        </span>
                        <select
                          className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm h-11"
                          defaultValue="Auto-approve all">
                          <option>Auto-approve all</option>
                          <option>Hold for moderation</option>
                          <option>Disable comments</option>
                        </select>
                      </label>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                      <MaterialIcon className="text-primary mt-0.5" name="info" />
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white">Content Tagging</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          Tags are automatically generated using AI analysis of your post content if the default
                          category is set to "General Learning".
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-24" id="gamification">
                <div className="bg-white dark:bg-[#1e2936] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-[#1e2936]">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <MaterialIcon className="text-primary" name="military_tech" />
                      Gamification
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Boost student engagement by enabling rewards for reading content and completing quizzes.
                    </p>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between p-4 rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-yellow-600 dark:text-yellow-400">
                            <MaterialIcon name="emoji_events" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-slate-900 dark:text-white">Enable Student Badges</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              Award badges for reading streaks (3, 7, 30 days).
                            </span>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input className="sr-only peer" defaultChecked type="checkbox" />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
                            <MaterialIcon name="celebration" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-slate-900 dark:text-white">Completion Confetti</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              Show visual celebration when a student finishes a course module.
                            </span>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <label className="block">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                          Points per Article
                        </span>
                        <div className="relative">
                          <input
                            className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm h-11 pl-4 pr-12"
                            defaultValue={10}
                            type="number"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">pts</span>
                        </div>
                      </label>
                      <label className="block">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                          Daily Cap
                        </span>
                        <div className="relative">
                          <input
                            className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm h-11 pl-4 pr-12"
                            defaultValue={100}
                            type="number"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">pts</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-24" id="integrations">
                <div className="bg-white dark:bg-[#1e2936] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-[#1e2936]">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <MaterialIcon className="text-primary" name="extension" />
                      Integrations
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                        Google Analytics ID
                      </span>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                            <MaterialIcon className="text-[20px]" name="analytics" />
                          </span>
                          <input
                            className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm h-11 pl-10"
                            placeholder="G-XXXXXXXXXX"
                            type="text"
                          />
                        </div>
                      </div>
                    </label>
                    <label className="block">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                          MongoDB Connection String
                        </span>
                        <span className="text-xs text-primary cursor-pointer hover:underline">Test Connection</span>
                      </div>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                          <MaterialIcon className="text-[20px]" name="database" />
                        </span>
                        <input
                          className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm h-11 pl-10 font-mono text-xs"
                          defaultValue="mongodb+srv://admin:********@cluster0.example.net/"
                          type="password"
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
