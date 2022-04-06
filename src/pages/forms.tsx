import { Flex, VStack, SimpleGrid, HStack, Button, Heading } from '@chakra-ui/react'
import Header from '../components/header/Header'
import SideBar from '../components/sidebar/SideBar'
import ErrorInput from '../components/inputs/ErrorInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormsSchema } from '../validations/FormsSchema'


export default function Forms() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(FormsSchema)
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
            <Flex w="100%" my="6" mx="auto" maxWidth="1480" px={{ base: '2', lg: '6' }}>
                <SideBar />
                <VStack as="form" onSubmit={handleSubmit(onSubmit)}
                    p={{ base: '4', lg: "8" }} align="left" w="100%" spacing={8} bg="gray.800">
                    <Heading size="lg" fontWeight="normal" >Create user</Heading>
                    <SimpleGrid width="100%" gap={8} minChildWidth="240px" alignItems="flex-start">

                        <ErrorInput id="name" errors={errors} register={register} iconType='user' placeholder='Type your name' />
                        <ErrorInput id="email" errors={errors} register={register} iconType='email' placeholder='Type your e-mail' />

                    </SimpleGrid>
                    <SimpleGrid width="100%" gap={8} minChildWidth="240px" alignItems="flex-start">

                        <ErrorInput id="password" errors={errors} register={register} iconType='lock' placeholder='Enter your password' isPassword />
                        <ErrorInput id="confirm" errors={errors} register={register} iconType='lock' placeholder='Confirm your password' isPassword />
                    </SimpleGrid>
                    <HStack spacing={4} justifyContent="flex-end">
                        <Button size="sm" w={20} colorScheme="gray" color="gray.700">Cancel</Button>
                        <Button type="submit" size="sm" w={20}>Save</Button>
                    </HStack>
                </VStack>
            </Flex>
        </Flex >
    )
}


