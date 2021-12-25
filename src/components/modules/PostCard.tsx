import tw from "twin.macro";
import { H2 } from "../elements/Heading";
import Link from "next/link";
import { BlogPost } from "../../core/@types/BlogPost";
export interface PostCardProps {
  post: BlogPost,
}
export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div tw="p-4 rounded border border-primary shadow-lg text-left">
      <H2 tw="text-primary underline text-3xl">
        <Link href={`https://blog.pontakorn.dev/${post.slug}`} passHref>
          <a target="__blank">{post.title}</a>
        </Link>
      </H2>
      <p>{post.brief}</p>
    </div>
  );
};

