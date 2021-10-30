import Image from "next/image"
import { ImageProps } from "next/image"
export const ResponsiveImage = (props: ImageProps) => {
	return <Image alt={props.alt} layout="fill" {...props} />
}