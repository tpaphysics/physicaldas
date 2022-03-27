import { HStack, Icon } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons/lib'

interface IconsBarProps {
    icons: IconType[]
}

export default function IconsBar({ icons }: IconsBarProps) {
    return (
        <HStack ml="auto" spacing={6}>
            {icons.map((icon, index) => <Icon color="gray.300" as={icon} key={`${index}`} />)}
        </HStack>
    )
}
