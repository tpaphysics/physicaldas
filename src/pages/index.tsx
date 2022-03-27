import { Button, VStack, Flex, Text, Box, Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { avatars } from '../../arrays'
import TpaInput from '../components/atoms/TpInput'
import Avatars from '../components/molecules/Avatars'


const Home: NextPage = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW={290}
        borderRadius={8}
        flexDir='column'
        marginRight={24}

      >
        <Image src='logo.png' width={220} />
        <Text fontWeight='600' textAlign='left' lineHeight={1.2} fontSize='5xl' marginTop={8}>
          Your the best platform
        </Text>

        <Avatars mt={4} avatarSize='md' avatars={avatars} />
      </Flex>

      <Box width='1px' bg="yellow.400" h={64} />
      <Flex
        as="form"
        w="100%"
        maxW={460}
        bg="gray.800"
        p={16}
        borderRadius={8}
      >
        <VStack w="100%" spacing={4}  >
          <TpaInput iconType='user' placeholder='Your name' />
          <TpaInput iconType='lock' placeholder='Your password' isPassword />
          <Button isFullWidth>Sigin</Button>
        </VStack>
      </Flex>
    </Flex >
  )
}

export default Home
