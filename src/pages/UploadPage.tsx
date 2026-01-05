import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Image, Link2, Moon, Sun } from "lucide-react";

import EditorPanel from "../components/organisms/EditorPanel";
import PanelCard from "../components/organisms/PanelCard";
import UserNavbar from "../components/organisms/UserNavbar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

const UploadPage = () => {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-sans min-h-screen flex flex-col transition-colors duration-200">
      <UserNavbar />
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 flex-shrink-0 border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark flex flex-col h-full">
        <div className="p-4 border-b border-border-light dark:border-border-dark flex items-center justify-between">
          <h1 className="text-xl font-bold flex items-center gap-2">Learn AI</h1>
          <div className="flex gap-2 text-text-muted-light dark:text-text-muted-dark">
            <Button onClick={() => toast.message("Link copied to clipboard.")} size="icon" variant="ghost">
              <Link2 className="h-4 w-4" />
            </Button>
            <Button onClick={() => setIsDark((prev) => !prev)} size="icon" variant="ghost">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-1">
          <Link
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            to="/dashboard">
            Tổng quan
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            to="/courses">
            Project Ideas
          </Link>
          <div className="pt-4 pb-1 px-3 text-xs font-semibold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">
            Content Management
          </div>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-primary bg-blue-50 dark:bg-blue-900/20 rounded-md"
            to="/upload">
            Create Post
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            to="/library">
            All Posts
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            hash="categories"
            to="/library">
            Categories
          </Link>
        </nav>
        <div className="p-4 border-t border-border-light dark:border-border-dark">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">John Doe</p>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark truncate">Admin</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background-light dark:bg-background-dark">
        <header className="h-16 flex items-center justify-between px-6 border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark flex-shrink-0 z-10">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-text-main-light dark:text-text-main-dark">Create New Blog Post</h2>
            <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-100">Draft</Badge>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => toast.message("Preview opened.")} variant="ghost">
              Preview
            </Button>
            <Button onClick={() => toast.success("Draft saved.")} variant="outline">
              Save Draft
            </Button>
            <Button onClick={() => toast.success("Post published.")}>Publish</Button>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-muted-light dark:text-text-muted-dark" htmlFor="post-title">
                  Post Title
                </label>
                <Input id="post-title" placeholder="Enter an engaging title..." />
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark bg-gray-50 dark:bg-gray-800/50 p-2 rounded border border-border-light dark:border-border-dark">
                <Link2 className="h-4 w-4" />
                <span className="select-none opacity-70">learn-ai.com/blog/</span>
                <Input className="h-6 border-none bg-transparent p-0 text-sm" defaultValue="enter-an-engaging-title" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                <EditorPanel
                  content={
                    <div className="editor-content" contentEditable suppressContentEditableWarning>
                      <h2>Introduction to Chains</h2>
                      <p>Chains allow you to connect multiple processing steps. Simple Chains process sequentially.</p>
                      <p className="text-gray-400">Write theory content here...</p>
                    </div>
                  }
                  footerLeft="Words: 15"
                  footerRight="Last saved: Just now"
                  icon="menu_book"
                  iconClassName="text-primary"
                  selectOptions={["Paragraph", "Heading 1", "Heading 2"]}
                  title="Lý thuyết"
                  toolbarGroups={[["format_bold", "format_italic", "format_underlined"], ["format_list_bulleted", "code"], ["image"]]}
                />
                <EditorPanel
                  content={
                    <div className="editor-content" contentEditable suppressContentEditableWarning>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-md font-mono text-sm">
{`const chain = new SimpleChain({
  model: 'gpt-4',
  temperature: 0.7
});`}
                      </pre>
                      <p className="text-gray-400 mt-4">Write practice exercises or code examples here...</p>
                    </div>
                  }
                  footerLeft="Words: 12"
                  footerRight="Last saved: Just now"
                  icon="code"
                  iconClassName="text-green-600"
                  selectOptions={["Code Block", "Paragraph", "Heading 1"]}
                  title="Thực hành"
                  toolbarGroups={[["format_bold", "format_italic", "format_underlined"], ["format_list_numbered", "code"], ["image"]]}
                />
              </div>
            </div>
            <div className="xl:col-span-1 space-y-6">
              <PanelCard
                className="shadow-sm"
                title="Post Settings"
                titleClassName="text-sm font-semibold text-text-main-light dark:text-text-main-dark">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-text-muted-light dark:text-text-muted-dark mb-1.5">Visibility</label>
                    <Select defaultValue="Public">
                      <SelectTrigger>
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Public">Public</SelectItem>
                        <SelectItem value="Private">Private</SelectItem>
                        <SelectItem value="Members Only">Members Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-muted-light dark:text-text-muted-dark mb-1.5">Publish Date</label>
                    <Input type="date" />
                  </div>
                </div>
              </PanelCard>
              <PanelCard className="shadow-sm" title="Taxonomy" titleClassName="text-sm font-semibold text-text-main-light dark:text-text-main-dark">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-text-muted-light dark:text-text-muted-dark mb-1.5">Folder</label>
                    <Select defaultValue="">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a folder" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AI Fundamentals">AI Fundamentals</SelectItem>
                        <SelectItem value="Advanced LLM">Advanced LLM</SelectItem>
                        <SelectItem value="Projects">Projects</SelectItem>
                        <SelectItem value="Uncategorized">Uncategorized</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-muted-light dark:text-text-muted-dark mb-1.5">Category</label>
                    <Select defaultValue="Orchestration">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="LLM Fundamentals">LLM Fundamentals</SelectItem>
                        <SelectItem value="Orchestration">Orchestration</SelectItem>
                        <SelectItem value="RAG">RAG</SelectItem>
                        <SelectItem value="Agents">Agents</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-muted-light dark:text-text-muted-dark mb-1.5">Tags</label>
                    <div className="p-2 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-md min-h-[80px] flex flex-wrap gap-2 content-start">
                      <Badge className="bg-blue-100 text-blue-800">#langchain</Badge>
                      <Badge className="bg-blue-100 text-blue-800">#routing</Badge>
                      <Input className="border-none bg-transparent h-6 w-24 p-0 text-xs" placeholder="+ Add tag" />
                    </div>
                  </div>
                </div>
              </PanelCard>
              <PanelCard className="shadow-sm" title="Featured Image" titleClassName="text-sm font-semibold text-text-main-light dark:text-text-main-dark">
                <div
                  className="border-2 border-dashed border-border-light dark:border-border-dark rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                  onClick={() => toast.message("Upload coming soon.")}>
                  <Image className="h-6 w-6 text-text-muted-light dark:text-text-muted-dark group-hover:text-primary mb-2" />
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Click to upload or drag and drop</p>
                  <p className="text-[10px] text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 2MB)</p>
                </div>
              </PanelCard>
              <PanelCard
                className="shadow-sm"
                title="SEO Preview"
                titleClassName="text-sm font-semibold text-text-main-light dark:text-text-main-dark"
                headerRight={<Badge className="bg-green-100 text-green-600">Good</Badge>}>
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border border-border-light dark:border-border-dark">
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark truncate">
                    https://learn-ai.com/blog/enter-an-engaging-title
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium truncate mt-0.5">
                    Introduction to Chains &amp; Routing - Learn AI
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                    Learn how to connect multiple processing steps with LLMs to create complex workflows using Simple Chains and Router Patterns.
                  </p>
                </div>
              </PanelCard>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

export default UploadPage;
