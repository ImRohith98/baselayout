import { constNav, subNavRoute } from '@/types';
import {
	Avatar,
	Flex,
	HStack,
	Input,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorModeValue,
	VStack
} from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LinkItems } from '../sidenav';

interface Auth {
	name: string;
	lastName: string;
	auth: boolean;
	date?: string;
}

const Header = ({ subNavRoutes = [] }: subNavRoute) => {
	const navigate = useNavigate();
	const data: Auth = {
		name: 'rohith',
		lastName: 'reddy',
		auth: false,
		date: new Date().toString()
	};

	const onLogoutCLick = (): void => {
		localStorage.setItem('authProvider', JSON.stringify(data));
		navigate('/logout');
	};

	return (
		<>
			<Flex
				ml={{ base: 0, md: 20 }}
				px={4}
				height="20"
				alignItems="center"
				bg={{ base: 'blackAlpha.50', md: 'none' }}
				justifyContent={'space-between'}
				// {...rest}
			>
				<Input display={{ base: 'none', md: 'block' }} w={300} placeholder="Search..." />
				<Menu>
					<MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
						<Text
							display={{ base: 'flex', md: 'none' }}
							fontSize="2xl"
							fontFamily="monospace"
							fontWeight="bold"
						>
							Ausiytic
						</Text>
					</MenuButton>
					<MenuList
						bg={useColorModeValue('white', 'gray.900')}
						borderColor={useColorModeValue('gray.200', 'gray.700')}
					>
						{LinkItems.map((a) => (
							<NavLink key={a.link} to={a.link}>
								<MenuItem>{a.name}</MenuItem>
							</NavLink>
						))}
					</MenuList>
				</Menu>
				<HStack spacing={{ base: '0', md: '6' }}>
					<Flex alignItems={'center'}>
						<Menu>
							<MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
								<HStack>
									<Avatar
										size={'sm'}
										src={
											'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
										}
									/>
									<VStack
										display={{ base: 'none', md: 'flex' }}
										alignItems="flex-start"
										spacing="1px"
										ml="2"
									>
										<Text fontSize="sm">Rohith M</Text>
									</VStack>
									{/* <Box display={{ base: 'none', md: 'flex' }}>
										<FiChevronDown />
									</Box> */}
								</HStack>
							</MenuButton>
							<MenuList
								bg={useColorModeValue('white', 'gray.900')}
								borderColor={useColorModeValue('gray.200', 'gray.700')}
							>
								<MenuItem>Profile</MenuItem>
								<MenuItem>Settings</MenuItem>
								<MenuItem onClick={() => onLogoutCLick()}>Logout</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</HStack>
			</Flex>
			{subNavRoutes?.length > 0 && (
				<Flex p={2} bg={'blackAlpha.50'} ml={{ base: 'none', md: '90px' }}>
					{subNavRoutes?.map((a: constNav) => (
						<Link
							as={NavLink}
							to={a.link}
							_activeLink={{ bg: 'purple.700', color: 'white', borderRadius: '5px' }}
							_hover={{
								bg: 'purple.700',
								color: 'white',
								borderRadius: '5px'
							}}
							px={4}
							py={2}
							mr={2}
							key={a.name}
						>
							{a.name}
						</Link>
					))}
				</Flex>
			)}
		</>
	);
};

export default Header;
