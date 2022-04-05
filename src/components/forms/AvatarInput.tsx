import { Avatar, Box, Input } from '@chakra-ui/react'
import { UseFormRegister, FieldValues } from 'react-hook-form'

import React, { useMemo, useState } from 'react'

interface AvatarInputProps {
    name: string
    size?: 'sm' | 'md' | 'lg'
    id: string;
    register: UseFormRegister<FieldValues>
}


export default function AvatarInput({ id, register, size = 'md', name }: AvatarInputProps) {
    const [thumbnail, setThumbnail] = useState();

    const preview = useMemo(() => {
        return thumbnail && URL.createObjectURL(thumbnail)
    }, [thumbnail])

    const ThumbnailSizes = {
        sm: '36px',
        md: '64px',
        lg: '76px'
    }

    return (
        <Box w={ThumbnailSizes[size]} >
            <Avatar position="absolute" size={size} name={name} src={preview ? preview : 'https://avatars.githubusercontent.com/u/46402647?v=4'} />
            <Input
                id={id}
                {...register(id, {
                    onChange: event => { setThumbnail(event.target.files[0]) }
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
