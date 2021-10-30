import { GraphQLClient } from "graphql-request"

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`

export const client = new GraphQLClient(endpoint, {
	headers: {
		authorization: `Bearer ${process.env.API_KEY}`
	}
})