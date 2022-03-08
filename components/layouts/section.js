import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Section = ({ children, title, ...props }) => {
  return (
    <Box
      as="section"
      p={10}
      width="100%"
      boxShadow="md"
      rounded="lg"
      bg={useColorModeValue('white', 'gray.800')}
      {...props}
    >
      <Heading as="h2" fontSize={20}>
        {title}
      </Heading>
      <Box pt={5}>{children}</Box>
    </Box>
  )
}

export default Section
