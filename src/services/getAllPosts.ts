import { gql } from "graphql-request"
import { client } from "../core/graphql"

interface PostsResult {
	blogPostCollection: {
		total: number,
		items: Array<{
			title: string,
			description: string,
		}>
	}
}

export const getAllPosts: () => Promise<PostsResult> = async () => {
	return await client.request(
		gql`
	query {
		blogPostCollection {
		total
		items 
			{
				title
				description
			}
		}
	}
`)
}