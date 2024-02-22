import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'

export const HomePage = () => {
  return (
   <Container maxW={"container.lg"}>
    <Flex gap={20}>
      {/* left side of home content */}
      <Box>
        Feed Box
      </Box>
      {/* Right side of Home content */}
      <Box>
        Suggested
      </Box>

    </Flex>

   </Container>
  )
}
