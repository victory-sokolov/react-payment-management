import { Stack } from '@chakra-ui/layout';
import { FormControl, Heading, Select } from "@chakra-ui/react";
import React, { useState } from 'react';
import styled from 'styled-components';
import { PaymentOptions } from '../../types';
import { Container } from '../GlobalStyles';
import ApplePay from '../Payments/ApplePay';
import CreditCard from '../Payments/CreditCard';
import SavedCreditCards from '../Payments/SavedCreditCards';

const FormWrapper = styled.div`
    background-color: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    margin: 25px;
    padding: 25px 25px 50px;

    h3 {
        margin: 50px 0 50px;
    }

    button {
        margin-top: 80px;
    }
`;

export function CheckoutForm() {

    const [paymentOptions] = useState(['Credit card', 'Apple Pay', 'Saved Card']);
    const [paymentMethod, setPaymentMethod] = useState(-1);

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPaymentMethod(+e.target.value);
    }

    const PaymentMethodComponent = () => {

        switch (paymentMethod) {
            case PaymentOptions.CreditCard:
                return <CreditCard paymentMethod={paymentOptions[PaymentOptions.CreditCard]} />
            case PaymentOptions.ApplePay:
                return <ApplePay paymentMethod={paymentOptions[PaymentOptions.ApplePay]} />
            case PaymentOptions.SavedCards:
                return <SavedCreditCards paymentMethod={paymentOptions[PaymentOptions.CreditCard]} />
            default:
                return null;
        }

    }

    return (
        <Container>
            <FormWrapper>
                    <Heading as="h3" size="md">
                        Choose a payment
                    </Heading>
                    <FormControl>
                        <Stack spacing={10}>
                            <Select placeholder="Select Payment Options" onChange={handleOptionChange}>
                                {paymentOptions.map((paymentType: string, key: number) => (
                                    <option value={key} key={key}>{paymentType}</option>
                                ))}
                            </Select>
                            {PaymentMethodComponent()}
                        </Stack>
                    </FormControl>
            </FormWrapper>
        </Container>
    )
}