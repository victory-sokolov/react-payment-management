import { useState } from 'react';
import useForm from '../../hooks/useForm';
import { AlertStatus } from '../Dialog/Status';
import CardForm from '../Forms/CardForm';
import { validateForm } from '../Forms/validation';
import { processPayment } from './ProcessPayment';

export default function CreditCard({paymentMethod}: {paymentMethod: string}) {

    const {values, setValues, handleChange, handleSubmit, errors} = useForm({validate: validateForm, callback: payWithCreditCard});
    const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

      function payWithCreditCard() {
        const paymentInfo = {
            paymentMethod: paymentMethod,
            name: values.name,
            cardNumber: values.cardNumber,
            cvc: values.cvc,
            expiryDate: values.expiryDate
        }
        processPayment(paymentInfo);
        setIsPaymentCompleted(true);
        setValues({});
      }

    return (
        <>
            <CardForm buttonText="Continue To Checkout" handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} values={values} />
            {isPaymentCompleted && <AlertStatus status="success" text="Payment successfully completed"/> }
        </>
    )
}