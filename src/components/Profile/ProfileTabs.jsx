import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsBookmark, BsGrid3X3, BsSuitHeart } from'react-icons/bs'

export const ProfileTabs = () => {
  return (
    <Flex w={"full"} justifyContent={"center"} gap={{base: 4, sm: 10}} textTransform={"uppercase"} fontWeight={"bold"}>

      <Flex borderTop={"1px solid white"} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsGrid3X3 />
          <Text fontSize={12} display={{base: "none", sm: "block"}}>Posts</Text>
        </Box>
      </Flex>
      <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsBookmark />
          <Text fontSize={12} display={{base: "none", sm: "block"}}>Saved</Text>
        </Box>
      </Flex>
      <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsSuitHeart fontWeight={"bold"}/>
          <Text fontSize={12} display={{base: "none", sm: "block"}}>Likes</Text>
        </Box>
      </Flex>

    </Flex>
  )
}
