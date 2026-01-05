import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import PageTransition from "../components/layouts/PageTransition";
import UserLayout from "../components/layouts/UserLayout";
import UserNavbar from "../components/organisms/UserNavbar";
import PublicFooter from "../components/organisms/PublicFooter";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Card, CardContent } from "../components/ui/card";
import { fetchCategories, fetchContents } from "../lib/contentApi";
import { getAuthToken } from "../lib/auth";
import { usePostsData } from "../lib/usePosts";

const DEFAULT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGx9H4nnFn9aeXosFIw3EICJ3A6X6qZS368XmLYw_5DXYJn--zuGHwmTRk2VsEAYLQsz4P3tq9JVo6qXKXfhEpAnyHycmW7eWeempM6IZg0X_2vD17D_HribheYY2gE7dBM27j8NGfO5RkjsaEz5zzmNvPkLn0MLBHOkj0ArwNW1oPtV5HAv6P_3yLD3gp8MQ1OYSRnA-YzWetR_i9vVKN3RaDfkofnCDJe_eX5hOInatwFyOGE1AypoJ2_gcd6UVnfeK8XdbZRGio";

const formatDateLabel = (value?: string) => {
  const date = value ? new Date(value) : new Date();
  const safeDate = Number.isNaN(date.getTime()) ? new Date() : date;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(safeDate);
};

const splitParagraphs = (body?: string) =>
  body
    ? body
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
    : [];

const PREVIEW_PARAGRAPH_COUNT = 4;
const PREVIEW_BLUR_MIN = 4;
const PREVIEW_BLUR_MAX = 14;
const PREVIEW_OVERLAY_MIN = 0.2;
const PREVIEW_OVERLAY_MAX = 0.75;

