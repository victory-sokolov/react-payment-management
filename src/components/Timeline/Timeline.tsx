import { Heading, Stack } from '@chakra-ui/layout';
import {
    Table,
    Tbody,
    Td, Th, Thead,
    Tr
} from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { AiFillApple } from 'react-icons/ai';
import { CreditCard } from '../../types';
import { mask } from '../../utils';
import { Container } from '../GlobalStyles';
import { getAllPaymentDetails } from '../Payments/ProcessPayment';

export default function Timeline() {

    const [payments, setPayments] = useState<Array<CreditCard>>([]);

    useEffect(() => {
        setPayments(getAllPaymentDetails());
    }, [])

    return (
            <Container>
                <Stack spacing={6}>
                    <Heading as="h3" size="md">
                        Timeline
                    </Heading>

                    <Table size="md" fontSize="16" variant="simple">
                        <Thead>
                            <Tr>
                            <Th>Name</Th>
                            <Th>Card number</Th>
                            <Th>Payment method</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                payments.map((payment: CreditCard, index: number) => (
                                    <Tr data-testid='payment-timeline' key={index}>
                                        <Td>{payment.name}</Td>
                                        <Td>
                                            {payment?.cardNumber ? mask(payment.cardNumber) :  <span>None <AiFillApple style={{display: 'inline-block'}}/> </span>}
                                        </Td>
                                        <Td>
                                            {payment?.paymentMethod}
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </Stack>
            </Container>
    )
}