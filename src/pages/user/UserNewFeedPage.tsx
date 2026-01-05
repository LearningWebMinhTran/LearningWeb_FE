import { Link } from "@tanstack/react-router";

import UserLayout from "../../components/layouts/UserLayout";
import MaterialIcon from "../../components/atoms/MaterialIcon";
import { slugify } from "../../lib/utils";

const feedPosts = [
  {
    author: "Sarah Jenks",
    role: "Senior Frontend Developer",
    time: "2 hours ago",
    title: "Mastering Python Decorators",
    excerpt:
      "Decorators are one of Python's most powerful features. This guide breaks them down step-by-step with practical examples.",
    tags: ["#Python", "#Coding"],
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6enTDwNey_cLS9-PtyZMSaRyAPCngujS4n4PbqJZnAuPYuoTHcvU_bPoJm6s5kQkdSyh7zOwH9KygHJajAUiaj2j0Aa_b7TvNK6ZzilIonsxfQWZ8Sd-bm8a4FAh2_mwSrYkz6BFlWXCwZM2RlGTbpDFJV6nLAaE6ZQu-TPMZnr-mJJe4F35ygNNwEaB8VjNjbFkEvqnaOdzARoqBbbsGGvMs_03zCz5GHFfZkwD9KWsIwCfZmHlnSSDRa41Z2VHtLDl6oK0SFggS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmng-DSXrNWrkjZnLXtfcHmdn2pG0159L0mCdWgft3Id2AxZp6ADUoLjoh1MtN72ne2Y9F9v5cO1SkNki0EJxwuLpaOFHJOhDyQ-nx4R0PMBi30HxA1CrFOSN_TtTqHTYVa2TMFnaXcGBUbE1tBqq4w3-uYThaKWjEg9hIDLN6ua2uAZI59bNaUWcvW0LE5vSJjsU0lX0ac2pkEhQQfjKIZfS6CJcMwFfEcKe62kTAFg83BxViUmpfltD7pnQLjEvExdSEvNHy6K1p",
    likes: "124",
    comments: "42",
  },
  {
    author: "David Kim",
    role: "UX Researcher",
    time: "5 hours ago",
    title: "Principles of User Interface Design",
    excerpt:
      "We explore the 10 heuristics of UI design and how to apply them to modern web applications.",
    tags: ["#UIUX", "#Design"],
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBp6FiMHdIiZqlOVOXIngTsu9dF2lqGX78j_4nrA1WFsDcjjRGEMKdB_xFQ95tRlktAtMTsrsGPlousKtBVb4wkGgo6g0k2cYAyfuFF4RWlGUp7eBP2Dh7pUKquZvKR5_I98mlS16Z4ztNJ8Ij3vz7Ysg0d02QERCC-zPaU1UaxqP7k7DRgP4x1x_gMEcVsKHGGaXi0fMRNWAyVHzYmtkWnrlU7qDFLz_VT5VCqmfFXvgKdWh7Rl_msR36Wx6lpELFn4fBNfGjcEsXr",
    quote: '"Good design is obvious. Great design is transparent." - Joe Sparano',
    likes: "89",
    comments: "14",
  },
  {
    author: "Elena Rodriguez",
    role: "Data Scientist",
    time: "1 day ago",
    title: "Understanding Neural Networks",
    excerpt:
      "A deep dive into backpropagation and activation functions with practical visual intuition.",
    tags: ["#AI", "#DeepLearning"],
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzn0Yg4uMmd9SmlvGFoqpI_4AH9DMn3X-cVHWyerM1hNyZWIM4wlkqxDSS0SXu2f4TnKafWHdrK1Dj3VpIJLOQP1RtDKyIGDbO0UuNJIFctGMtY4cQMFhEu33j_mxaMT1gfH9UDna4njSWKLfjynrY-hwADimwzNLgYcFrR9hOpYxpP8BbpLapzeIK6xzabW_IUh6juNey-w-7budGeJ3RCW2-vKcLU4eynrc6q4KmlQuWPbCGrjCUJozW_wl-pCs4KkN4V5FgcULQ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3lTaKDQU9d_uUV0IzgMHg32pCt4B_eUg2fficyQzRtk3bBO30r36Hq6SrC96v4G3nyUPXsWZj7qaz91zvlxRBxWg_Ds-gxwoPQOLi10P7R09V45cOrZJIY6RVdt30hjCjnvdMLAnsZghZ9CNuUhdRRbbvqL-gIud1Ih_0n_MaxUMCBBKx2iWZ8ptcFjUR-taW2Ff7GLzgU_R2qffl62U_x_HXj5QvKEUS0G7hHG3T4bwOH9jnomnXWEc34th38VQenh4fXt4WXgI4",
    likes: "256",
    comments: "53",
  },
];

