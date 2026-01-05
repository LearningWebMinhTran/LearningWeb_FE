import { apiGet } from "./api";

export type Category = {
  _id: string;
  name: string;
  slug: string;
};

export type ContentAuthor = {
  name?: string;
  role?: string;
  avatar?: string;
};

export type ContentExercise = {
  title?: string;
  type?: "quiz" | "code" | "flow";
  instructions?: string;
  initial_code?: string;
  solution_code?: string;
  flow_config?: {
    steps?: string[];
    logic?: Record<string, unknown>;
  };
  default_input?: string;
};

export type Content = {
  _id: string;
  title: string;
  slug: string;
  thumbnail?: string;
  image_alt?: string;
  excerpt?: string;
  description?: string;
  content_blocks?: string[];
  read_time?: string;
  author?: ContentAuthor;
  owner_id?: string | null;
  type?: "post" | "lesson";
  categories?: string[];
  tags?: string[];
  objectives?: string[];
  body?: string;
  project_application?: {
    title?: string;
    steps?: string[];
    expected_result?: string;
  };
  course_id?: string | null;
  exercises?: ContentExercise[];
  status?: "draft" | "published";
  createdAt?: string;
  updatedAt?: string;
};

export type CourseChapter = {
  title?: string;
  lessons?: string[];
};

export type Course = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  level?: "beginner" | "intermediate" | "advanced";
  categories?: string[];
  chapters?: CourseChapter[];
  is_published?: boolean;
};

export const fetchCategories = () => apiGet<Category[]>("/api/categories");

export const fetchContents = () => apiGet<Content[]>("/api/contents");

export const fetchCourses = () => apiGet<Course[]>("/api/courses");
