import { Button } from '@chakra-ui/button';
import { Select } from '@chakra-ui/select';
import React, { useEffect, useState } from 'react';
import { CreditCard } from '../../types';
import { isEmpty, mask } from '../../utils';
import { AlertStatus } from '../Dialog/Status';
import { processPayment } from './ProcessPayment';

export default function CreditCards({paymentMethod}: {paymentMethod: string}) {

    const [creditCards, setCreditCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState<CreditCard>({name: '', cardNumber: '', cvc: '', expiryDate: new Date()});
    const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

    useEffect(() => {
        const cards = JSON.parse(localStorage.getItem('card')!);
        setCreditCards(cards);
    }, [])

    const onCardSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const index = +e.target.value;
        setSelectedCard(creditCards[index]);
    }

    const payWithSelectedCard = () => {
        selectedCard.paymentMethod = paymentMethod;
        processPayment(selectedCard)
        setIsPaymentCompleted(true)
    }

    return (
        <form method="POST">
            <Select placeholder="Select Credit Card" onChange={onCardSelect}>
            {

                creditCards?.map((card: CreditCard, index: number) => (
                    <option value={index} key={index}>{mask(card.cardNumber)}</option>
                ))
            }
            </Select>
            <Button disabled={isEmpty(selectedCard)} colorScheme="teal" width="220px" variant="outline" onClick={payWithSelectedCard}>
                Continue To Checkout
            </Button>
            {isPaymentCompleted && <AlertStatus status="success" text="Payment successfully completed"/> }
        </form>
    )
}