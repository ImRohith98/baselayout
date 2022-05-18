import { subNavRoute } from '@/types';
import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { ReactChild, ReactChildren } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../header';

interface LinkItemProps {
	name: string;
	link: string;
}

export const LinkItems: LinkItemProps[] = [
	{ name: 'Home', link: '/home' },
	{ name: 'Job', link: '/job' },
	{ name: 'Connectors', link: '/connectors' },
	{ name: 'Integratation', link: '/integratation' },
	{ name: 'People', link: '/people' }
];

const NavItem = ({ name, link, ...rest }: LinkItemProps) => {
	return (
		<Flex w={'100%'}>
			<Link
				w={'100%'}
				as={NavLink}
				to={link}
				p="4"
				mx="4"
				borderRadius="lg"
				role="group"
				cursor="pointer"
				_activeLink={{ bg: 'purple.700', color: 'white' }}
				_hover={{
					bg: 'purple.700',
					color: 'white'
				}}
				{...rest}
			>
				{name}
			</Link>
		</Flex>
	);
};

interface SideNavChildren {
	children?: ReactChild | ReactChildren;
}

interface propsType extends SideNavChildren, subNavRoute {}

const SideNav = ({ children, subNavRoutes }: propsType) => {
	return (
		<>
			<Box h="100vh">
				<Box
					bg={'blackAlpha.50'}
					borderRight="1px"
					borderRightColor={useColorModeValue('gray.200', 'gray.700')}
					w={{ base: 'none', md: 60 }}
					display={{ base: 'none', md: 'block' }}
					pos="fixed"
					h="full"
				>
					<Flex h="20" alignItems="center" mx="8" gap={4}>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							role="img"
							viewBox="0 0 24 24"
							height="1.4em"
							width="1.4em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title></title>
							<path d="M0 8.877L2.247 5.91l8.405-3.416V.022l7.37 5.393L2.966 8.338v8.225L0 15.707zm24-4.45v14.651l-5.753 4.9-9.303-3.057v3.056l-5.978-7.416 15.057 1.798V5.415z"></path>
						</svg>
						<Text fontSize="2xl" fontWeight="bold" display={{ base: 'none', md: 'block' }}>
							Ausiytic
						</Text>
					</Flex>
					{LinkItems.map((link) => (
						<NavItem key={link.name} name={link.name} link={link.link} />
					))}
				</Box>
				<Header subNavRoutes={subNavRoutes} />
				{children}
			</Box>
		</>
	);
};

export default SideNav;
