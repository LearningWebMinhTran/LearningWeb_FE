import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import { posts as fallbackPosts, type Post } from "../data/posts";
import { fetchCategories, fetchContents } from "./contentApi";
import { buildPostsFromContent } from "./postUtils";

export const usePostsData = (): Post[] => {
  const contentsQuery = useQuery({ queryKey: ["contents"], queryFn: fetchContents });
  const categoriesQuery = useQuery({ queryKey: ["categories"], queryFn: fetchCategories });

  return useMemo(() => {
    const mapped = buildPostsFromContent(contentsQuery.data ?? [], categoriesQuery.data ?? []);
    return mapped.length > 0 ? mapped : fallbackPosts;
  }, [contentsQuery.data, categoriesQuery.data]);
};
