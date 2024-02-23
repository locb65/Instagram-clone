import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import { FeedPosts } from '../components/FeedPosts/FeedPosts'

export const HomePage = () => {
  return (
   <Container maxW={"container.lg"} >
    <Flex gap={20}>
      {/* left side of home content */}
      <Box flex={2} py={10} border={"1px solid blue"}>
        <FeedPosts />
      </Box>
      {/* Right side of Home content */}
      <Box flex={3} py={20} display={{base: "none", lg: "block"}} maxW={"300px"} border={"1px solid red"}>
        Suggested
      </Box>

    </Flex>

   </Container>
  )
}
