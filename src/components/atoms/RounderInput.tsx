/* eslint-disable react/no-children-prop */
import { Icon, Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

export default function RounderInput({ ml, size, ...props }: InputProps) {
    return (
        <InputGroup maxW={360} ml={ml} size={size}>
            <Input {...props} size={size} variant="searchBox" placeholder='Buscar na plataforma' />
            <InputRightElement h="100%" children={<Icon mr={5} color='gray.300' as={RiSearchLine} />} />
        </InputGroup >
    )
}