const PostDetailPage = () => {
  const { slug } = useParams({ from: "/library/$slug" as const });
  const posts = usePostsData();
  const contentsQuery = useQuery({ queryKey: ["contents"], queryFn: fetchContents });
  const categoriesQuery = useQuery({ queryKey: ["categories"], queryFn: fetchCategories });
  const isAuthenticated = Boolean(getAuthToken());
  const [previewBlur, setPreviewBlur] = useState(PREVIEW_BLUR_MIN);
  const [previewOpacity, setPreviewOpacity] = useState(PREVIEW_OVERLAY_MIN);
  const lockedSectionRef = useRef<HTMLDivElement | null>(null);

  const content = useMemo(
    () =>
      (contentsQuery.data ?? []).find((item) => item.slug === slug && item.type === "post"),
    [contentsQuery.data, slug]
  );

  const fallbackPost = useMemo(() => posts.find((post) => post.slug === slug), [posts, slug]);

  const categoryMap = useMemo(
    () => new Map((categoriesQuery.data ?? []).map((category) => [category._id, category.name])),
    [categoriesQuery.data]
  );

  const isLoading = contentsQuery.isLoading && !content && !fallbackPost;

  const wrapWithLayout = (children: ReactNode) => {
    const page = (
      <PageTransition className={isAuthenticated ? "" : "flex flex-col min-h-screen"}>
        <div className={isAuthenticated ? "" : "flex-1 px-4 sm:px-6 lg:px-8 py-10"}>{children}</div>
        {isAuthenticated ? null : <PublicFooter />}
      </PageTransition>
    );

    if (isAuthenticated) {
      return <UserLayout>{page}</UserLayout>;
    }

    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white">
        <UserNavbar />
        {page}
      </div>
    );
  };

  if (isLoading) {
    return wrapWithLayout(
      <div className="mx-auto max-w-[900px]">
        <p className="text-[#4c669a] dark:text-gray-400">Loading article...</p>
      </div>
    );
  }

  if (!content && !fallbackPost) {
    return wrapWithLayout(
      <div className="mx-auto max-w-[900px]">
        <h1 className="text-3xl font-bold mb-3">Article not found</h1>
        <p className="text-[#4c669a] dark:text-gray-400 mb-6">
          The article you are looking for is not available.
        </p>
        <Button asChild>
          <Link to="/library">Back to Library</Link>
        </Button>
      </div>
    );
  }

  const category =
    (content?.categories?.[0] ? categoryMap.get(content.categories[0]) : undefined) ??
    fallbackPost?.category ??
    "General";
  const title = content?.title ?? fallbackPost?.title ?? "Article";
  const description = content?.excerpt ?? content?.description ?? fallbackPost?.excerpt ?? "";
  const imageUrl = content?.thumbnail ?? fallbackPost?.imageUrl ?? DEFAULT_IMAGE;
  const imageAlt = content?.image_alt ?? fallbackPost?.imageAlt ?? title;
  const readTime = content?.read_time ?? fallbackPost?.readTime ?? "";
  const dateLabel = formatDateLabel(content?.createdAt ?? content?.updatedAt ?? fallbackPost?.date);
  const author = content?.author ?? fallbackPost?.author;
  const objectives = content?.objectives ?? [];
  const bodyParagraphs = content?.body
    ? splitParagraphs(content.body)
    : content?.content_blocks && content.content_blocks.length > 0
      ? content.content_blocks
      : fallbackPost?.content ?? [];
  const shouldLockContent = !isAuthenticated && bodyParagraphs.length > 0;
  const previewCount = shouldLockContent
    ? bodyParagraphs.length > PREVIEW_PARAGRAPH_COUNT
      ? PREVIEW_PARAGRAPH_COUNT
      : Math.max(1, bodyParagraphs.length - 1)
    : bodyParagraphs.length;
  const previewParagraphs = shouldLockContent ? bodyParagraphs.slice(0, previewCount) : bodyParagraphs;
  const lockedParagraphs = shouldLockContent ? bodyParagraphs.slice(previewCount) : [];
  const lockedFallback = [
    "Sign in to unlock the rest of this post.",
    "Create a free account to access full content and exercises.",
    "Keep your progress synced across devices.",
  ];
  const lockedPreview = lockedParagraphs.length > 0 ? lockedParagraphs : lockedFallback;
  const hasLockedContent = shouldLockContent;
  const tags = content?.tags ?? fallbackPost?.tags ?? [];
  const exercises = content?.exercises ?? [];
  const redirectPath = `/library/${slug}`;

  useEffect(() => {
    if (isAuthenticated || !hasLockedContent) {
      return;
    }

    let frame = 0;
    const updateBlur = () => {
      frame = 0;
      if (!lockedSectionRef.current) {
        return;
      }
      const rect = lockedSectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const totalDistance = rect.height + viewportHeight;
      const progress = Math.min(Math.max((viewportHeight - rect.top) / totalDistance, 0), 1);
      const blurValue = PREVIEW_BLUR_MIN + (PREVIEW_BLUR_MAX - PREVIEW_BLUR_MIN) * progress;
      const opacityValue = PREVIEW_OVERLAY_MIN + (PREVIEW_OVERLAY_MAX - PREVIEW_OVERLAY_MIN) * progress;
      setPreviewBlur(Number(blurValue.toFixed(2)));
      setPreviewOpacity(Number(opacityValue.toFixed(2)));
    };

    const handleScroll = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(updateBlur);
    };

    updateBlur();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isAuthenticated, hasLockedContent]);

  return wrapWithLayout(
    <div className="mx-auto max-w-[900px]">
          <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
            <Badge className="bg-blue-50 text-blue-700 font-semibold px-3 py-1 rounded-full">{category}</Badge>
            <span className="text-slate-400">&bull;</span>
            <span className="text-slate-500 font-medium">{dateLabel}</span>
            {readTime ? (
              <>
                <span className="text-slate-400">&bull;</span>
                <span className="text-slate-500 font-medium">{readTime}</span>
              </>
            ) : null}
          </div>

          <h1 className="text-3xl md:text-4xl font-black mb-4">{title}</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">{description}</p>

          <div className="overflow-hidden rounded-2xl mb-10 border border-slate-200 dark:border-slate-800">
            <img alt={imageAlt} className="w-full h-[360px] object-cover" src={imageUrl} />
          </div>

          {objectives.length > 0 ? (
            <Card className="mb-10 border border-blue-100 dark:border-blue-900/40 bg-blue-50/40 dark:bg-blue-900/10">
              <CardContent className="p-6">
                <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  Learning objectives
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {objectives.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : null}

          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
            {previewParagraphs.map((paragraph, index) => (
              <p key={`${slug}-body-${index}`}>{paragraph}</p>
            ))}
          </div>

          {hasLockedContent ? (
            <>
              <div className="mt-8 relative">
                <div className="absolute inset-x-0 -top-12 h-12 bg-gradient-to-b from-transparent to-background-light dark:to-background-dark pointer-events-none" />
                <Card className="border border-primary/30 bg-white/95 dark:bg-[#101622]/95 shadow-lg">
                  <CardContent className="p-6 text-center space-y-3">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      Sign in to keep reading
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      You have reached the preview limit. Log in to unlock the full article and exercises.
                    </p>
                    <Button asChild>
                      <Link search={{ redirect: redirectPath, tab: "login" }} to="/auth">
                        Sign In to Continue
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className="relative mt-10 min-h-[220px]" ref={lockedSectionRef}>
                <div
                  className="prose dark:prose-invert max-w-none text-slate-500 dark:text-slate-400 select-none pointer-events-none transition-[filter,opacity] duration-300"
                  style={{ filter: `blur(${previewBlur}px)` }}
                >
                  {lockedPreview.map((paragraph, index) => (
                    <p key={`${slug}-locked-${index}`}>{paragraph}</p>
                  ))}
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-background-light/0 via-background-light/70 to-background-light dark:from-background-dark/0 dark:via-background-dark/70 dark:to-background-dark transition-opacity duration-300"
                  style={{ backdropFilter: `blur(${previewBlur}px)`, opacity: previewOpacity }}
                />
              </div>
            </>
          ) : null}

          {isAuthenticated && content?.project_application ? (
            <Card className="mt-10 border border-emerald-100 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-900/10">
              <CardContent className="p-6">
                <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {content.project_application.title ?? "Apply to a project"}
                </h2>
                {content.project_application.steps?.length ? (
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {content.project_application.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                ) : null}
                {content.project_application.expected_result ? (
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-4">
                    {content.project_application.expected_result}
                  </p>
                ) : null}
              </CardContent>
            </Card>
          ) : null}

          {isAuthenticated && exercises.length > 0 ? (
            <Card className="mt-10 border border-orange-100 dark:border-orange-900/40 bg-orange-50/40 dark:bg-orange-900/10">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Practice exercises</h2>
                {exercises.map((exercise, index) => (
                  <div className="rounded-lg border border-orange-100/80 dark:border-orange-900/40 bg-white/80 dark:bg-slate-900/40 p-4" key={`${slug}-ex-${index}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {exercise.title ?? `Exercise ${index + 1}`}
                      </h3>
                      {exercise.type ? (
                        <span className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                          {exercise.type}
                        </span>
                      ) : null}
                    </div>
                    {exercise.instructions ? (
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{exercise.instructions}</p>
                    ) : null}
                    {exercise.flow_config?.steps?.length ? (
                      <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 mb-3">
                        {exercise.flow_config.steps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ul>
                    ) : null}
                    {exercise.initial_code ? (
                      <pre className="text-xs bg-slate-900 text-slate-100 rounded-md p-3 overflow-x-auto">
                        <code>{exercise.initial_code}</code>
                      </pre>
                    ) : null}
                  </div>
                ))}
              </CardContent>
            </Card>
          ) : null}

          {isAuthenticated && tags.length > 0 ? (
            <div className="mt-10 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800 dark:text-slate-300"
                  key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {isAuthenticated && author ? (
            <div className="mt-10 flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage alt={author.name ?? "Author"} src={author.avatar ?? ""} />
                <AvatarFallback>{author.name ? author.name.slice(0, 2) : "AU"}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{author.name ?? "Learning Team"}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {author.role ?? "Contributor"}
                </p>
              </div>
            </div>
          ) : null}
    </div>
  );
};

export default PostDetailPage;
