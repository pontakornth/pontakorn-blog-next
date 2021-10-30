import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head"
import { H1 } from "../elements/Heading";

interface SinglePostProps {
	title: string,
	body: MDXRemoteSerializeResult
}
export const SinglePost: React.FC<SinglePostProps> = ({ title, body }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<H1>{title}</H1>
			<MDXRemote {...body} />
		</>
	)
}