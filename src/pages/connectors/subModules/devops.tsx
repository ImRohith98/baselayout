import { Box, Center, Flex, SimpleGrid, Text, Tooltip } from '@chakra-ui/react';
import { Component } from 'react';

interface ApiData {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

type MyState = {
	data: ApiData[];
	loading: boolean;
};

export default class Devops extends Component {
	state: MyState = {
		data: [],
		loading: true
	};
	componentDidMount() {
		const apiCall = async () => {
			const fetchData = await fetch('https://jsonplaceholder.typicode.com/todos');
			const data = await fetchData.json();
			this.setState({ ...this.state, data, loading: false });
		};
		apiCall();
	}

	todoAction = (id: number): void => {
		const daleteTask = this.state.data?.filter((a) => a.id !== id);
		this.setState({
			...this.state,
			data: daleteTask
		});
	};

	render() {
		return (
			<>
				<Text>ToDo List</Text>
				{this.state.loading ? (
					<Center h={'100vh'}>loading...</Center>
				) : (
					<SimpleGrid columns={[1, null, 5]} spacing="30px">
						{this.state.data?.map((a) => (
							<Tooltip key={a.id} label="Click me to delete">
								<Flex
									onClick={() => this.todoAction(a.id)}
									bg={a.completed ? 'green.100' : 'gray.100'}
									p={2}
									m={2}
									w={'auto'}
									cursor={'pointer'}
									_hover={{ bg: 'red.100' }}
									direction={'column'}
								>
									<Box>{a.id}</Box>
									{a.title}
								</Flex>
							</Tooltip>
						))}
					</SimpleGrid>
				)}
			</>
		);
	}
}
