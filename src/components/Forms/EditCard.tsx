import { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import CardForm from './CardForm';
import { validateForm } from './validation';

export default function EditCard({currentCard, setEditing, updateCard}: any) {

    const {values, setValues, handleChange, handleSubmit, errors} = useForm({validate: validateForm, callback: persistData});

    useEffect(() => {
        setEditing(true);
        setValues(currentCard);
    }, [])

    function persistData()  {
        updateCard(values)
    }

    return (
        <CardForm buttonText="Update" handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} values={values} />
    )
}