import tw, { styled } from 'twin.macro'
import Link from "next/link"
import { H1, H2 } from '../components/elements/Heading'
import Head from 'next/head'
import { BlogPost } from '../core/@types/BlogPost'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Navbar } from '../components/modules/Navbar'

const Container = tw.div`text-center`


const IndexPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { total, items } = posts as { total: number, items: BlogPost[] }
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Head>
          <title>Pontakorn Blog</title>
        </Head>
        <H1 color="primary">Pontakorn Blog</H1>
        {items.map(item => (
          <>
            <Link passHref href={`/${item.slug}`}>
              <H2 as="a">{item.title}</H2>
            </Link>
            <p tw="mb-4">{item.description}</p>
          </>
        ))}
      </Container>
    </>
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
