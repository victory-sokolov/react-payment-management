import useForm from '../../hooks/useForm';
import { CreditCard } from '../../types';
import CardForm from './CardForm';
import validateForm from './validation';

interface NewCard {
    addNewCard: (card: CreditCard) => void
}

export default function NewCardForm({addNewCard} : NewCard) {

    const {values, handleChange, handleSubmit, errors}: any = useForm({validate: validateForm, callback: persistData});

    function persistData() {
        const cardInformation: CreditCard = {
            name: values.name,
            cardNumber: values.cardNumber,
            cvc: values.cvc,
            expiryDate: values.expiryDate
        };

        addNewCard(cardInformation);
    }

    return (
        <CardForm buttonText="Save" handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} values={values} />
    )
}