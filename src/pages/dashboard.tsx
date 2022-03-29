import { Box, Flex, HStack, SimpleGrid, Text, theme, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import SideBar from '../components/molecules/SideBar'
import Header from '../components/templates/Header'
import dynamic from 'next/dynamic'
import LineCart from '../charts/LineCart'
import AngleCircle from '../charts/AngleCircle'
import ThreeMap from '../charts/ThreeMap'
import Bar from '../charts/Bar'
import AngleTwo from '../charts/AngleTwo'

const Chart = dynamic(
    () => import('react-apexcharts'),
    { ssr: false }
)


const options = {
    options: {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
    },
}





export default function Dashboard() {

    return (
        <Flex h="100vh" direction='column'>
            <Header />
            <Flex w="100%" my="6" mx="auto" maxWidth="1480" px="6" flex="1" >
                <SideBar />
                <VStack w="100%" spacing={4}>
                    <SimpleGrid width="100%" gap="4" minChildWidth="320px" alignItems="flex-start" >
                        <Flex p={8} bg="gray.800" borderRadius={8} flexDir="column">
                            <Text>Inscritos na semana</Text>
                            <Box w={260} m="0 auto">
                                <AngleTwo />
                            </Box>


                        </Flex>
                        <Box p={8} bg="gray.800" borderRadius={8} >
                            <Text >Acessos nos últimos 5 dias</Text>
                            <LineCart />
                        </Box>
                    </SimpleGrid>

                    <Box px={8} paddingTop={8} bg="gray.800" borderRadius={8} flex="1" w="100%" >
                        <Text >Inscritos mensal</Text>
                        <Bar />
                    </Box>
                </VStack>




            </Flex>

        </Flex >
    )
}
