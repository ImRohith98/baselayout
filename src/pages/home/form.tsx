import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
	const navigate = useNavigate();

	return (
		<>
			This is form testing
			<Button onClick={() => navigate('/home')}>Back to home page</Button>
		</>
	);
};

export default Form;
