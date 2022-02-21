import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../Navbar'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Franco Caballero" />
        <title>Franco Caballero - Pagína Principal</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
