import { Avatar, Box, FormErrorMessage, Input, Tooltip } from '@chakra-ui/react'
import { UseFormRegister, FieldValues, appendErrors } from 'react-hook-form'

import React, { useMemo, useState, useEffect } from 'react'

interface AvatarInputProps {
    name: string
    size?: 'sm' | 'md' | 'lg'
    id: string;
    register: UseFormRegister<FieldValues>
    errors: {
        [x: string]: any;
    }
}


export default function AvatarInput({ id, register, size = 'md', name, errors }: AvatarInputProps) {
    const [thumbnail, setThumbnail] = useState();
    const [isOpenMessageError, setIsOpenMessageError] = useState(false);


    const preview = useMemo(() => {
        return thumbnail && URL.createObjectURL(thumbnail)
    }, [thumbnail])

    useEffect(() => {
        setIsOpenMessageError(true);
        setTimeout(() => {
            setIsOpenMessageError(false);
        }, 5000)
    }, [errors?.[id]])

    const ThumbnailSizes = {
        sm: '36px',
        md: '64px',
        lg: '76px'
    }

    return (

        <Box w={ThumbnailSizes[size]} >
            {errors?.[id] ? (
                <>
                    {isOpenMessageError ?
                        <Tooltip label={errors[id].message} bg={'yellow.300'} color={'gray.800'} hasArrow placement='top' isOpen>
                            <Avatar position="absolute" size={size} name={name} src={preview} />
                        </Tooltip>
                        :

                        <Avatar position="absolute" size={size} name={name} src={preview} />

                    }
                </>
            ) : <Avatar position="absolute" size={size} name={name} src={preview} />
            }

            <Input
                id={id}
                {...register(id, {
                    onChange: event => setThumbnail(event.target.files[0])
                })}
                position="relative"
                type="file"
                w={ThumbnailSizes[size]}
                h={ThumbnailSizes[size]}
                rounded='full'
                opacity="0"
                _hover={{ cursor: 'pointer' }}
            />
        </Box>
    )
}
