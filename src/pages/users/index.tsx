import { Flex, VStack, Text, Box, Heading, Button, Icon, Table, Thead, Tbody, Tr, Th, Checkbox, Td, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { RiAddLine } from 'react-icons/ri'
import Header from '../../components/header/Header'
import SideBar from '../../components/sidebar/SideBar'
import Pagination from '../../components/users/Pagination'
import UserTableLine from './UserTableLine'

const users = [
    {
        name: "Thiago Pacheco",
        email: "thiago.p@gmail.com",
        createdAs: "Apr-22, 2022"
    },
    {
        name: "Cibele Fáula",
        email: "cibele.f@gmail.com",
        createdAs: "Feb-02, 2022",
    },
    {
        name: "Carlos H",
        email: "krloss.H@gmail.com",
        createdAs: "Dec-25, 2021",
    }
]

export default function Users() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });
    return (
        <Flex h="100vh" direction='column'>
            <Header />
            <Flex w="100%" my={{ base: 4, lg: 6 }} mx="auto" maxWidth="1480" px={{ base: 2, sm: 4, lg: 6 }} >
                <SideBar />
                <Box flex="1" borderRadius={8} p={8} bg="gray.800">
                    <Flex mb={8} align="center" justify="space-between">
                        <Heading size="lg" fontWeight="normal" >Users</Heading>
                        <Button as="a" size="sm" color="black" leftIcon={<Icon as={RiAddLine} fontSize={20} />}>Create new</Button>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead >
                            <Tr>
                                <Th px="6" w="8">
                                    <Checkbox colorScheme="yellow" />
                                </Th>
                                <Th>User</Th>
                                {isWideVersion &&
                                    <Th>Registration date</Th>
                                }

                                <Th w={8}></Th>
                            </Tr>
                        </Thead>
                        {users.map((user, key) => <UserTableLine isVisibleDate={isWideVersion} name={user.name} email={user.email} createdAs={user.createdAs} key={key} />)}

                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Flex >
    )
}
