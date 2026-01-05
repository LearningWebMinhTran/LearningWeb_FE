import UserNavbar from "../components/organisms/UserNavbar";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const topics = [
  { title: "Show us your latest AI project", replies: 42, tag: "#showcase" },
  { title: "Best resources to learn prompt engineering", replies: 18, tag: "#learning" },
  { title: "Share your favorite open-source tools", replies: 27, tag: "#opensource" },
];

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-white">
      <UserNavbar />
      <div className="mx-auto max-w-[960px] px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Community</h1>
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
    </div>
  );
};

export default CommunityPage;
