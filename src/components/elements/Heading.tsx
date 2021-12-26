import tw, { styled, TwStyle } from 'twin.macro'

type Heading = "h1" | "h2" | "h3"

const headingSize: { [key in Heading]: TwStyle } = {
	"h1": tw`text-6xl`,
	"h2": tw`text-5xl`,
	"h3": tw`text-3xl`,

}

function getHeading() {
	return (["h1", "h2", "h3"] as Heading[])
		.map(element => styled(element, {
			...tw`font-bold font-display mb-4`,
			...headingSize[element],
			variants: {
				color: {
					primary: {
						...tw`text-indigo-700 dark:text-primary`,
					}
				}
			}
		}))
}

export const [H1, H2, H3] = getHeading()