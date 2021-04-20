import useForm from '../../hooks/useForm';
import { CreditCard } from '../../types';
import CardForm from './CardForm';
import { validateForm } from './validation';

export default function NewCardForm({addNewCard} : any) {

    const {values, handleChange, handleSubmit, errors} = useForm({validate: validateForm, callback: persistData});

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