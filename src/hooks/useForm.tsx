import { useEffect, useState } from 'react';
import { isEmpty } from '../utils/helpers';

interface InputProps {
	validate?: any,
	callback?: any,
}

export default function useForm({
	validate,
	callback,
}: InputProps): any {

	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isFormSubmited, setIsFormSubmited] = useState(false);

	useEffect(() => {
		if (isEmpty(errors) && isFormSubmited) {
			callback();
		}
  	}, [errors]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const nameAttr = e.target.name;
		const inputValue = e.target.value;
		if(nameAttr === 'cvc' && inputValue.length > 3) {
			return;
		}
		setValues(values => ({ ...values, [nameAttr]: inputValue }));
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setErrors(validate(values));
		setIsFormSubmited(true);
  };

	const reset = () => {
    	setValues("");
 	};

	return {values, setValues, handleChange, handleSubmit, errors, reset};
};

