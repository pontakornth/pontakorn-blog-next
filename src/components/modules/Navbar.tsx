import Link from 'next/link'
import tw from 'twin.macro'
import { Button } from '../elements/Button'
export const Navbar = () => {
	return (
		<nav tw="flex w-full justify-center py-4">
			<Link href="/" passHref>
				<Button tw="font-bold text-xl" as="a" variant="link">Home</Button>
			</Link>
			<Link href="/blog" passHref>
				<Button tw="font-bold text-xl" as="a" variant="link">Blog</Button>
			</Link>
		</nav>
	)
}