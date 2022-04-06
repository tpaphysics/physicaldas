import { Flex, VStack, HStack, Button, Heading, Table, Th, Tr, Checkbox, Thead, useBreakpointValue } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import Header from '../components/header/Header'
import SideBar from '../components/sidebar/SideBar'
import { yupResolver } from '@hookform/resolvers/yup'
import { ProfileSchema } from '../validations/ProfileSchema'
import AvatarInput from '../components/inputs/AvatarInput'

import UserTableLine from '../components/users/UserTableLine'

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
        lg: true
    })
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(ProfileSchema)
    });
    function onSubmit(data: any) {
        return new Promise(() => {
            setTimeout(() => {
                console.log(data)
            }, 3000)
        })
    }
    return (
        <Flex h="100vh" direction='column'>
            <Header />
            <Flex w="100%" my="6" mx="auto" maxWidth="1480" px={{ base: 2, lg: 6 }}>
                <SideBar />
                <VStack as="form" borderRadius={8} p={{ base: 4, lg: 8 }} align="center" w="100%" spacing={8} bg="gray.800" onSubmit={handleSubmit(onSubmit)}>
                    <Heading size="lg" mr="auto" fontWeight="normal" >Profile</Heading>

                    <VStack width="100%" spacing={4}  >
                        <Table colorScheme="whiteAlpha" >
                            <Thead >
                                <Tr>
                                    <Th px="6" w="8">
                                        <Checkbox colorScheme="yellow" />
                                    </Th>
                                    <Th>User</Th>
                                    {isWideVersion &&
                                        <>
                                            <Th>Registration date</Th>

                                        </>
                                    }
                                    <Th w={8}></Th>

                                </Tr>
                            </Thead>
                            {users.map((user, key) => <UserTableLine isVisibleDate={isWideVersion} name={user.name} email={user.email} createdAs={user.createdAs} key={key} />)}

                        </Table>
                    </VStack>
                </VStack>
            </Flex>
        </Flex >
    )
}


