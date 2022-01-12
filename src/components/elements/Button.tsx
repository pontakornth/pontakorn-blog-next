import tw, { styled } from 'twin.macro'

export const Button = styled.button({
	...tw`cursor-pointer px-4 py-2`,
	variants: {
		variant: {
			link: {
				...tw`text-primary hover:text-blue-600 visited:text-blue-700 dark:(text-blue-300 visited:text-blue-400) underline bg-none`
			},
			danger: {
				...tw`bg-red-500 hover:bg-red-600 font-bold`,
			},
			primary: {
				...tw`bg-primary hover:bg-blue-600 text-white`,
			},
			tech: {
				...tw`border shadow-md font-bold cursor-default`
			}
		}
	}
})