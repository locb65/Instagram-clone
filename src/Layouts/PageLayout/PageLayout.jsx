import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar/Sidebar'

export const PageLayout = ({children}) => {
    // returns pathname of current page
    const {pathname} =useLocation()
  return (
    <Flex>
        {/* Sidebar on the left */}
            {pathname !== '/auth' ? (
                <Box w={{base:"70px", md:"240px"}}>
                    <Sidebar />
                </Box>
            ) : null}
        {/* Page content on the right */}
        <Box flex={1} w={{base:"calc(100%-70px", md:"calc(100%-240px"}}>
            {children}
        </Box>
    </Flex>
  )
}
