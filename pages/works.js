import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layouts/article'

const works = () => {
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
          <h1>Works</h1>
        </Flex>
      </Container>
    </Layout>
  )
}

export default works
