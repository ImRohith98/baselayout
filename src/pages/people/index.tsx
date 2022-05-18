import { PeopleData, peopleTypr } from '@/constant/people';
import { Avatar, Box, Button, Center, Flex, Input, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { ChangeEvent, PureComponent } from 'react';
import FIlterDropdown from './Components/filtersDropdown';

interface cardProps {
	name: string;
	id: number;
	department: string;
}

const Card = ({ name, id, department }: cardProps) => {
	return (
		<Box
			_hover={{
				boxShadow: '2xl',
				borderBottom: '5px solid blue'
			}}
			w={{ base: 'auto', md: '250px' }}
			borderRadius={'md'}
			bg={'blackAlpha.200'}
		>
			<Center p={4}>
				<Avatar size={'xl'} src={`https://i.pravatar.cc/150?img=${id}`} />
			</Center>
			<Center>
				<Text fontWeight={600}>{name}</Text>
			</Center>
			<Center p={2} borderTop={'1px solid white'}>
				<Text textTransform={'uppercase'} fontWeight={500}>
					{department}
				</Text>
			</Center>
		</Box>
	);
};

interface Filter {
	DepartmentName?: string | undefined;
	Division?: string | undefined;
	City?: string | undefined;
	BusinessUnit?: string | undefined;
}

interface MyStateProps {
	filter: Filter;
	peopleData: peopleTypr[];
}

export default class People extends PureComponent {
	state: MyStateProps = {
		filter: {},
		peopleData: PeopleData
	};
	render() {
		console.log(this.state);
		return (
			<>
				<Stack w={'full'} direction={{ base: 'column', md: 'row' }}>
					<Box height="auto" w={'full'}>
						<Stack w={'full'} justifyContent={'space-between'} p={4} direction={'row'}>
							<Text fontSize={'xl'} mt={'1'}>
								People
							</Text>
							<Input
								w={{ base: '150px', md: '300px' }}
								bg={'#ecedf6'}
								placeholder="Search by Name"
								onChange={(e: ChangeEvent<HTMLInputElement>) => this.onSearch(e.target.value)}
							/>
						</Stack>
						<Stack justifyContent={'space-between'} p={4} direction={{ base: 'column', md: 'row' }}>
							<Flex gap={4} direction={{ base: 'column', md: 'row' }}>
								<FIlterDropdown
									placeholder="Department"
									dataArray={PeopleData.map((a) => a.DepartmentName)}
									onChange={(e: ChangeEvent<HTMLInputElement>) =>
										this.handleOnChange('DepartmentName', e.target.value)
									}
									value={this?.state?.filter?.DepartmentName}
								/>
								<FIlterDropdown
									placeholder="Division"
									dataArray={PeopleData.map((a) => a.Division)}
									onChange={(e: ChangeEvent<HTMLInputElement>) =>
										this.handleOnChange('Division', e.target.value)
									}
									value={this?.state?.filter?.Division}
								/>
								<FIlterDropdown
									placeholder="City"
									dataArray={PeopleData.map((a) => a.City)}
									onChange={(e: ChangeEvent<HTMLInputElement>) =>
										this.handleOnChange('City', e.target.value)
									}
									value={this?.state?.filter?.City}
								/>
								<FIlterDropdown
									placeholder="Business Unit"
									dataArray={PeopleData.map((a) => a.BusinessUnit)}
									onChange={(e: ChangeEvent<HTMLInputElement>) =>
										this.handleOnChange('BusinessUnit', e.target.value)
									}
									value={this?.state?.filter?.BusinessUnit}
								/>
							</Flex>
							{this.state.filter && (
								<Flex gap={4}>
									<Button colorScheme="blue" onClick={() => this.onFilterApply()}>
										Apply
									</Button>
									<Button colorScheme="blue" onClick={() => this.onClearFilter()}>
										Clear
									</Button>
								</Flex>
							)}
						</Stack>
						<SimpleGrid minChildWidth="300px" spacing="50px">
							{this.state.peopleData.slice(0, 50).map((a) => (
								<Card
									name={`${a.Surname} ${a.GivenName}`}
									key={a.EmployeeNumber}
									id={a.EmployeeNumber}
									department={a.DepartmentName}
								/>
							))}
						</SimpleGrid>
					</Box>
					{/* <Box bg="tomato" height="auto" w={{ base: 'full', md: '25%' }}>
						i am side contetnt
					</Box> */}
				</Stack>
			</>
		);
	}

	globalFilterCols = [
		'Surname',
		'GivenName',
		'Gender',
		'City',
		'JobTitle',
		'DepartmentName',
		'StoreLocation',
		'Division',
		'BusinessUnit'
	];

	handleOnChange = (name: string, value?: string): void => {
		this.setState({
			...this.state,
			filter: {
				...this.state.filter,
				[name]: value
			}
		});
	};

	onClearFilter = () => {
		this.setState({
			...this.state,
			filter: {},
			peopleData: PeopleData
		});
	};

	onFilterApply = () => {
		const filteredData =
			PeopleData &&
			PeopleData.filter((item: peopleTypr) => {
				let success = true;
				if (this.state.filter.BusinessUnit && this.state.filter.BusinessUnit.indexOf(item.BusinessUnit) < 0)
					success = false;
				if (this.state.filter.City && this.state.filter.City.indexOf(item.City) < 0) success = false;
				if (
					this.state.filter.DepartmentName &&
					this.state.filter.DepartmentName.indexOf(item.DepartmentName) < 0
				)
					success = false;
				if (this.state.filter.Division && this.state.filter.Division.indexOf(item.Division) < 0)
					success = false;
				if (success) return item;
			});
		this.setState({
			...this.state,
			peopleData: filteredData
		});
	};

	onSearch = (value: string) => {
		const filteredData =
			PeopleData &&
			PeopleData.filter((item: peopleTypr) => {
				let success = true;
				if (value) {
					const ret = this.globalFilterCols.map((fil: string) => {
						if (
							!item[fil] ||
							(item[fil] && item[fil].toString().toLowerCase().indexOf(value.toLowerCase()) < 0)
						)
							return false;
						return true;
					});
					if (ret.filter((re) => re).length <= 0) success = false;
				}
				if (success) return item;
			});
		this.setState({
			...this.state,
			peopleData: filteredData
		});
	};
}
