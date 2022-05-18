import { subNavRoute } from '@/types';
import {
	ArrowRightIcon,
	AtSignIcon,
	AttachmentIcon,
	CalendarIcon,
	ChatIcon,
	CheckCircleIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	CloseIcon,
	ExternalLinkIcon,
	HamburgerIcon,
	StarIcon
} from '@chakra-ui/icons';
import { Box, Circle, Collapse, Flex, Link, Stack, Text, Tooltip, useDisclosure } from '@chakra-ui/react';
import { ReactChild, ReactChildren, ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../header';

interface LinkItemProps {
	name: string;
	link: string;
	icon?: ReactElement;
	menuOpen?: boolean;
}

export const LinkItems: LinkItemProps[] = [
	{ name: 'Home', link: '/home', icon: <StarIcon /> },
	{ name: 'Job', link: '/job', icon: <AtSignIcon /> },
	{ name: 'Connectors', link: '/connectors', icon: <AttachmentIcon /> },
	{ name: 'Integratation', link: '/integratation', icon: <CalendarIcon /> },
	{ name: 'People', link: '/people', icon: <ChatIcon /> }
];

const NavItem = ({ name, link, icon, menuOpen, ...rest }: LinkItemProps) => {
	return (
		<Tooltip placement="right" hasArrow label={name} fontSize="md">
			<Flex w={'100%'}>
				<Link
					columnGap={2}
					w={'100%'}
					as={NavLink}
					to={link}
					p="4"
					mx="4"
					my="1"
					borderRadius="lg"
					role="group"
					cursor="pointer"
					_activeLink={{ bg: 'blackAlpha.900', color: 'white' }}
					_hover={{
						bg: 'blackAlpha.900',
						color: 'white'
					}}
					{...rest}
				>
					<Flex gap={4}>
						<Flex mt={1}>{icon}</Flex>
						{!menuOpen && name}
					</Flex>
				</Link>
			</Flex>
		</Tooltip>
	);
};

interface SideNavChildren {
	children?: ReactChild | ReactChildren;
}

interface propsType extends SideNavChildren, subNavRoute {}

const NewSidebar = ({ children, subNavRoutes }: propsType) => {
	const [menuOpen, setmenuOpen] = useState(true);
	const [subMenu, setsubMenu] = useState(false);
	const { isOpen, onToggle } = useDisclosure();
	return (
		<>
			<Box h="100vh" position="relative">
				<Box
					bg={'teal.900'}
					zIndex={999}
					borderRight="1px"
					w={{ base: 'none', md: menuOpen ? '85px ' : '300px' }}
					display={{ base: 'none', md: 'block' }}
					textColor={'white'}
					pos="fixed"
					h="full"
					transition="0.5s"
				>
					<Stack alignItems={menuOpen ? 'center' : 'none'} m={'8'} gap={4}>
						<Flex alignItems="center" gap={4}>
							{!menuOpen ? (
								<CloseIcon
									cursor={'pointer'}
									boxSize={'1.5em'}
									onClick={() => {
										setmenuOpen(!menuOpen);
										setsubMenu(false);
									}}
								/>
							) : (
								<HamburgerIcon
									cursor={'pointer'}
									boxSize={'2em'}
									onClick={() => setmenuOpen(!menuOpen)}
								/>
							)}

							<Text
								fontSize="2xl"
								fontWeight="bold"
								display={{ base: 'none', md: !menuOpen ? 'block' : 'none' }}
							>
								VantageX
							</Text>
						</Flex>
						<Flex alignItems="center" gap={6}>
							{menuOpen ? (
								<Box bg={'blackAlpha.900'} p={2}>
									RM
								</Box>
							) : (
								<>
									<Text
										overflow={'hidden'}
										textOverflow={'ellipsis'}
										whiteSpace={'nowrap'}
										display={{ base: 'none', md: 'block' }}
									>
										Rohith Reddy Mandala
									</Text>
									{!subMenu ? (
										<ChevronDownIcon
											cursor={'pointer'}
											boxSize={'1em'}
											onClick={() => onToggle()}
										/>
									) : (
										<ChevronUpIcon cursor={'pointer'} boxSize={'1em'} onClick={() => onToggle()} />
									)}
								</>
							)}
						</Flex>
						<Collapse in={isOpen} animateOpacity>
							{!menuOpen && (
								<Stack alignItems="center" gap={2}>
									<Flex gap={4} justifyContent="space-around">
										<Circle size="40px" bg="blackAlpha.900" color="white">
											<CheckCircleIcon />
										</Circle>
										<Circle size="40px" bg="blue.900" color="white"></Circle>
										<Circle size="40px" bg="white" color="white"></Circle>
									</Flex>
									<Flex alignItems={'center'} gap={6}>
										<ExternalLinkIcon boxSize={'1em'} />
										<Text display={{ base: 'none', md: 'block' }}>Logout</Text>
									</Flex>
								</Stack>
							)}
						</Collapse>
					</Stack>
					<Stack overflowY={'auto'} h={'calc(100vh - 250px)'}>
						{LinkItems.map((link) => (
							<NavItem
								key={link.name}
								name={link.name}
								link={link.link}
								icon={link.icon}
								menuOpen={menuOpen}
							/>
						))}
					</Stack>
					<Flex h="20" alignItems="center" mx="8" gap={6} position="absolute" bottom={0} transition="5s">
						<ArrowRightIcon boxSize={'1em'} />
						<Text
							overflow={'hidden'}
							textOverflow={'ellipsis'}
							whiteSpace={'nowrap'}
							fontWeight={400}
							display={{ base: 'none', md: !menuOpen ? 'block' : 'none' }}
						>
							Powered By VantageX
						</Text>
					</Flex>
				</Box>
				<Header subNavRoutes={subNavRoutes} />
				{children}
			</Box>
		</>
	);
};

export default NewSidebar;
