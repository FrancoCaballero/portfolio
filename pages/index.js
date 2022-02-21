import { Container, Flex, Heading, Image, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'

export default function Home() {
  return (
    <Layout>
      <Container maxW={1000} pt={10}>
        <Flex
          direction={{
            base: 'column',
            md: 'row'
          }}
          height={300}
          align="center"
          justify="center"
        >
          <Image
            src="/images/godofwar.png"
            alt="Franco Caballero"
            w={200}
            mr={10}
            rounded="full"
          />
          <Flex direction="column">
            <Heading as="h1" fontSize={50}>
              Hola, Soy
            </Heading>
            <Heading as="h1" fontSize={50}>
              Franco Caballero
            </Heading>
            <Heading as="h2" fontSize={20}>
              Desarrollador de Software
            </Heading>
            <Flex mt={2}>
              <NextLink href="https://github.com/FrancoCaballero" passHref>
                <Link color="red" isExternal>
                  <Image
                    src="/images/github.png"
                    alt="Github"
                    w="35px"
                    mr={5}
                  />
                </Link>
              </NextLink>
              <NextLink
                href="https://www.linkedin.com/in/franco-caballero-04a658186/"
                passHref
              >
                <Link color="red" isExternal>
                  <Image src="/images/linked-in.png" alt="LinkedIn" w="35px" />
                </Link>
              </NextLink>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  )
}
