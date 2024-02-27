import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react"
import { ProfilePost } from './ProfilePost';
import { useEffect, useState } from "react";


export const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  },[]);

  return (
    <Grid templateColumns={{
      sm: "repeat(1, 1fr)",
      md: "repeat(3, 1fr)",
    }}
    gap={1}
    columnGap={1}>

      {isLoading && [0,1,2,3,4,5,6].map((_, idx) => (
        <VStack key={idx} alignItems={"flex-start"} gap={4}>
          <Skeleton w={"full"}>
            <Box h={"300px"}>Contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
    </Grid>
  )
}
