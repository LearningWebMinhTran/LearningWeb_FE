import { Link } from "@tanstack/react-router";
import { toast } from "sonner";

import UserNavbar from "../components/organisms/UserNavbar";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-white">
      <UserNavbar />
      <main className="mx-auto max-w-[1280px] px-4 py-10 space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#0d121b] dark:text-white">Dashboard</h1>
            <p className="text-sm text-[#4c669a] dark:text-gray-400">Your publishing overview at a glance.</p>
          </div>
          <Button asChild>
            <Link to="/upload">Create Post</Link>
          </Button>
        </div>
        <section className="grid gap-6 md:grid-cols-3">
          {[
            { label: "Published Posts", value: "24" },
            { label: "Drafts", value: "5" },
            { label: "Comments", value: "128" },
          ].map((stat) => (
            <Card key={stat.label} className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-sm text-text-muted-light">{stat.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-[#0d121b] dark:text-white">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </section>
        <section className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" onClick={() => toast.message("Opening editor...")}>New Draft</Button>
              <Button asChild className="w-full" variant="outline">
                <Link to="/library">View Library</Link>
              </Button>
              <Button asChild className="w-full" variant="outline">
                <Link to="/account">Account Settings</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-[#4c669a] dark:text-gray-400">
              <div className="flex items-center justify-between">
                <span>Draft saved: LLM Routing Basics</span>
                <Badge variant="secondary">Just now</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>New comment on MongoDB Schema</span>
                <Badge variant="secondary">1h</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Profile updated</span>
                <Badge variant="secondary">Yesterday</Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;

