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

            <Code p={5} mt={3}>
              {children}
            </Code>
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
            title="Buscar Buses"
            href="https://search-stops.vercel.app/"
            src="/images/search-stops.png"
            alt="Aplicación de Busqueda de buses"
          >
            Aplicación de busqueda de buses en Santiago de Chile, hecho con React.js y Vite
          </ProjectItem>

          <ProjectItem
            title="Gif Expert"
            href="https://gif-expert-rosy.vercel.app/"
            src="/images/gif-expert.jpg"
            alt="Aplicación de gifs"
          >
            Aplicación de busqueda de gifs, hecho con React.js
          </ProjectItem>

          <ProjectItem
            title="Search Movies"
            href="https://search-movies-six.vercel.app/"
            src="/images/search-movies.jpg"
            alt="Aplicación de películas"
          >
            Aplicación de busqueda de películas, hecho con Svelte.js
          </ProjectItem>

          <ProjectItem
            title="Calculadora Vacaciones Proporcionales"
            href="https://vacation-calculator-isaq.vercel.app/"
            src="/images/vacations-calculator.png"
            alt="Calculadora de vacaciones proporcionales"
          >
            Aplicación para calcular el monto a pagar de las vacaciones proporcionales en Chile, hecho con React.js
          </ProjectItem>    
        </Flex>
      </Container>
    </Layout>
  )
}

export default projects
