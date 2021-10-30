import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { H1 } from "../components/elements/Heading";
import { SinglePost } from "../components/templates/SinglePost";

interface BlogPostPageProps {
	title: string,
	body: MDXRemoteSerializeResult<Record<string, unknown>>
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ title, body }: BlogPostPageProps) => {
	// TODO: Import from the actual source.
	return <SinglePost title={title} body={body} />
}

export default BlogPostPage

export const getStaticProps: GetStaticProps = async (context) => {
	const { getPost } = await import("../services/getPost")
	const slug = context.params?.slug
	const post = await getPost(slug as unknown as string)
	const body = await serialize(post.body)
	return { props: { body, title: post.title } }
}

export const getStaticPaths: GetStaticPaths = async (context) => {
	const { getAllPosts } = await import("../services/getAllPosts")
	const allPostsResult = await getAllPosts()
	const allPosts = allPostsResult.blogPostCollection.items
	return {
		paths: allPosts.map(post => {
			return {
				params: {
					slug: post.slug
				}
			}
		}),
		fallback: "blocking"
	}
}