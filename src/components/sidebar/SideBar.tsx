import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Icon, Text, useBreakpointValue, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSidebarDrawer } from '../../hooks/SidebarHook';
import SidebarNav from './SibarNav'


export default function SideBar() {
    const { isOpen, onClose } = useSidebarDrawer();
    const [isDisclosere, setIsDisclosere] = useState(true);
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    if (!isWideVersion) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
                <DrawerOverlay>
                    <DrawerContent bg="gray.800">
                        <DrawerCloseButton mt="2" />
                        <DrawerHeader>
                            Navegação
                        </DrawerHeader>
                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </ Drawer>
        )
    }
    return <SidebarNav />
}
