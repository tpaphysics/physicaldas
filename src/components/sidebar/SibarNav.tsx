import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { FaWpforms } from 'react-icons/fa'
import { RiNodeTree } from 'react-icons/ri'
import SideBarCategoryMenu from './SideBarCategoryMenu'



export default function SidebarNav() {
    return (
        <>
            <VStack as="aside" spacing={10} alignItems="flex-start" w="220px"  >
                <SideBarCategoryMenu menuTitle='General' itens={
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
                <SideBarCategoryMenu menuTitle='Automation' itens={
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
