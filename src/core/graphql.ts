import { GraphQLClient } from "graphql-request"

// TODO: Change to Hashnode API
const endpoint = `https://api.hashnode.com`

// TODO: Change to Hashnode API
export const client = new GraphQLClient(endpoint, {
	headers: {
		authorization: `Bearer ${process.env.API_KEY}`
	}
})