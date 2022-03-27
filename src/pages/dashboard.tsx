import { Flex } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../components/molecules/SideBar'
import Header from '../components/templates/Header'

export default function Dashboard() {
    return (
        <Flex h="100vh" direction='column'>
            <Header />
            <Flex w="100%" my="6" mx="auto" maxWidth="1480" px="6">
                <SideBar />
            </Flex>
        </Flex>
    )
}
