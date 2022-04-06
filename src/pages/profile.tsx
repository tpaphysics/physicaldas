import { Flex, VStack, SimpleGrid, HStack, Button, Heading, Input, FormErrorMessage, Box, FormControl, FormLabel, Avatar } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import TpaInput from '../components/forms/TpInput'
import Header from '../components/header/Header'
import SideBar from '../components/sidebar/SideBar'
import { yupResolver } from '@hookform/resolvers/yup'
import { ProfileSchema } from '../validations/ProfileSchema'
import ErrorInput from '../components/forms/ErrorInput'
import AvatarInput from '../components/forms/AvatarInput'

export default function Profile() {
    const [thumbnail, setThumbnail] = useState();
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

    const preview = useMemo(() => {
        return thumbnail && URL.createObjectURL(thumbnail)
    }, [thumbnail])

    return (
        <Flex h="100vh" direction='column'>
            <Header />
            <Flex w="100%" my="6" mx="auto" maxWidth="1480" px="6">
                <SideBar />

                <VStack as="form" p={8} align="center" w="100%" spacing={8} ml="1" bg="gray.800" onSubmit={handleSubmit(onSubmit)}>
                    <Heading size="lg" mr="auto" fontWeight="normal" >Profile</Heading>
                    <AvatarInput id="image" register={register} name="Thiago P" size='lg' />

                    <VStack width="100%" maxW="460" spacing={4}>

                        <ErrorInput
                            id='name'
                            placeholder='name'
                            register={register}
                            iconType='user'
                            errors={errors}
                        />

                        <TpaInput iconType='lock' placeholder='Enter your password' isPassword />
                        <HStack spacing={4} justifyContent="flex-end" w="100%">
                            <Button size="sm" w={20} colorScheme="gray" color="gray.700">Cancel</Button>
                            <Button size="sm" w={20} type="submit" >Save</Button>
                        </HStack>

                    </VStack>



                </VStack>
            </Flex>
        </Flex >
    )
}


