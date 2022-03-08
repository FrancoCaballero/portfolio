import {
  Code,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/layouts/section'
import { tecnologies } from '../data/tecnologies'

export default function Home() {
  return (
    <Layout>
      <Container maxW={1000} pt={{ base: 100, md: 10 }}>
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
                    src={useColorModeValue(
                      '/images/github.png',
                      '/images/github-white.png'
                    )}
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
          <Code colorScheme={useColorModeValue('blackAlpha', 'linkedin')}>
            Tengo experiencia en back-end y front-end, he trabajado con
            diferentes lenguajes de programación, pero en el que me estoy
            especializando es en JavaScript, ya que se pueden realizar
            aplicaciones para multiples plataformas con distintos frameworks.
          </Code>
        </Section>
        <Section mt={10} title="Tecnologías">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            align="center"
            wrap="wrap"
            gap="30px"
            spacing={0}
          >
            {tecnologies.map(({ src, alt }) => (
              <Flex key={alt} w="100px" justify="center" align="center">
                <Image key={alt} src={src} alt={alt} w="50px" />
              </Flex>
            ))}
          </Stack>
        </Section>
      </Container>
    </Layout>
  )
}
