import { Button, HStack, Heading, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { MdMailOutline } from 'react-icons/md'

const Newsletter = () => {
    return (
        <Stack p={{ base: 6, lg: 14 }} bg="blackAlpha.100" justifyContent="center" alignItems="center" spacing={5}>
            <Heading textAlign="center" fontSize="1.75rem" fontWeight="500">Subscribe to our newsletter</Heading>
            <Text textAlign="center">Get daily news on upcoming offers from many suppliers all over the world</Text>
            <HStack w={{ lg: "md" }}>
                <InputGroup bg="white">
                    <InputLeftElement color="blackAlpha.600">
                        <MdMailOutline color="inherit" />
                    </InputLeftElement>
                    <Input placeholder='Email' />
                </InputGroup>
                <Button colorScheme="blue" px={8}>Subscribe</Button>
            </HStack>
        </Stack >
    )
}

export default Newsletter