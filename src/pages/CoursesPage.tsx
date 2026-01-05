import UserNavbar from "../components/organisms/UserNavbar";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const courses = [
  { title: "LLM Fundamentals", level: "Beginner", lessons: 12 },
  { title: "RAG Systems", level: "Intermediate", lessons: 8 },
  { title: "Orchestration & Agents", level: "Advanced", lessons: 10 },
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-white">
      <UserNavbar />
      <div className="mx-auto max-w-[1100px] px-4 py-12">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="text-[#4c669a] dark:text-gray-400">Structured learning paths for every level.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <Card className="shadow-sm" key={course.title}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge variant="secondary">{course.level}</Badge>
                <p className="text-sm text-[#4c669a] dark:text-gray-400">{course.lessons} lessons</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
