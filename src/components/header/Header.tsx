import { Flex, HStack, Image, Divider, useBreakpointValue, IconButton, theme, Box } from '@chakra-ui/react'
import React from 'react'
import RounderInput from '../inputs/RounderInput'
import { AiOutlineUserAdd, AiOutlineBell } from 'react-icons/ai'
import AvatarProfile from './AvatarProfile'
import IconsBar from '../header/IconsBar'
import { Fade as Hamburger } from 'hamburger-react'
import { useSidebarDrawer } from '../../hooks/SidebarHook'
import { useMediaQuery } from '@chakra-ui/react'




export default function Header() {
    const [isLargerThan640] = useMediaQuery('(min-width: 640px)')
    const [isLargerThan480] = useMediaQuery('(min-width: 480px)')
    const [isLargerThan330] = useMediaQuery('(min-width: 330px)')


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
            px={{ base: 2, sm: 4, lg: 6 }}
            align="center"
            justifyContent="space-between"

        >

            {isLargerThan330 &&

                <Image src={isWideVersion ? "logoSmall.png" : "simbol.png"} w={{ lg: "160px", base: "30px" }} />
            }

            {
                isLargerThan640 && <RounderInput size={isWideVersion ? "sm" : "xs"} ml={isWideVersion ? 6 : 0} mx={{ base: 2, sm: 2, lg: 0 }} placeholder="Search on platform" p={{ base: 4, lg: 6 }} />
            }

            <HStack ml="auto" spacing={{ base: 6, lg: 6, sm: 4 }}>
                <IconsBar icons={[AiOutlineBell, AiOutlineUserAdd]} />
                <Divider orientation='vertical' h={8} />
                <AvatarProfile name='Thiago Pacheco' isShowDescription={isLargerThan480} email="physics.posgrad@gmail.com" avatarUrl='https://avatars.githubusercontent.com/u/46402647?v=4' />
                {!isWideVersion && <Hamburger size={20} color={theme.colors.gray[300]} toggled={isOpen} onToggle={onToggle} />}

            </HStack >
        </Flex >
    )
}
