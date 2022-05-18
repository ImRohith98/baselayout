import { SimpleGrid, Stat, StatHelpText, StatLabel, StatNumber, StatArrow, Box, Button } from '@chakra-ui/react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	// const checkString = require('testingpackage');
	type arrowType = 'decrease' | 'increase' | undefined;
	const navigate = useNavigate();
	interface dataKPI {
		label: string;
		value: string | number;
		helpText?: string;
		arrow?: arrowType;
		arrValue?: string | number;
	}

	const dataKpi: dataKPI[] = [
		{
			label: 'Total',
			value: '10',
			helpText: 'Number Of Deployment'
		},
		{
			label: 'VantageX',
			value: '2',
			arrow: 'increase',
			arrValue: '20%'
		},
		{
			label: 'BotX',
			value: '3',
			arrow: 'decrease',
			arrValue: '20%'
		},
		{
			label: 'Cleared',
			value: '5',
			helpText: 'Number Of Deployment'
		},
		{
			label: 'Issues',
			value: '2',
			helpText: 'Issues While Deployment'
		}
	];

	console.log(moment().format('MM-DD-YYYY'));
	// console.log(checkString('i am sting'));

	return (
		<>
			<SimpleGrid columns={[1, null, 1]} spacing="30px">
				<SimpleGrid columns={[1, null, 5]} spacing="30px">
					{dataKpi.map((a: dataKPI) => (
						<Stat key={a.label} bg={'blackAlpha.50'} w={'auto'} maxH={'auto'} p={15}>
							<StatLabel>{a.label}</StatLabel>
							<StatNumber>{a.value}</StatNumber>
							{a.helpText && <StatHelpText>{a.helpText}</StatHelpText>}
							{a.arrow && (
								<>
									<StatArrow type={a.arrow} /> {a.arrValue}
								</>
							)}
						</Stat>
					))}
				</SimpleGrid>
				<SimpleGrid columns={[1, null, 3]} spacing="30px">
					<Box w={'auto'} h={'auto'} bg={'blackAlpha.50'} p={3}>
						Heading
					</Box>
					<Box w={'auto'} h={'auto'} bg={'blackAlpha.50'}>
						i am box
					</Box>
					<Box w={'auto'} h={'auto'} bg={'blackAlpha.50'}>
						i am box
					</Box>
				</SimpleGrid>
				<Button onClick={() => navigate('/home/form')}>Click to form</Button>
			</SimpleGrid>
		</>
	);
};

export default HomePage;
