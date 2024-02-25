import { Avatar, Text, Flex, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

export const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar name="Coding_Locker" size={"lg"} src='/headshot.jpg' />
                <Text fontSize={12} fontWeight={"bold"}>
                    coding_locker
                </Text>
        </Flex>
        <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
        >
            Log Out
        </Link>
    </Flex>
  )
}
