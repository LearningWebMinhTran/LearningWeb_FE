import { Link, useParams } from "@tanstack/react-router";

import UserNavbar from "../components/organisms/UserNavbar";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Card, CardContent } from "../components/ui/card";
import { getPostBySlug } from "../data/posts";

const PostDetailPage = () => {
  const { slug } = useParams({ from: "/posts/$slug" });
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <Button asChild variant="outline">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-white">
      <UserNavbar />
      <div className="mx-auto max-w-[960px] px-4 py-12 space-y-8">
        <Button asChild variant="outline">
          <Link to="/blog">Back to Blog</Link>
        </Button>
        <Card className="overflow-hidden">
          <div
            className="h-64 w-full bg-cover bg-center"
            style={{ backgroundImage: `url('${post.imageUrl}')` }}
          ></div>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-primary/10 text-primary">{post.category}</Badge>
              <span className="text-sm text-[#4c669a] dark:text-gray-400">{post.dateLabel}</span>
              <span className="text-sm text-[#4c669a] dark:text-gray-400">{post.readTime}</span>
            </div>
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-[#4c669a] dark:text-gray-400">{post.excerpt}</p>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage alt={post.author.name} src={post.author.avatar} />
                <AvatarFallback>{post.author.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-sm text-[#4c669a] dark:text-gray-400">{post.author.role}</p>
              </div>
            </div>
            <div className="space-y-4 text-[#0d121b] dark:text-white">
              {post.content.map((paragraph, index) => (
                <p key={`${post.slug}-${index}`}>{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostDetailPage;
