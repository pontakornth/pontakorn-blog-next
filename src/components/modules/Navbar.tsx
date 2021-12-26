import Link from 'next/link'
import tw from 'twin.macro'
import { Button } from '../elements/Button'
import IconWebringBlack from '~icons/webring/black.jsx'
import { DarkModeToggle } from '../elements/DarkModeToggle'
// TODO: Implement dark mode
// import IconWebringWhite from '~icons/webring/white.jsx'
export const Navbar = () => {
	return (
		<nav tw="flex w-full justify-center py-4">
			<Link href="/" passHref>
				<Button tw="font-bold text-xl" as="a" variant="link">Home</Button>
			</Link>
			<Link href="/blog" passHref>
				<Button tw="font-bold text-xl" as="a" variant="link">Blog</Button>
			</Link>
			<Button href="https://webring.wonderful.software#pontakorn.dev" title="วงแหวนเว็บ" tw="font-bold text-xl" as="a" variant="link">
				<IconWebringBlack tw="block w-[32px] h-[32px]" viewBox="0 0 490 490" />
			</Button>
			<DarkModeToggle />
		</nav>
	)
}