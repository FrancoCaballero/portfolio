import NextLink from 'next/link'
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        color={active ? '#979799' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = ({ path }) => {
  return (
    <Box
      position="fixed"
      as="nav"
      bg={useColorModeValue('#afadad40', '#20202380')}
      w="100%"
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" fontSize={20}>
            <NextLink href="/">Franco Caballero</NextLink>
          </Heading>
        </Flex>
        <Stack
          display={{ base: 'none', md: 'flex' }}
          direction={{ base: 'none', md: 'row' }}
        >
          <LinkItem href="/works" path={path}>
            Trabajos
          </LinkItem>
          <LinkItem href="/about" path={path}>
            Acerca de
          </LinkItem>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
