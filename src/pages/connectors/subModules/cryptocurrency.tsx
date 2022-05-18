import {
	Box,
	Center,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	SimpleGrid,
	Stat,
	StatLabel,
	StatNumber
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

interface dataLableInter {
	label?: string;
	value?: string;
}

const DataLable = ({ label, value }: dataLableInter) => {
	return (
		<Flex w="full" mb={4}>
			<Box fontWeight={'600'} w={'40%'}>
				{label}
			</Box>
			<Box w={'5%'}> : </Box>
			<Box w={'50%'}>{value || '-'}</Box>
		</Flex>
	);
};

interface apiData {
	changePercent24Hr: string;
	explorer: string;
	id: string;
	marketCapUsd: string;
	maxSupply: string;
	name: string;
	priceUsd: string;
	rank: string;
	supply: string;
	symbol: string;
	volumeUsd24Hr: string;
	vwap24Hr: string;
}

const Cryptocurrency = () => {
	const [data, setdata] = useState<apiData[] | undefined>([]);
	const [cypto, setcypto] = useState<apiData | undefined>();
	const [loading, setloading] = useState(true);
	const [modelWindow, setmodelWindow] = useState(false);

	const getCycList = async () => {
		setloading(true);
		const data = await fetch('https://api.coincap.io/v2/assets');
		const cycList = await data.json();
		setdata(cycList?.data);
		setloading(false);
	};

	useEffect(() => {
		getCycList();
	}, []);

	const getDetails = async (id: string) => {
		const data = await fetch(`https://api.coincap.io/v2/assets/${id}`);
		const cycList = await data.json();
		setcypto(cycList?.data);
		setmodelWindow(!modelWindow);
	};

	console.log(cypto);

	return (
		<>
			{loading ? (
				<Center h={'100vh'}>loading...</Center>
			) : (
				<SimpleGrid columns={[1, null, 6]} spacing="30px">
					{data?.map((a: apiData) => (
						<Stat
							key={a.id}
							bg={'blackAlpha.50'}
							w={'auto'}
							maxH={'auto'}
							p={15}
							cursor={'pointer'}
							onClick={() => getDetails(a.id)}
						>
							<StatLabel>{a.name}</StatLabel>
							<StatNumber>${parseFloat(a.priceUsd).toFixed(2)}</StatNumber>
						</Stat>
					))}
				</SimpleGrid>
			)}
			<Modal isOpen={modelWindow} size={'xl'} onClose={() => setmodelWindow(!modelWindow)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{cypto?.name}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<DataLable label="Symbol" value={cypto?.symbol} />
						<DataLable label="Rank" value={cypto?.rank} />
						<DataLable label="Price Usd" value={cypto?.priceUsd} />
						<DataLable label="Id" value={cypto?.id} />
						<DataLable label="Market Cap Usd" value={cypto?.marketCapUsd} />
						<DataLable label="Supply" value={cypto?.supply} />
						<DataLable label="Volume Usd 24Hr" value={cypto?.volumeUsd24Hr} />
						<DataLable label="VWap24Hr" value={cypto?.vwap24Hr} />
						<DataLable label="Change Percent in last 24Hr" value={cypto?.changePercent24Hr} />
						<DataLable label="Max Supply" value={cypto?.maxSupply} />
						<DataLable label="For more info" value={cypto?.explorer} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Cryptocurrency;
