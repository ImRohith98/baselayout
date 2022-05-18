import { Component, ComponentType } from 'react';

interface ApiData {
	name: string;
	username: string;
	email: string;
	[key: string]: string;
}

type MyState = {
	data: ApiData[];
	term: string;
};

const FilterMap = (WrappedComponenet: ComponentType, entity: string) => {
	return class FilterMap extends Component {
		state: MyState = {
			data: [],
			term: ''
		};
		componentDidMount() {
			const fetchData = async () => {
				const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
				const json = await res.json();
				this.setState({ ...this.state, data: json });
			};
			fetchData();
		}
		render() {
			const { term, data } = this.state;
			const filteredData: ApiData[] = data.slice(0, 10).filter((d) => {
				if (entity === 'users') {
					const { name } = d;
					return name?.indexOf(term) >= 0;
				}
				if (entity === 'todos') {
					const { title } = d;
					return title?.indexOf(term) >= 0;
				}
			});
			return (
				<div>
					<h2>{entity}</h2>
					<input
						type="text"
						value={term}
						onChange={(e) => this.setState({ ...this.state, term: e.target.value })}
					/>
					<WrappedComponenet data={filteredData} />
				</div>
			);
		}
	};
};

export default FilterMap;
