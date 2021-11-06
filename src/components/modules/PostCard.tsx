import tw from 'twin.macro'
import { H2 } from '../elements/Heading'
import Link from 'next/link'
export interface PostCardProps {
	title: string,
	description: string,
	link: string
}
export const PostCard: React.FC<PostCardProps> = ({ title, description, link }) => {
	return (
		<div tw="p-4 rounded border border-primary shadow-lg">
			<H2 tw="text-primary underline">
				<Link href={link} passHref>
					<a>{title}</a>
				</Link>
			</H2>
			<p>{description}</p>
		</div>
	)

}