import { Container } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FeedPost } from './FeedPost'

export const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
},[]);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
        <FeedPost
          username = "coding_locker"
          img = '/img1.png'
          avatar = '/img1.png'
           />
        <FeedPost
          username = "Bob"
          img = '/img2.png'
          avatar = '/img2.png' 
          />
        <FeedPost
          username = "Janedoe"
          img = '/img3.png'
          avatar = '/img3.png' 
          />
        <FeedPost
          username = "Johndoe"
          img = '/img4.png'
          avatar = '/img4.png' 
          />
    </Container>
  )
}
