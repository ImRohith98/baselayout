import { PeopleData } from '@/constant/people';
import { Select } from '@chakra-ui/react';
import { useState } from 'react';

const DepartmentFilter = () => {
	const [departmentValue, setdepartmentValue] = useState('Accounting');
	const array = PeopleData.map((a) => a.DepartmentName);
	const result: string[] = [...new Set(array)];
	return (
		<>
			<Select
				placeholder="Department"
				width={'200px'}
				value={departmentValue}
				onChange={(e) => setdepartmentValue(e.target.value)}
			>
				{result.map((a) => (
					<option value={a} key={a}>
						{a}
					</option>
				))}
			</Select>
		</>
	);
};

export default DepartmentFilter;
