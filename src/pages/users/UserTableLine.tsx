import { Tbody, Tr, Td, Checkbox, Box, Text, Button, Icon } from '@chakra-ui/react'
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
                        <Text fontWeight="bold" >{name}</Text>
                        <Text fontSize="sm" color="gray.300" >{email}</Text>
                    </Box>
                </Td>
                <Td>
                    {
                        isVisibleDate &&
                        <Text fontSize="sm">{createdAs}</Text>
                    }
                </Td>
                <Td>
                    <Button size="sm" colorScheme="gray" color="gray.700" leftIcon={<Icon fontSize="16" as={RiPencilLine} />}>Edit</Button>
                </Td>
            </Tr>
        </Tbody>
    )
}
