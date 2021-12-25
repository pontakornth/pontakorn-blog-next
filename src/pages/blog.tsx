import tw from "twin.macro"
import { Container } from "../components/elements/Container"
import { Navbar } from "../components/modules/Navbar"
import Head from "next/head"
import { H1 } from "../components/elements/Heading"

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Head>
          <title>Blog</title>
        </Head>
        <H1 tw="text-indigo-700">Blog</H1>
        <p tw="text-lg">
          Under construction. You can read my blog on <a tw="text-primary hover:text-blue-600" href="https://blog.pontakorn.dev">blog.pontakorn.dev</a>
        </p>
      </Container>
    </>
  )
}

export default BlogPage