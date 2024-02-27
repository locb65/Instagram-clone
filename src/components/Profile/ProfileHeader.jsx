import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const ProfileHeader = () => {
  return (
    <Flex gap={{base: 4, sm: 10}} py={10} direction={{base: "column", sm: "row"}}>
      <AvatarGroup size={{ base: "xl", md: "2xl"}} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
        <Avatar src='/headshot.jpg' name='Coding_Locker' alt='user profile pic'></Avatar>
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex gap={4} direction={{base: "column", sm: "row"}} justifyContent={{base: "center", sm: "flex-start"}} alignItems={"center"} w={"full"}>
          <Text fontSize={{base: "sm", md: "lg"}}>Coding_Locker</Text>

          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button bg={"white"} color={"black"} _hover={{bg: "whiteAlpha.800"}} size={{base: "xs", md: "sm"}}>Edit Profile</Button>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={{base: 2, sm: 4}}>
          <Text fontSize={{base: "xs", md: "sm"}}>
            <Text as="span" fontWeight={"bold"} mr={1}>119</Text>
            Posts
          </Text>
          <Text fontSize={{base: "xs", md: "sm"}}>
            <Text as="span" fontWeight={"bold"} mr={1}>549</Text>
            Followers
          </Text>
          <Text fontSize={{base: "xs", md: "sm"}}>
            <Text as="span" fontWeight={"bold"} mr={1}>466</Text>
            Following
          </Text>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            Loc's Coding Locker
          </Text>
        </Flex>
        <Text fontSize={"sm"} >
            Loc's Instagram Clone to learn and develop programming skills.
          </Text>
      </VStack>
    </Flex>
  )
}
