/* eslint-disable react/no-children-prop */
import { Icon, Input, InputGroup, InputLeftElement, InputProps, InputRightElement, Tooltip, FormControl } from '@chakra-ui/react'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { MdLock, MdComputer, MdEmail, MdWork } from 'react-icons/md'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { FaUserNinja } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import { TpaInputColors } from '../../styles/components'
import { AiOutlineExclamationCircle } from 'react-icons/ai'

interface TpaInputProps extends InputProps {
    id: string;
    isPassword?: boolean
    iconType: 'user' | 'email' | 'lock' | 'computer' | 'work'
    eyerIconColor?: boolean
    errors: {
        [x: string]: any;
    },
    register: UseFormRegister<FieldValues>
}

const iconsOptions = {
    user: FaUserNinja,
    email: MdEmail,
    lock: MdLock,
    computer: MdComputer,
    work: MdWork
}
const colorScheme = {
    primary: "yellow.400",
    secondary: "gray.500"
}


export default function ErrorInput({ type, isPassword, iconType, eyerIconColor, errors, id, register, ...props }: TpaInputProps) {
    const { primary, secondary } = TpaInputColors
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [isPrimaryColor, setIsPrimaryColor] = useState(false)
    const [isOpenMessageError, setIsOpenMessageError] = useState(false);

    useEffect(() => {
        setIsOpenMessageError(true);
        setTimeout(() => {
            setIsOpenMessageError(false);
        }, 5000)
    }, [errors?.[id]])


    return (
        <FormControl isInvalid={errors?.[id]}>

            <InputGroup>
                <InputLeftElement height='100%' children={<Icon color={isPrimaryColor ? primary : secondary} as={iconsOptions[iconType]} />} />
                <Input
                    id={id}
                    {...props}
                    {...register(id)}
                    type={isPassword ? (isVisiblePassword ? 'text' : 'password') : type}
                    _placeholder={{
                        color: secondary

                    }}
                    onFocus={() => setIsPrimaryColor(true)}
                    onBlur={() => setIsPrimaryColor(false)}
                />

                {(isPassword && !errors?.[id]) && < InputRightElement h='100%' children={<Icon color={eyerIconColor ? primary : secondary} as={isVisiblePassword ? IoMdEyeOff : IoMdEye} onClick={() => setIsVisiblePassword(!isVisiblePassword)} />} />}
                {errors?.[id] && (
                    <>
                        {isOpenMessageError ?
                            <Tooltip label={errors[id].message} bg={primary} color={'gray.800'} hasArrow placement='top' isOpen>
                                < InputRightElement h='100%' fontSize={20} children={<Icon color={primary} as={AiOutlineExclamationCircle} />} />
                            </Tooltip>
                            :
                            <Tooltip label={errors[id].message} bg={primary} color={'gray.800'} hasArrow placement='top'>
                                < InputRightElement h='100%' fontSize={20} children={<Icon color={primary} as={AiOutlineExclamationCircle} />} />
                            </Tooltip>
                        }
                    </>
                )
                }

            </InputGroup >
        </FormControl>

    )
}
