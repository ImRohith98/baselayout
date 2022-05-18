import { Select } from '@chakra-ui/react';
import { ChangeEventHandler } from 'react';

interface Propype {
	placeholder: string;
	dataArray: string[];
	onChange: ChangeEventHandler;
	value: string | undefined;
}

const FIlterDropdown = ({ placeholder, dataArray, onChange, value, ...rest }: Propype) => {
	const result: string[] = [...new Set(dataArray)];
	return (
		<>
			<Select placeholder={placeholder} width={'200px'} value={value} onChange={onChange} {...rest}>
				{result.map((a) => (
					<option value={a} key={a}>
						{a}
					</option>
				))}
			</Select>
		</>
	);
};

export default FIlterDropdown;
