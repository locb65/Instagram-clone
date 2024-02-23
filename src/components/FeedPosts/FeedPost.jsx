import React from 'react'
import { FeedPostHeader } from './FeedPostHeader'
import { Box, Image } from '@chakra-ui/react'
import { FeedPostFooter } from './FeedPostFooter'

export const FeedPost = () => {
  return (
    <>
    <FeedPostHeader />
    <Box>
        <Image src='/img1.png'  alt='user profile pic'/>
    </Box>
    <FeedPostFooter />
    </>
  )
}
