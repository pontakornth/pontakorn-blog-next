import { gql } from "graphql-request"
import { BlogPost } from "../core/@types/BlogPost"
import { client } from "../core/graphql"

interface PostsResult {
	blogPostCollection: {
		total: number,
		items: Array<BlogPost>
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
				slug
			}
		}
	}
`)
}