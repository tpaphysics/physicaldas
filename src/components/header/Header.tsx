import { Flex, HStack, Image, Divider, useBreakpointValue, IconButton } from '@chakra-ui/react'
import React from 'react'
import RounderInput from '../inputs/RounderInput'
import { AiOutlineUserAdd, AiOutlineBell } from 'react-icons/ai'
import AvatarProfile from './AvatarProfile'
import IconsBar from '../header/IconsBar'
import { Fade as Hamburger } from 'hamburger-react'
import { useSidebarDrawer } from '../../hooks/SidebarHook'
import { useMediaQuery } from '@chakra-ui/react'




export default function Header() {
    const [isLargerThan530] = useMediaQuery('(min-width: 530px)')
    const { onToggle, isOpen } = useSidebarDrawer();
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });
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

            <Image src={"logoSmall.png"} w={{ lg: "160px", base: "100px" }} />
            {
                isLargerThan530 && <RounderInput size={isWideVersion ? "sm" : "xs"} ml={isWideVersion ? 6 : 0} mx={{ base: 2, sm: 2, lg: 0 }} placeholder="Search on platform" p={{ base: 4, lg: 6 }} />
            }

            <HStack ml="auto" spacing={{ base: 4, lg: 6 }}>
                <IconsBar icons={[AiOutlineBell, AiOutlineUserAdd]} />
                <Divider orientation='vertical' h={8} />
                <AvatarProfile isShowDescription={isWideVersion} name='Thiago Pacheco' email="physics.posgrad@gmail.com" avatarUrl='https://avatars.githubusercontent.com/u/46402647?v=4' />
            </HStack >
            {!isWideVersion && <Hamburger size={20} toggled={isOpen} onToggle={onToggle} />}
        </Flex >
    )
}
