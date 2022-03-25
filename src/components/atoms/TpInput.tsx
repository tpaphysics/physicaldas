/* eslint-disable react/no-children-prop */
import { Icon, Input, InputGroup, InputLeftElement, InputProps, InputRightElement } from '@chakra-ui/react'
import { MdLock, MdComputer, MdEmail, MdWork, MdBorderColor } from 'react-icons/md'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { FaUserNinja } from 'react-icons/fa'


import React, { useState } from 'react'

interface TpaInputProps extends InputProps {
    isPassword?: boolean
    iconType: 'user' | 'email' | 'lock' | 'computer' | 'work'
    InputTheme?: {
        border: string,
        icons: string,
        bg: string
    }
}

const inputColor = {
    principal: "purple.500",
    secondary: "gray.500",
    bg: 'gray.700'
}


const iconsOptions = {
    user: FaUserNinja,
    email: MdEmail,
    lock: MdLock,
    computer: MdComputer,
    work: MdWork
}


export default function TpaInput({ type, isPassword, iconType, ...props }: TpaInputProps) {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [isPrimaryColor, setIsPrimaryColor] = useState(false)

    const { principal, secondary, bg } = inputColor


    return (
        <InputGroup>
            <InputLeftElement height='100%' children={<Icon color={isPrimaryColor ? inputColor.principal : inputColor.secondary} as={iconsOptions[iconType]} />} />
            <Input
                {...props}
                _placeholder={{
                    color: inputColor.secondary
                }}
                type={isPassword ? (isVisiblePassword ? 'text' : 'password') : type}
                border='none'
                bg={inputColor.bg}
                _focus={{
                    border: '2px solid',
                    borderColor: principal,

                }}

                onFocus={() => setIsPrimaryColor(true)}
                onBlur={() => setIsPrimaryColor(false)}
                size="md"
            />

            {isPassword && < InputRightElement children={<Icon color='primary' as={isVisiblePassword ? IoMdEyeOff : IoMdEye} onClick={() => setIsVisiblePassword(!isVisiblePassword)} />} />}
        </InputGroup>

    )
}
