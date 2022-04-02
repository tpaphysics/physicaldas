import { Flex, HStack, Image, Divider } from '@chakra-ui/react'
import React from 'react'
import RounderInput from '../forms/RounderInput'
import { AiOutlineUserAdd, AiOutlineBell } from 'react-icons/ai'
import AvatarProfile from './AvatarProfile'
import IconsBar from '../header/IconsBar'

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
            <Image src="logoSmall.png" w="160px" />
            <RounderInput size={"sm"} ml={8} placeholder="Search on platform" />

            <HStack ml="auto" spacing={6} >
                <IconsBar icons={[AiOutlineBell, AiOutlineUserAdd]} />
                <Divider orientation='vertical' h={8} />
                <AvatarProfile name='Thiago Pacheco' email="physics.posgrad@gmail.com" avatarUrl='https://avatars.githubusercontent.com/u/46402647?v=4' />
            </HStack >
        </Flex >
    )
}
