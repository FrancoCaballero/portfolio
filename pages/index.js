import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'

const Section = ({ title, children, ...props }) => {
  return (
    <Box p={10} boxShadow="xs" {...props}>
      <Heading as="h2" fontSize={20}>
        {title}
      </Heading>
      <Text pt={5}>{children}</Text>
    </Box>
  )
}

export default function Home() {
  return (
    <Layout>
      <Container maxW={1000} pt={{ base: 20, md: 10 }}>
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
          <Flex direction="column" justify="center" pt={{ base: 5, md: 0 }}>
            <Heading as="h1" fontSize={40}>
              Hola, Soy
            </Heading>
            <Heading as="h1" fontSize={40}>
              Franco Caballero
            </Heading>
            <Heading as="h2" fontSize={20} pt="10px">
              Desarrollador de Software
            </Heading>
            <Flex
              mt={2}
              pt="10px"
              justify={{ base: 'center', md: 'flex-start' }}
            >
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

        <Section title="Acerca de mi" mt={{ base: '150px', md: 10 }}>
          Soy un desarrollador de software con experiencia en back-end y
          front-end, he trabajo con difentes lenguajes de programación, pero en
          el que me estoy especializando es en Javascript.
        </Section>
        <Section mt={10} title="Tecnologías">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'center', md: 'flex-start' }}
            wrap="wrap"
            gap={5}
          >
            <Image src="/images/js.png" alt="Javascript" w="50px" />
            <Image src="/images/node.png" alt="Javascript" w="50px" />
            <Image src="/images/react.png" alt="Javascript" w="50px" />
            <Image src="/images/next.png" alt="Javascript" w="50px" />
            <Image src="/images/angular.png" alt="Javascript" w="50px" />
            <Image src="/images/java.png" alt="Javascript" w="50px" />
            <Image src="/images/postgresql.png" alt="Javascript" w="50px" />
          </Stack>
        </Section>
      </Container>
    </Layout>
  )
}
