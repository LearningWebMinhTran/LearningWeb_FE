import { Calendar, Clock, FolderPlus, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

type LibraryPostCardProps = {
  category: string;
  categoryClassName: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  dateLabel: string;
  readTime: string;
  onSelect?: () => void;
  onAddToFolder?: () => void;
  authorName: string;
  authorImage: string;
  authorAlt: string;
};

const LibraryPostCard = ({
  category,
  categoryClassName,
  imageUrl,
  imageAlt,
  title,
  excerpt,
  dateLabel,
  readTime,
  onSelect,
  onAddToFolder,
  authorName,
  authorImage,
  authorAlt,
}: LibraryPostCardProps) => {
  const TitleContent = onSelect ? (
    <button
      className="text-left text-xl md:text-2xl font-bold text-[#0d121b] dark:text-white group-hover:text-primary transition-colors"
      onClick={onSelect}
      type="button">
      {title}
    </button>
  ) : (
    <span className="text-xl md:text-2xl font-bold text-[#0d121b] dark:text-white">{title}</span>
  );

  return (
    <Card className="group flex flex-col md:flex-row gap-6 p-5 shadow-sm border border-transparent hover:border-primary/20 transition-all hover:shadow-md cursor-grab active:cursor-grabbing">
      <div className="w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden rounded-lg bg-gray-200 relative">
        <img
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt={imageAlt}
          src={imageUrl}
        />
        <Badge className={categoryClassName}>{category}</Badge>
      </div>
      <CardContent className="flex flex-col flex-1 gap-3 p-0">
        <div className="flex items-center gap-3 text-xs text-[#4c669a] dark:text-gray-400 font-medium">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {dateLabel}
          </span>
          <span className="size-1 rounded-full bg-gray-300"></span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {readTime}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0d121b] dark:text-white group-hover:text-primary transition-colors">
          {TitleContent}
        </h3>
        <p className="text-[#4c669a] dark:text-gray-400 text-sm md:text-base leading-relaxed line-clamp-2">
          {excerpt}
        </p>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="size-8">
              <AvatarImage alt={authorAlt} src={authorImage} />
              <AvatarFallback>{authorName.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-semibold text-[#0d121b] dark:text-white">{authorName}</span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              className="text-gray-500 hover:text-primary"
              onClick={onAddToFolder}
              size="icon"
              title="Add to Folder"
              variant="ghost">
              <FolderPlus className="h-4 w-4" />
            </Button>
            {onSelect ? (
              <Button onClick={onSelect} variant="link">
                Read More
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LibraryPostCard;
