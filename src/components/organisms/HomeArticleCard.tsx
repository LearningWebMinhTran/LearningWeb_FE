import { Link } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

type HomeArticleCardProps = {
  category: string;
  categoryClassName: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  metaLabel: string;
  href: string;
  authorName: string;
  authorImage: string;
  authorAlt: string;
};

const HomeArticleCard = ({
  category,
  categoryClassName,
  imageUrl,
  imageAlt,
  title,
  excerpt,
  metaLabel,
  href,
  authorName,
  authorImage,
  authorAlt,
}: HomeArticleCardProps) => {
  return (
    <Card className="group flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          data-alt={imageAlt}
          style={{
            backgroundImage: `url('${imageUrl}')`,
          }}></div>
        <Badge className={categoryClassName}>{category}</Badge>
      </div>
      <CardContent className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Calendar className="h-3.5 w-3.5" />
          {metaLabel}
        </div>
        <Link
          className="mb-2 text-xl font-bold text-[#0d121b] dark:text-white group-hover:text-primary transition-colors line-clamp-2"
          to={href}>
          {title}
        </Link>
        <p className="mb-4 flex-1 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
          {excerpt}
        </p>
        <div className="mt-auto flex items-center gap-3 border-t border-gray-100 pt-4 dark:border-slate-700">
          <Avatar className="h-8 w-8">
            <AvatarImage alt={authorAlt} src={authorImage} />
            <AvatarFallback>{authorName.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <span className="text-xs font-medium text-[#0d121b] dark:text-white">{authorName}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default HomeArticleCard;
