import tw, { styled } from "twin.macro";
import Head from "next/head";
import React from "react";
import { Container } from "../components/elements/Container";
import { H1, H2 } from "../components/elements/Heading";
import { Navbar } from "../components/modules/Navbar";

interface Tech {
  title: string;
  description?: string;
  list: string[];
}

const techUsed: Tech[] = [
  {
    title: "Languages",
    description: "Languages I know and use a lot",
    list: ["Python", "JavaScript", "TypeScript", "CSS", "HTML"],
  },
  {
    title: "Languages (Know)",
    description: "Languages I know but I don't get chance to use it",
    list: ["C#", "Rust", "Go", "Java"],
  },
  {
    title: "Gadgets",
    description: "Gadgets I use",
    list: [
      "AirPods",
      "JBL TUNE 500 BT",
      "Keychron K2 (Red Switch)",
      "Logitech M585",
    ],
  },
  {
    title: "Computers and other devices",
    description: "Computers + tablets + mobile",
    list: ["MacBook Pro 13 inches (Intel)", "iPad Gen 9", "Redmi Note 10 5G"],
  },
  {
    title: "Frameworks",
    description: "What I used to create webs and stuffs",
    list: ["(P)react", "Vue", "Next.js", "Svelte(Kit)", "Nuxt.js", "Django"],
  },
];

const UsesPage = () => {
  return (
    <>
      <Navbar />
      <Container tw="text-left">
        <Head>
          <title>What I use</title>
        </Head>
        <H1 tw="text-indigo-700 text-center">What I use</H1>
        <p tw="text-lg mb-8">These are technologies and other things I use.</p>
        {techUsed.map((tech) => (
          <React.Fragment key={tech.title}>
            <H2 tw="text-3xl mb-0">{tech.title}</H2>
            <p tw="text-base text-gray-500 dark:text-gray-300">
              {tech.description}
            </p>
            <ul tw="py-4 list-disc pl-4">
              {tech.list.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </Container>
    </>
  );
};

export default UsesPage;
