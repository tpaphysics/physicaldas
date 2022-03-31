import { HStack, Box, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
interface AvatarProfileProps {
    name: string
    email: string
    avatarUrl?: string
}

export default function AvatarProfile({ name, email, avatarUrl }: AvatarProfileProps) {
    return (
        <HStack spacing={4} >
            <Box textAlign='right'>
                <Text>
                    {name}
                </Text >
                <Text fontSize='sm' color='gray.300'>
                    {email}
                </Text>
            </Box>
            <Avatar name={name} src={avatarUrl} />
        </HStack>
    )
}
