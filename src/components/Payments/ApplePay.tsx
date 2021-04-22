import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { Heading } from '@chakra-ui/layout';
import { useState } from 'react';
import { AiFillApple } from "react-icons/ai";
import { random } from '../../utils';
import { AlertStatus } from '../Dialog/Status';
import { processPayment } from './ProcessPayment';

export default function ApplePay({paymentMethod}: {paymentMethod: string}) {

    const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

    const makePayment = async () => {
        const rand = random(1, 10);
        const request = await fetch(`${process.env.REACT_APP_APPLE_PAY_ENDPOINT}/users/${rand}`);
        const data = await request.json();
        data.paymentMethod = paymentMethod
        processPayment(data);
        setIsPaymentCompleted(true);
    }

    return (
        <form method="POST">
            <Heading as="h4" size="md">
                Pay with Apple Pay
            </Heading>
            <FormControl>
                <Button data-testid='apple-pay-btn' colorScheme="teal" width="220px" variant="outline" size="lg" onClick={makePayment}>
                    <AiFillApple /> Pay
                </Button>
            </FormControl>
            {isPaymentCompleted && <AlertStatus status="success" text="Payment successfully completed"/> }
        </form>
    )
}