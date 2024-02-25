import React from 'react'
import { FeedPostHeader } from './FeedPostHeader'
import { Box, Image } from '@chakra-ui/react'
import { FeedPostFooter } from './FeedPostFooter'

export const FeedPost = ({img, username, avatar}) => {
  return (
    <>
    <FeedPostHeader username={username} avatar={avatar}/>
    <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={img}  alt={username}/>
    </Box>
    <FeedPostFooter username={username}/>
    </>
  )
}
