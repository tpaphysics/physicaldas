import { HStack, Icon, VStack, Text, Link } from '@chakra-ui/react'
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
            <Text color="gray.300" fontSize="sm">{menuTitle.toUpperCase()}</Text>
            <VStack align="flex-start" fontSize="md">
                {itens.map((item, index) => (
                    <Link display="flex" _hover={{
                        color: "yellow.400"
                    }} alignItems="center" key={index} gap="4">

                        <Icon as={item.icon} />
                        <Text>{item.name}</Text>

                    </Link>
                ))}
            </VStack>
        </VStack >
    )
}
