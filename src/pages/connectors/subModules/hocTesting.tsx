import FilterMap from '@/components/hoc/filter';

interface ApiData {
	name: string;
	username: string;
	email: string;
	[key: string]: string;
}

interface PropsData {
	data: ApiData[];
}

const UsersList = ({ data }: PropsData) => {
	const renderUsers = data.map((user) => {
		return (
			<div key={user.id}>
				<p>
					<strong>{user.name}</strong>
				</p>
			</div>
		);
	});
	return (
		<div>
			<div>{renderUsers}</div>
		</div>
	);
};

const SearchUsers = FilterMap(UsersList, 'users');

export default SearchUsers;
