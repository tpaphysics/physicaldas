import { Box, Button, Input, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import TpaInput from '../components/atoms/TpInput'


const Home: NextPage = () => {
  return (
    <>
      <h1>Dashgo</h1>
      <Box maxWidth={"450px"} width='100%' margin='0 auto' alignItems="center" justifyContent="center" height="100vh">
        <VStack spacing={4} >
          <TpaInput iconType='user' />
        </VStack>

      </Box>
    </>
  )
}

export default Home
