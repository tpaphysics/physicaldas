import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { FaWpforms } from 'react-icons/fa'
import { RiNodeTree } from 'react-icons/ri'
import SideBarCategoryMenu from './SideBarCategoryMenu'



export default function SideBar() {
    return (
        <>
            <VStack spacing={12}>
                <SideBarCategoryMenu menuTitle='Geral' itens={
                    [
                        {
                            name: "Dashboard",
                            icon: MdOutlineDashboard
                        },
                        {
                            name: "Users",
                            icon: FiUsers

                        }

                    ]
                } />
                <SideBarCategoryMenu menuTitle='Automação' itens={
                    [
                        {
                            name: "Forms",
                            icon: FaWpforms
                        },
                        {
                            name: "Automation",
                            icon: RiNodeTree

                        }

                    ]
                } />
            </VStack>

        </>
    )
}
