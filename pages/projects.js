import { Code, Container, Flex, Link } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import Layout from '../components/layouts/article'
import Section from '../components/layouts/section'

const ProjectItem = ({ children, title, href, src, alt }) => {
  return (
    <NextLink href={href} passHref>
      <Link isExternal w="100%">
        <Section title={title}>
          <Flex direction="column" justify="center" align="center">
            <Image src={src} width={200} height={350} alt={alt} />

            <Code mt={3}>{children}</Code>
          </Flex>
        </Section>
      </Link>
    </NextLink>
  )
}

const projects = () => {
  return (
    <Layout>
      <Container maxW={1000} pt={20}>
        <Flex direction="column" align="center" justify="center" gap={10}>
          <ProjectItem
            title="Gif Expert"
            href="https://gif-expert-rosy.vercel.app/"
            src="/images/gif-expert.jpg"
            alt="Aplicación de gifs"
          >
            Aplicación de busqueda de gifs, hecho con Reacj.js
          </ProjectItem>

          <ProjectItem
            title="Search Movies"
            href="https://search-movies-six.vercel.app/"
            src="/images/search-movies.jpg"
            alt="Aplicación de películas"
          >
            Aplicación de busqueda de películas, hecho con Svelte.js
          </ProjectItem>
        </Flex>
      </Container>
    </Layout>
  )
}

export default projects
