import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { H1 } from "../components/elements/Heading";

interface BlogPostPageProps {
	source: MDXRemoteSerializeResult<Record<string, unknown>>
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ source }: BlogPostPageProps) => {
	// TODO: Import from the actual source.
	return (
		<>
			<H1>Post Code</H1>
			<MDXRemote {...source} />
		</>
	)
}

export default BlogPostPage

export const getStaticProps: GetStaticProps = async (context) => {
	const markdownContent = " This is a **test**.  "
	const source = await serialize(markdownContent)
	return { props: { source } }
}

export const getStaticPaths: GetStaticPaths = async (context) => {
	return {
		paths: [{
			params: {
				slug: "123"
			}
		}],
		fallback: "blocking"
	}
}