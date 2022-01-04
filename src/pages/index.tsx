import tw, { styled } from 'twin.macro'
import Link from "next/link"
import { H1, H2, H3 } from '../components/elements/Heading'
import Head from 'next/head'
import { Navbar } from '../components/modules/Navbar'
import { Button } from '../components/elements/Button'
import { Container } from '../components/elements/Container'
import IconGithub from '~icons/carbon/logo-github.jsx'
import IconEmail from '~icons/carbon/email.jsx'
import projectFile from '../projects.json'

const projects = projectFile.projects

const Section = tw.section`py-8 m-auto`

const IndexPage = () => {
  const technologies = [
    "React",
    "Vue",
    "Svelte",
    "TypeScript",
    "JavaScript",
    "Python",
    "Django"
  ]
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Head>
          <title>Pontakorn Blog</title>
        </Head>
        <H1 color="primary">Pontakorn</H1>
        <p tw="text-2xl">I am a software engineer.</p>
        <Section>
          <H2 tw="text-5xl">About me</H2>
          <div tw="space-y-4 text-lg text-left">
            <p>
              Hello, I am Pontakorn. You can call me Most.
              I am a frontend developer and sometimes backend as well.
            </p>
            <p>
              I love to apply knowledge I learned in project and seek
              new area to learn.
            </p>
          </div>
        </Section>
        <Section>
          <H2>Technologies</H2>
          <div tw="flex flex-row gap-3 py-4 flex-wrap justify-center">
            {technologies.map(tech => (
              <Button variant="tech" as="div" cursor="default">{tech}</Button>
            ))}
          </div>
        </Section>
        <Section>
          <H2>Projects</H2>
          <div tw="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {projects.map(project => (
              <div tw="border dark:border-white p-4 shadow-md">
                <H3 color="primary" tw="underline">
                  <a href={project.link} target="_blank">{project.name}</a>
                </H3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section>
          <H2>Contact</H2>
          <div tw="space-y-4">
            <p>
              You can mail <a tw="text-primary hover:text-blue-600" href="mailto:pontakorn_most@outlook.com">pontakorn_most@outlook.com</a> or click buttons below.
            </p>
            <div tw="flex flex-col items-center gap-3">
              <Button as="a" target="__blank" tw="bg-gray-700 text-white font-bold w-2/3 md:w-1/4" href="https://github.com/pontakornth">
                <IconGithub tw="inline" /> GitHub
              </Button>
              <Button as="a" target="__blank" tw="border text-white bg-primary dark:(text-primary bg-white) font-bold w-2/3 md:w-1/4" href="mailto:pontakorn_most@outlook.com">
                <IconEmail tw="inline" /> E-mail
              </Button>
            </div>
          </div>
        </Section>
      </Container>
    </>
  )
}

export default IndexPage
