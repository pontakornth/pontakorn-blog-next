import tw from "twin.macro"
import { Container } from "../components/elements/Container"
import { Navbar } from "../components/modules/Navbar"
import Head from "next/head"
import { H1 } from "../components/elements/Heading"
import { getBlog } from "../services/getBlog"
import { GetServerSideProps } from "next"
import { BlogPost } from "../core/@types/BlogPost"
import { PostCard } from "../components/modules/PostCard"

interface BlogPostProps {
  posts: Array<BlogPost>
}

const BlogPage = ({ posts }: BlogPostProps) => {
  return (
    <>
      <Navbar />
      <Container>
        <Head>
          <title>Blog</title>
        </Head>
        <H1 tw="text-indigo-700">Blog</H1>
        <p tw="text-lg">
          These are latest posts on my blog. You can read my blog on <a tw="text-primary hover:text-blue-600" href="https://blog.pontakorn.dev">blog.pontakorn.dev</a><br></br>
          There might be mixture of Thai and English.
        </p>
        <div tw="space-y-4 py-8">
          {posts.map(post => (
            <PostCard post={post} />
          ))}
        </div>
      </Container>
    </>
  )
}

export default BlogPage

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await getBlog()
  console.log(result)
  return {
    props: {
      posts: result.user.publication.posts
    }
  }
}