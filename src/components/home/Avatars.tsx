import { Avatar, AvatarGroup, useBreakpointValue, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'

interface AvatarElement {
    name: string,
    url: string
}

interface AvatarsProps {
    avatars: AvatarElement[],
    avatarSize: string,
    mt?: number

}

export default function Avatars({ mt, avatars, avatarSize, ...props }: AvatarsProps) {
    return (
        <Stack mt={mt} direction={'row'} spacing={4} align={'center'}  >
            <AvatarGroup  {...props}  >
                {
                    avatars.map((avatar) => (
                        <Avatar
                            key={avatar.name}
                            name={avatar.name}
                            src={avatar.url}
                            size={avatarSize}
                            position={'relative'}
                            zIndex={2}
                            _before={{
                                content: '""',
                                width: 'full',
                                height: 'full',
                                rounded: 'full',
                                transform: 'scale(1.125)',
                                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                                position: 'absolute',
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}
                        />
                    ))
                }
            </AvatarGroup >
            <Text fontFamily={'heading'} color="yellow.400" fontSize={{ base: '2xl', md: '4xl' }}>
                +
            </Text>

            <Flex
                align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={'gray.900'}
                color={'white'}
                rounded={'full'}
                width={{ base: '32px', md: '44px' }}
                height={{ base: '32px', md: '44px' }}
                position={'relative'}
                _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                }}>
                You
            </Flex>
        </Stack >
    )
}
