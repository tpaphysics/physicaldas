import { Flex, VStack, SimpleGrid, HStack, Button, Heading } from '@chakra-ui/react'
import TpaInput from '../components/inputs/TpInput'
import Header from '../components/header/Header'
import SideBar from '../components/sidebar/SideBar'

export default function Forms() {
    return (
        <Flex h="100vh" direction='column'>
            <Header />
            <Flex w="100%" my="6" mx="auto" maxWidth="1480" px="6">
                <SideBar />
                <VStack p={8} align="left" w="100%" spacing={8} ml="1" bg="gray.800">
                    <Heading size="lg" fontWeight="normal" >Create user</Heading>
                    <SimpleGrid width="100%" gap={8} minChildWidth="240px" alignItems="flex-start">

                        <TpaInput iconType='user' placeholder='Type your name' />
                        <TpaInput iconType='email' placeholder='Type your e-mail' />

                    </SimpleGrid>
                    <SimpleGrid width="100%" gap={8} minChildWidth="240px" alignItems="flex-start">

                        <TpaInput iconType='lock' placeholder='Enter your password' isPassword />
                        <TpaInput iconType='lock' placeholder='Confirm your password' isPassword />
                    </SimpleGrid>
                    <HStack spacing={4} justifyContent="flex-end">
                        <Button size="sm" w={20} colorScheme="gray" color="gray.700">Cancel</Button>
                        <Button size="sm" w={20}>Save</Button>
                    </HStack>
                </VStack>
            </Flex>
        </Flex >
    )
}
