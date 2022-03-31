import { Box } from '@chakra-ui/react';
import React, { CanvasHTMLAttributes, useEffect, useRef } from 'react'


export default function Particles() {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    function draw(context: CanvasRenderingContext2D) {
        context.fillStyle = '#000000'
        context.beginPath()
        context.arc(50, 100, 20, 0, 2 * Math.PI)
        context.fill()
    }

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement
        const context = canvas.getContext('2d') as CanvasRenderingContext2D
        canvas.width = window.innerWidth / 4;
        canvas.height = window.innerHeight / 4;
        draw(context);

    }, [])
    return (
        <Box mx={6} mt={4} mb={-2} bgGradient='linear(to-r, orange.400, orange.300)' borderRadius={10}>
            <canvas ref={canvasRef} />
        </Box>
    )
}
