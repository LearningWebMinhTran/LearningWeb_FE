import type { HTMLAttributes } from "react";

type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt: string;
  imageClassName?: string;
};

const Avatar = ({ src, alt, className = "", imageClassName = "", ...rest }: AvatarProps) => {
  return (
    <div className={className} {...rest}>
      <img alt={alt} className={imageClassName || "w-full h-full object-cover"} src={src} />
    </div>
  );
};

export default Avatar;
