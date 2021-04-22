import { useEffect, useState } from 'react';
import { isEmpty } from '../utils';

type InputProps = {
	validate: (values: any) => { [ key: string ]: string; }
	callback?: () => void
}

const useForm = ({validate, callback}: InputProps) => {

	const [values, setValues] = useState<{ [key: string]: any }>({});
	const [errors, setErrors] = useState({});
	const [isFormSubmited, setIsFormSubmited] = useState(false);

	useEffect(() => {
		if (isEmpty(errors) && isFormSubmited) {
			if(callback) callback();
		}
  	}, [errors, isFormSubmited]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const nameAttr = e.target.name;
		const inputValue = e.target.value;
		if(nameAttr === 'cvc' && inputValue.length > 3) {
			return;
		}
		setValues(data => ({ ...data, [nameAttr]: inputValue }));
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setErrors(validate(values));
		setIsFormSubmited(true);
  	};

	const reset = () => {
    	setValues({});
 	};

	return {values, setValues, handleChange, handleSubmit, errors};
};

export default useForm;