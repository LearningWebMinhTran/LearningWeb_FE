import UserNavbar from "../components/organisms/UserNavbar";
import MaterialIcon from "../components/atoms/MaterialIcon";

const BlogPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-sans min-h-screen flex flex-col overflow-hidden selection:bg-primary selection:text-white">
      <UserNavbar />
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 flex-shrink-0 flex flex-col border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-y-auto custom-scrollbar">
        <div className="h-16 flex items-center justify-between px-4 border-b border-border-light dark:border-border-dark sticky top-0 bg-surface-light dark:bg-surface-dark z-10">
          <h1 className="font-bold text-lg tracking-tight">Learn AI</h1>
          <div className="flex gap-2 text-slate-400">
            <button className="hover:text-primary" type="button">
              <MaterialIcon className="text-[20px]" name="link" />
            </button>
            <button className="hover:text-primary" type="button">
              <MaterialIcon className="text-[20px]" name="coffee" />
            </button>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {[
            { label: "Overview", icon: "home" },
            { label: "Project Ideas", icon: "lightbulb" },
            { label: "Definitions", icon: "article" },
          ].map((item) => (
            <button
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-md w-full text-left"
              key={item.label}
              type="button">
              <MaterialIcon className="text-[20px]" name={item.icon} />
              {item.label}
            </button>
          ))}

          <div className="pt-2">
            <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-md" type="button">
              <div className="flex items-center gap-3">
                <MaterialIcon className="text-[20px]" name="folder_open" />
                01. LLM Fundamentals
              </div>
              <MaterialIcon className="text-[16px]" name="expand_less" />
            </button>
            <div className="mt-1 ml-4 border-l border-border-light dark:border-border-dark pl-2 space-y-1">
              {[
                "01. Prompt Engineering",
                "02. Structured Output",
                "03. Streaming",
                "04. Model Comparison",
              ].map((label) => (
                <button
                  className="block px-3 py-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-blue-50 dark:hover:bg-slate-800 rounded-md w-full text-left"
                  key={label}
                  type="button">
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-md" type="button">
              <div className="flex items-center gap-3">
                <MaterialIcon className="text-[20px]" name="menu_book" />
                02. RAG
              </div>
              <MaterialIcon className="text-[16px]" name="expand_less" />
            </button>
            <div className="mt-1 ml-4 border-l border-border-light dark:border-border-dark pl-2 space-y-1">
              {[
                "01. Embeddings",
                "02. Vector Database",
                "03. Chunking Strategy",
              ].map((label) => (
                <button
                  className="block px-3 py-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-blue-50 dark:hover:bg-slate-800 rounded-md w-full text-left"
                  key={label}
                  type="button">
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-primary hover:bg-blue-50 dark:hover:bg-slate-800 rounded-md" type="button">
              <div className="flex items-center gap-3">
                <MaterialIcon className="text-[20px]" name="hub" />
                03. Orchestration
              </div>
              <MaterialIcon className="text-[16px]" name="expand_less" />
            </button>
            <div className="mt-1 ml-4 border-l border-border-light dark:border-border-dark pl-2 space-y-1">
              <button
                className="block px-3 py-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-blue-50 dark:hover:bg-slate-800 rounded-md w-full text-left"
                type="button">
                01. Memory Management
              </button>
              <button
                className="block px-3 py-1.5 text-sm font-semibold text-primary bg-blue-50 dark:bg-blue-900/20 rounded-md w-full text-left"
                type="button">
                02. Chains and Routing
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-md" type="button">
              <div className="flex items-center gap-3">
                <MaterialIcon className="text-[20px]" name="smart_toy" />
                04. Agents
              </div>
              <MaterialIcon className="text-[16px]" name="expand_more" />
            </button>
          </div>

          <div className="pt-2">
            <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-md" type="button">
              <div className="flex items-center gap-3">
                <MaterialIcon className="text-[20px]" name="check_circle" />
                05. Production
              </div>
              <MaterialIcon className="text-[16px]" name="expand_more" />
            </button>
          </div>
        </nav>
      </aside>

        <main className="flex-1 flex overflow-hidden">
        <section className="flex-1 flex flex-col border-r border-border-light dark:border-border-dark overflow-y-auto custom-scrollbar">
          <div className="h-16 flex items-center px-8 border-b border-border-light dark:border-border-dark sticky top-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm z-10">
            <h2 className="font-bold text-lg">Chains and Routing</h2>
          </div>
          <div className="p-8 max-w-4xl mx-auto w-full">
            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-base mb-2 text-slate-900 dark:text-slate-100">Learning objectives</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Connect processing steps into workflows that can be sequential, conditional, or routed based on intent.
                Learn common patterns like simple chains, router chains, and conditional branching.
              </p>
            </div>

            <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
              <h3 className="text-lg font-semibold text-primary mb-3">Overview</h3>
              <p className="text-sm leading-relaxed mb-6">
                Chains and routing help you connect multiple LLM steps into complex workflows. Use simple chains for
                sequential processing, router patterns for intent classification, and conditional chains for branching
                logic.
              </p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Key topics</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm mb-8">
                <li>
                  <strong>Simple Chain:</strong> Sequential processing across multiple steps.
                </li>
                <li>
                  <strong>Router Pattern:</strong> Classify intent and route to the right handler.
                </li>
                <li>
                  <strong>Conditional Chains:</strong> Branch logic based on intermediate outputs.
                </li>
                <li>
                  <strong>Best Practices:</strong> Observability, retries, and guardrails.
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <MaterialIcon className="text-primary text-[20px]" name="inventory_2" />
                <h3 className="font-semibold text-base text-slate-900 dark:text-slate-100">Apply to project</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                Design a workflow for a personal knowledge base that handles search, summarize, and create note intents.
              </p>
              <h4 className="font-semibold text-sm mb-2 text-slate-900 dark:text-slate-100">Suggested steps</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>Design a chain: retrieve notes, generate answer, cite sources, format output.</li>
                <li>Implement intent classification for search, summarize, create_note, and general_qa.</li>
                <li>Route each intent to its own handler with dedicated prompts.</li>
                <li>Execute chains with retry and error handling at each step.</li>
                <li>Fallback to suggesting new notes when retrieval returns empty.</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Expected outcome</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              A system that can guide users to the right functionality based on natural language queries and reduce
              friction in complex workflows.
            </p>
            <div className="h-20"></div>
          </div>
        </section>

        <aside className="w-[480px] flex-shrink-0 flex flex-col bg-white dark:bg-background-dark overflow-y-auto custom-scrollbar">
          <div className="h-16 flex items-center justify-between px-6 border-b border-border-light dark:border-border-dark sticky top-0 bg-white dark:bg-background-dark z-10">
            <h2 className="font-bold text-lg">Practice</h2>
          </div>
          <div className="flex border-b border-border-light dark:border-border-dark px-6">
            {[
              { label: "Lesson 1: Simple Chain" },
              { label: "Lesson 2: Router Pattern" },
              { label: "Lesson 3: Conditional Chain", active: true },
            ].map((tab) => (
              <button
                className={
                  tab.active
                    ? "py-3 px-4 text-sm font-medium text-primary border-b-2 border-primary"
                    : "py-3 px-4 text-sm font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                }
                key={tab.label}
                type="button">
                {tab.label}
              </button>
            ))}
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 mb-6">
              <div className="flex items-center gap-1 cursor-pointer hover:text-slate-700 dark:hover:text-slate-300">
                <span>Behind the Scenes</span>
                <MaterialIcon className="text-[14px]" name="help" />
              </div>
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition">
                <MaterialIcon className="text-[14px]" name="content_copy" />
                <span className="font-mono">orchestration-chains-routing-03</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
              Conditional Chain: Detect Language, Translate (if needed), Summarize, Extract Entities
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Paste a document, detect language, translate to English if required, then summarize and extract entities.
            </p>
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Document Text <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full h-32 p-3 text-sm rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none font-mono"
                defaultValue="LangChain is a framework for developing applications powered by language models. It provides abstractions for chains, agents, and memory management. This framework is widely used in RAG and AI agent projects."
                spellCheck={false}
              ></textarea>
            </div>
            <button className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm shadow-blue-500/30 transition-all flex justify-center items-center gap-2 mb-8" type="button">
              <span>Run Conditional Chain</span>
              <MaterialIcon className="text-[18px]" name="play_arrow" />
            </button>

            <div className="mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Results</h3>
              <div className="space-y-0">
                {[1, 2, 3].map((step) => (
                  <div className="flex gap-4 group" key={`step-${step}`}>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-primary flex items-center justify-center shrink-0 z-10 ring-4 ring-white dark:ring-background-dark">
                        <MaterialIcon className="text-[14px]" name="check" />
                      </div>
                      {step < 3 ? (
                        <div className="w-0.5 bg-border-light dark:border-border-dark flex-1 h-full min-h-[40px]"></div>
                      ) : null}
                    </div>
                    <div className="pb-8 pt-0.5 w-full">
                      {step === 1 && (
                        <>
                          <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3">
                            Step 1: Language Detection
                          </h4>
                          <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-md p-4">
                            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <span>Detected Language:</span>
                              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-mono px-2 py-0.5 rounded">
                                en
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                      {step === 2 && (
                        <>
                          <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3">
                            Step 2: Translation (Conditional)
                          </h4>
                          <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-md p-4">
                            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <span>Was Translated:</span>
                              <span className="text-green-600 dark:text-green-400 font-medium">No (already English)</span>
                            </div>
                          </div>
                        </>
                      )}
                      {step === 3 && (
                        <>
                          <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3">
                            Step 3: Summary
                          </h4>
                          <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-md p-4">
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              LangChain is a framework for building LLM-powered apps, providing abstractions for chains,
                              agents, and memory management in RAG and AI agent workflows.
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
        </main>
      </div>
    </div>
  );
};

export default BlogPage;
