import tw, { styled } from 'twin.macro'
import Link from "next/link"
import { H1, H2 } from '../components/elements/Heading'
import Head from 'next/head'
import { BlogPost } from '../core/@types/BlogPost'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Navbar } from '../components/modules/Navbar'
import { PostCard } from '../components/modules/PostCard'

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
        <div tw="grid grid-cols-1 lg:grid-cols-2 text-left gap-8 p-4">
          {items.map(item => (
            <>
              <PostCard link={`/${item.slug}`}
                title={item.title}
                description={item.description}
              />
            </>
          ))}
        </div>
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
