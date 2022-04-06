import { HStack, Box, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
interface AvatarProfileProps {
    name: string
    email: string
    avatarUrl?: string
    isShowDescription?: boolean
}

export default function AvatarProfile({ name, email, avatarUrl, isShowDescription = true }: AvatarProfileProps) {
    return (
        <HStack spacing={isShowDescription ? 4 : 2} >
            <Box textAlign='right'>
                {isShowDescription &&
                    <>
                        <Text fontSize={{ base: 'sm', lg: 'md' }}>
                            {name}
                        </Text >
                        <Text fontSize={{ base: 'xs', lg: 'sm' }} color='gray.300'>
                            {email}
                        </Text>
                    </>
                }
            </Box>
            <Avatar name={name} src={avatarUrl} />
        </HStack >
    )
}
