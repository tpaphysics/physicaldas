import { Flex, VStack, Text, Box, Heading, Button, Icon, Table, Thead, Tbody, Tr, Th, Checkbox, Td } from '@chakra-ui/react'
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
    return (
        <Flex direction='column'>
            <Header />
            <Flex w="100%" my="6" mx="auto" maxWidth="1480" px="6" flex="1" >
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
                                <Th>Registration date</Th>
                                <Th w={8}></Th>
                            </Tr>
                        </Thead>
                        {users.map((user, key) => <UserTableLine name={user.name} email={user.email} createdAs={user.createdAs} key={key} />)}

                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Flex >
    )
}
