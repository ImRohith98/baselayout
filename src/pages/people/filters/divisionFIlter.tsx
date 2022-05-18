import { PeopleData } from '@/constant/people';
import { Select } from '@chakra-ui/react';
import { Component } from 'react';

interface MyState {
	divisionValues: string[];
}

export class DivisionFIlter extends Component {
	state: MyState = {
		divisionValues: []
	};
	componentDidMount() {
		const filterValueCall = async () => {
			const array = PeopleData.map((a) => a.Division);
			const divisionValues: string[] = [...new Set(array)];
			this.setState({ ...this.state, divisionValues });
		};
		filterValueCall();
	}

	render() {
		return (
			<>
				<Select placeholder="Division" width={'200px'}>
					{this.state.divisionValues.map((a) => (
						<option value={a} key={a}>
							{a}
						</option>
					))}
				</Select>
			</>
		);
	}
}

export default DivisionFIlter;