const UserNewFeedPage = () => {
  return (
    <UserLayout activeNav="feed" searchPlaceholder="Search topics, authors, or posts...">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">New Feed</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              Discover the latest learning content from the community.
            </p>
          </div>
          <div className="flex bg-slate-100 dark:bg-[#141b29] p-1 rounded-lg self-start sm:self-auto">
            <button className="px-4 py-1.5 rounded-md bg-white dark:bg-[#1a2234] text-xs font-bold text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700" type="button">
              All Posts
            </button>
            <button className="px-4 py-1.5 rounded-md text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" type="button">
              Following
            </button>
            <button className="px-4 py-1.5 rounded-md text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" type="button">
              Popular
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)_320px] gap-8">
          <aside className="hidden lg:flex flex-col gap-6">
            <div className="bg-white dark:bg-[#1a2234] rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <MaterialIcon className="text-primary" name="auto_awesome" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">Your Focus</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Stay on track with your top topics today.
              </p>
              <div className="flex flex-wrap gap-2">
                {["#React", "#Python", "#Design"].map((tag) => (
                  <span
                    className="px-2 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-primary/10 text-primary"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-[#1a2234] rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">Reading Streak</h3>
                <MaterialIcon className="text-amber-500" name="local_fire_department" />
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">9 days</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Keep it going with one post today.</p>
              <div className="mt-3 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                <div className="h-1.5 rounded-full bg-primary" style={{ width: "70%" }} />
              </div>
            </div>
          </aside>
          <div className="flex flex-col gap-6">
            <div className="bg-white dark:bg-[#1a2234] p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex gap-4 items-center shadow-sm">
              <div
                className="size-10 rounded-full bg-cover bg-center shrink-0"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqEV6q1VMv3zrMYv01xJhp6n8dYMQ5Xu6ngf0_aIC_YBVxLwQzEbXyUt4irJwixib4VJOoCKtzaZfrMS4CvtaxbZZG-FL-fTzx0FXB5D1aJcwS8_tERzQkrrO4H1qLsSlJ0qdKbtn9_UXMykOyc5AaeB9vh6EVt7MySZcr9A3Io27xYMCsHOaNRY-fYTU2Km7oXVUjTiqIdyPx2jHOV_DyMkIjK9nua-gtau4pg4fYkyRkPkIrYrrbbbKDVd1O4kMy9tXpuecq4G7Y')",
                }}
              />
              <div className="flex-1 relative">
                <input
                  className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-full py-2.5 px-5 text-sm focus:ring-1 focus:ring-primary dark:text-white placeholder-slate-500"
                  placeholder="Share something new you learned today..."
                  type="text"
                />
              </div>
              <button className="text-primary hover:bg-primary/5 p-2 rounded-full transition-colors flex-shrink-0" type="button">
                <MaterialIcon name="image" />
              </button>
              <button className="text-primary hover:bg-primary/5 p-2 rounded-full transition-colors flex-shrink-0" type="button">
                <MaterialIcon name="send" />
              </button>
            </div>

            {feedPosts.map((post) => {
              const slug = slugify(post.title);
              return (
              <article
                className="bg-white dark:bg-[#1a2234] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                key={post.title}
              >
                <div className="p-5 flex items-start gap-4">
                  <div
                    className="size-12 rounded-full bg-slate-200 shrink-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${post.avatar}')` }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-slate-900 dark:text-white text-base">{post.author}</h3>
                          <span className="text-slate-400 text-xs">{post.time}</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{post.role}</p>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" type="button">
                        <MaterialIcon name="more_horiz" />
                      </button>
                    </div>
                    <div className="mt-3">
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        <Link
                          className="hover:text-primary transition-colors"
                          params={{ slug }}
                          to="/library/$slug"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wide"
                            key={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {post.image ? (
                      <div
                        className="w-full h-64 rounded-lg bg-cover bg-center mb-4 border border-slate-100 dark:border-slate-700"
                        style={{ backgroundImage: `url('${post.image}')` }}
                      />
                    ) : null}
                    {post.quote ? (
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700 mb-4">
                        <p className="italic text-slate-600 dark:text-slate-400 text-sm">{post.quote}</p>
                      </div>
                    ) : null}
                    <div className="flex items-center gap-6 border-t border-slate-100 dark:border-slate-700 pt-3">
                      <button className="flex items-center gap-1.5 text-slate-500 hover:text-red-500 transition-colors group" type="button">
                        <MaterialIcon className="text-[20px] group-hover:fill-1" name="favorite" />
                        <span className="text-xs font-bold">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors" type="button">
                        <MaterialIcon className="text-[20px]" name="chat_bubble" />
                        <span className="text-xs font-bold">{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors ml-auto" type="button">
                        <MaterialIcon className="text-[20px]" name="ios_share" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
            })}

            <div className="flex justify-center py-4">
              <button className="text-sm font-semibold text-primary hover:bg-primary/5 px-6 py-3 rounded-lg transition-colors flex items-center gap-2" type="button">
                <MaterialIcon className="animate-spin text-lg" name="refresh" />
                Load More Posts
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white dark:bg-[#1a2234] rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <MaterialIcon className="text-primary" name="trending_up" />
                <h3 className="font-bold text-slate-900 dark:text-white">Trending Topics</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "#JavaScript", value: "2.4k" },
                  { label: "#ReactJS", value: "1.8k" },
                  { label: "#WebDesign", value: "950" },
                  { label: "#Python", value: "820" },
                  { label: "#Career", value: "500" },
                ].map((topic) => (
                  <span
                    className="px-3 py-1.5 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-medium cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all"
                    key={topic.label}
                  >
                    {topic.label}
                    <span className="text-[10px] opacity-60 ml-1">{topic.value}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-[#1a2234] rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">Recommended Reads</h3>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: "Mastering Python Decorators",
                    author: "Sarah Jenks",
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmng-DSXrNWrkjZnLXtfcHmdn2pG0159L0mCdWgft3Id2AxZp6ADUoLjoh1MtN72ne2Y9F9v5cO1SkNki0EJxwuLpaOFHJOhDyQ-nx4R0PMBi30HxA1CrFOSN_TtTqHTYVa2TMFnaXcGBUbE1tBqq4w3-uYThaKWjEg9hIDLN6ua2uAZI59bNaUWcvW0LE5vSJjsU0lX0ac2pkEhQQfjKIZfS6CJcMwFfEcKe62kTAFg83BxViUmpfltD7pnQLjEvExdSEvNHy6K1p",
                  },
                  {
                    title: "Advanced State Management in 2024",
                    author: "John Doe",
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBp6FiMHdIiZqlOVOXIngTsu9dF2lqGX78j_4nrA1WFsDcjjRGEMKdB_xFQ95tRlktAtMTsrsGPlousKtBVb4wkGgo6g0k2cYAyfuFF4RWlGUp7eBP2Dh7pUKquZvKR5_I98mlS16Z4ztNJ8Ij3vz7Ysg0d02QERCC-zPaU1UaxqP7k7DRgP4x1x_gMEcVsKHGGaXi0fMRNWAyVHzYmtkWnrlU7qDFLz_VT5VCqmfFXvgKdWh7Rl_msR36Wx6lpELFn4fBNfGjcEsXr",
                  },
                ].map((item, index) => {
                  const slug = slugify(item.title);
                  return (
                  <div key={item.title}>
                    <Link className="flex gap-3 group" params={{ slug }} to="/library/$slug">
                      <div
                        className="size-12 rounded-lg bg-cover bg-center shrink-0"
                        data-alt={item.title}
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">By {item.author}</p>
                      </div>
                    </Link>
                    {index === 0 ? <hr className="border-slate-100 dark:border-slate-700 mt-4" /> : null}
                  </div>
                  );
                })}
              </div>
              <button className="w-full mt-4 text-xs font-bold text-primary hover:bg-primary/5 py-2 rounded-lg transition-colors" type="button">
                View All Recommendations
              </button>
            </div>

            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-3">
                <h3 className="font-bold text-lg">Daily Challenge</h3>
                <p className="text-white/80 text-sm">
                  Post a summary of what you learned today with the tag #TodayILearned
                </p>
                <button
                  className="mt-2 bg-white text-primary text-sm font-bold py-2 px-4 rounded-lg w-max hover:bg-opacity-90 transition-colors"
                  type="button"
                >
                  Accept Challenge
                </button>
              </div>
              <MaterialIcon className="absolute -bottom-4 -right-4 text-9xl text-white opacity-10" name="emoji_events" />
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserNewFeedPage;
