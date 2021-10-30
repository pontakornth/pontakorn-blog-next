import tw, { styled, TwStyle } from 'twin.macro'

type Heading = "h1" | "h2" | "h3"

const headingSize: { [key in Heading]: TwStyle } = {
	"h1": tw`text-5xl`,
	"h2": tw`text-2xl`,
	"h3": tw`text-xl`,

}

function getHeading() {
	return (["h1", "h2", "h3"] as Heading[])
		.map(element => styled(element, {
			...tw`font-bold mb-4`,
			...headingSize[element],
			variants: {
				primary: {
					...tw`text-indigo-700`,
				}
			}
		}))
}

export const [H1, H2, H3] = getHeading()