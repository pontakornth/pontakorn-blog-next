import tw, { styled } from 'twin.macro'
import { H1, H2 } from '../components/elements/Heading'
import Head from 'next/head'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

const Container = tw.div`text-center`

type BlogPost = {
  title: string;
  description: string;
}

const IndexPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { total, items } = posts as { total: number, items: BlogPost[] }
  return (
    <Container>
      <Head>
        <title>Pontakorn Blog</title>
      </Head>
      <H1>Pontakorn Blog</H1>
      {items.map(item => (
        <>
          <H2>{item.title}</H2>
          <p tw="mb-4">{item.description}</p>
        </>
      ))}
    </Container>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps = async (context) => {
  const { getAllPosts } = await import("../services/getAllPosts")
  const { blogPostCollection: allPosts } = await getAllPosts()
  return {
    props: {
      posts: allPosts
    }
  }
}
