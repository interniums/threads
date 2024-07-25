import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import zuckerbergAvatar from '../public/zuck-avatar.png'
import verified from '../public/verified.png'
import { BsThreeDots } from 'react-icons/bs'

const UserPost = () => {
  return (
    <Link to={'/markzuckerberg/post/1'}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={'column'} alignItems={'center'}>
          <Avatar size="md" name="Mark Zuckerberg" src={zuckerbergAvatar} />
          <Box w={'1px'} h={'full'} bg="gray.light" my={2}></Box>
          <Box position={'relative'} w={'full'}>
            <Avatar
              size={'xs'}
              name="Jhon Doe"
              src="https://bit.ly/sage-adebayo"
              position={'absolute'}
              top={'0px'}
              left={'15px'}
              padding={'2px'}
            />
            <Avatar
              size={'xs'}
              name="Jhon Doe"
              src="https://bit.ly/code-beast"
              position={'absolute'}
              bottom={'0px'}
              right={'-5px'}
              padding={'2px'}
            />
            <Avatar
              size={'xs'}
              name="Jhon Doe"
              src="https://bit.ly/dan-abramov"
              position={'absolute'}
              bottom={'0px'}
              left={'4px'}
              padding={'2px'}
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDirection={'column'} gap={2}>
          <Flex justifyContent={'space-between'} w={'full'}>
            <Flex w={'full'} alignItems={'center'}>
              <Text fontWeight={'bold'} fontSize={'sm'}>
                markazuckerberg
              </Text>
              <Image src={verified} w={4} h={4} ml={1} />
            </Flex>
            <Flex alignItems={'center'} gap={4}>
              <Text fontSize={'sm'} color={'gray.light'}>
                1d
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  )
}

export default UserPost
