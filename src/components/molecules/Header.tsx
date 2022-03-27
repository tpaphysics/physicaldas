import { Box, Text, Flex, HStack, Icon, Image, Avatar, Divider, Stack } from '@chakra-ui/react'
import React from 'react'
import RounderInput from '../atoms/RounderInput'
import { AiOutlineUserAdd, AiOutlineBell } from 'react-icons/ai'

export default function Header() {
    return (
        <Flex
            as='header'
            w="100%"
            maxW={1480}
            h={20}
            mx="auto"
            mt={4}
            px={6}
            align="center"
        >
            <Image src="logoSmall.png" />
            <RounderInput ml="24" size={"sm"} />

            <HStack ml="auto" spacing={6} >
                <Icon color="gray.300" as={AiOutlineBell} />
                <Icon color="gray.300" as={AiOutlineUserAdd} />

                <Divider orientation='vertical' h={8} />

                <HStack spacing={4}>
                    <Box textAlign='right'>
                        <Text>
                            Thiago Pacheco
                        </Text >
                        <Text fontSize='sm' color='gray.300'>
                            physics@posgrad@gmail.com
                        </Text>
                    </Box>
                    <Avatar name="Thiago Pacheco" src="https://avatars.githubusercontent.com/u/46402647?v=4" />
                </HStack>
            </HStack >
        </Flex >
    )
}
