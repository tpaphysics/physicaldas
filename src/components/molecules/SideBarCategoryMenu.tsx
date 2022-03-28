import { HStack, Icon, VStack, Text } from '@chakra-ui/react'
import { Item } from 'framer-motion/types/components/Reorder/Item'
import React from 'react'
import { IconType } from 'react-icons'

type Item = {
    name: string,
    icon: IconType
}

interface SideBarItemProps {
    menuTitle: string,
    itens: Item[]
}

export default function SideBarCategoryMenu({ menuTitle, itens }: SideBarItemProps) {
    return (
        <VStack align="flex-start" spacing={8}>
            <Text color="gray.300">{menuTitle.toUpperCase()}</Text>
            <VStack align="flex-start" fontSize="sm">
                {itens.map((item, index) => (
                    <HStack key={index} spacing={4}>
                        <Icon as={item.icon} />
                        <Text>{item.name}</Text>
                    </HStack>
                ))}
            </VStack>
        </VStack>
    )
}
