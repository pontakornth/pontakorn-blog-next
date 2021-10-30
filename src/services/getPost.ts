import { gql } from "graphql-request"
import { BlogPost } from "../core/@types/BlogPost"
import { client } from "../core/graphql"

interface PostResult {
	blogPostCollection: {
		items: Array<BlogPost>
	}
}

export const getPost = async (slug: string) => {
	const query = gql`
	query BlogPostQuery($slug: String!) {
		blogPostCollection(where: {slug: $slug}) {
			items {
				slug
				title
				body
				description
			}
		}
	}
	`
	const postArray: PostResult = await client.request(query, { slug })
	if (postArray.blogPostCollection.items.length != 1) {
		throw Error("Post does not exist or too many posts.")
	}
	return postArray.blogPostCollection.items[0]

}


