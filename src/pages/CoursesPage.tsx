import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import UserNavbar from "../components/organisms/UserNavbar";
import PublicFooter from "../components/organisms/PublicFooter";
import PageTransition from "../components/layouts/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { fetchContents, fetchCourses } from "../lib/contentApi";

type CourseCard = {
  title: string;
  level: string;
  lessons: number;
};

const fallbackCourses: CourseCard[] = [
  { title: "LLM Fundamentals", level: "Beginner", lessons: 12 },
  { title: "RAG Systems", level: "Intermediate", lessons: 8 },
  { title: "Orchestration & Agents", level: "Advanced", lessons: 10 },
];

const CoursesPage = () => {
  const coursesQuery = useQuery({ queryKey: ["courses"], queryFn: fetchCourses });
  const contentsQuery = useQuery({ queryKey: ["contents"], queryFn: fetchContents });

  const lessonCounts = useMemo(() => {
    const counts = new Map<string, number>();
    (contentsQuery.data ?? []).forEach((content) => {
      if (content.type !== "lesson" || !content.course_id) {
        return;
      }
      const key = String(content.course_id);
      counts.set(key, (counts.get(key) ?? 0) + 1);
    });
    return counts;
  }, [contentsQuery.data]);

  const apiCourses = useMemo(() => {
    const data = coursesQuery.data ?? [];
    if (data.length === 0) {
      return [];
    }
    return data
      .filter((course) => course.is_published ?? true)
      .map((course) => {
        const chapterCount =
          course.chapters?.reduce((sum, chapter) => sum + (chapter.lessons?.length ?? 0), 0) ?? 0;
        const lessonCount = chapterCount || lessonCounts.get(course._id) || 0;
        const level = course.level
          ? `${course.level.slice(0, 1).toUpperCase()}${course.level.slice(1)}`
          : "Beginner";

        return {
          title: course.title ?? "Untitled Course",
          level,
          lessons: lessonCount,
        };
      });
  }, [coursesQuery.data, lessonCounts]);

  const courses = apiCourses.length > 0 ? apiCourses : fallbackCourses;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased">
      <UserNavbar />
      <PageTransition className="flex flex-col min-h-screen">
        <div className="mx-auto max-w-[1100px] px-4 py-12 flex-1">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Courses</h1>
            <p className="text-slate-500 dark:text-slate-400">Structured learning paths for every level.</p>
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
        <PublicFooter />
      </PageTransition>
    </div>
  );
};

export default CoursesPage;
