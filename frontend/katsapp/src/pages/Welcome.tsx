import { Button, Center, Image, Link, Stack, Text, VStack } from '@chakra-ui/react';

const Welcome = (): JSX.Element => (
	<Center mt="-90px">
		<VStack spacing="50px">
			<Image src='assets/logo.png' alt='Logo-Katsapp' />
			<Text fontSize='2xl' color='orange.400' as='b'>
				Join Katsapp to chat with your friends all around the world !
			</Text>
			<Stack direction='column' spacing={4} >
				<Button size='lg' borderWidth='4px' colorScheme='green' variant='outline' style={{borderRadius: 60}} >
					<Link>Log In</Link>
				</Button>
				<Button colorScheme='green' style={{borderRadius: 60}} width='350px' size='lg'>
					Sign Up
				</Button>
			</Stack>
				<Link fontSize='xs' color='orange.500' >About Us</Link>
		</VStack>
	</Center>
);

export default Welcome;
