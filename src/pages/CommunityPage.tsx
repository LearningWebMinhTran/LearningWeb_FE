import UserNavbar from "../components/organisms/UserNavbar";
import PublicFooter from "../components/organisms/PublicFooter";
import PageTransition from "../components/layouts/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const topics = [
  { title: "Show us your latest AI project", replies: 42, tag: "#showcase" },
  { title: "Best resources to learn prompt engineering", replies: 18, tag: "#learning" },
  { title: "Share your favorite open-source tools", replies: 27, tag: "#opensource" },
];

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased">
      <UserNavbar />
      <PageTransition className="flex flex-col min-h-screen">
        <div className="mx-auto max-w-[960px] px-4 py-12 flex-1">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Community</h1>
            <p className="text-slate-500 dark:text-slate-400">
              Join discussions, ask questions, and share your latest projects.
            </p>
          </div>
          <div className="space-y-4">
            {topics.map((topic) => (
              <Card className="shadow-sm" key={topic.title}>
                <CardHeader className="flex-row items-center justify-between">
                  <CardTitle className="text-base">{topic.title}</CardTitle>
                  <Badge variant="secondary">{topic.replies} replies</Badge>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-[#4c669a] dark:text-gray-400">{topic.tag}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <PublicFooter />
      </PageTransition>
    </div>
  );
};

export default CommunityPage;
