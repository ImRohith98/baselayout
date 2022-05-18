import {
	CheckCircleIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	CloseIcon,
	ExternalLinkIcon,
	HamburgerIcon
} from '@chakra-ui/icons';
import { Box, Circle, Collapse, Flex, Stack, Text, useDisclosure } from '@chakra-ui/react';

const UpperPart = ({ menuOpen, setmenuOpen, setsubMenu, subMenu }) => {
	const { isOpen, onToggle } = useDisclosure();
	return (
		<>
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
					<HamburgerIcon cursor={'pointer'} boxSize={'2em'} onClick={() => setmenuOpen(!menuOpen)} />
				)}

				<Text fontSize="2xl" fontWeight="bold" display={{ base: 'none', md: !menuOpen ? 'block' : 'none' }}>
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
						<Text display={{ base: 'none', md: 'block' }}>Rohith Reddy Mandala</Text>
						{!subMenu ? (
							<ChevronDownIcon cursor={'pointer'} boxSize={'1em'} onClick={() => onToggle()} />
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
		</>
	);
};

export default UpperPart;
