import { Tbody, Tr, Td, Checkbox, Box, Text, Button, Icon, useBreakpointValue } from '@chakra-ui/react'
import { RiPencilLine } from 'react-icons/ri'


interface UserTableLineBrops {
    name: string;
    email: string;
    createdAs: string;
    isVisibleDate?: boolean;
}

export default function UserTableLine({ name, email, createdAs, isVisibleDate = true }: UserTableLineBrops) {

    return (
        <Tbody>
            <Tr>
                <Td>
                    <Checkbox colorScheme="yellow" />
                </Td>
                <Td>
                    <Box>
                        <Text fontWeight="bold" fontSize={{ base: "sm", lg: "md" }}>{name}</Text>
                        <Text fontSize={{ base: "xs", lg: "sm" }} color="gray.300" >{email}</Text>
                    </Box>
                </Td>
                {isVisibleDate &&
                    <Td>
                        <Text fontSize="sm">{createdAs}</Text>
                    </Td>
                }
                <Td >
                    <Button as="a" size={"sm"} colorScheme="gray" color="gray.700" leftIcon={<Icon fontSize={{ base: 12, lg: 16 }} as={RiPencilLine} />}>Edit</Button>
                </Td>
            </Tr>
        </Tbody >
    )
}
