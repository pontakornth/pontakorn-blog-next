import { gql } from "graphql-request"
import { BlogPost } from "../core/@types/BlogPost"
import { client } from "../core/graphql"

interface PostsResult {
	user: {
		publication: {
			posts: Array<BlogPost>
		}
	}
}

export const getBlog: () => Promise<PostsResult> = async () => {
	return await client.request(
		gql`
		query GetLastestPublication {
			user(username: "${process.env.USERNAME}") {
			  publication {
				posts {
				  title
				  brief
				  slug
				}
			  }
			}
		  }
`)
}