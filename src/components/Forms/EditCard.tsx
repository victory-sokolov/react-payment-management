import { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import { CreditCard } from '../../types';
import CardForm from './CardForm';
import validateForm from './validation';

interface IEditCard {
    currentCard: CreditCard,
    setEditing: (value: React.SetStateAction<boolean>) => void,
    updateCard: (card: CreditCard) => void
}

export default function EditCard({currentCard, setEditing, updateCard}: IEditCard) {

    const {values, setValues, handleChange, handleSubmit, errors}: any = useForm({validate: validateForm, callback: persistData});

    useEffect(() => {
        setEditing(true);
        setValues(currentCard);
    }, [])

    function persistData()  {
        updateCard(values);
    }

    return (
        <CardForm buttonText="Update" handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} values={values} />
    )
}