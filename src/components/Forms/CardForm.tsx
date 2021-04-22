import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup } from '@chakra-ui/input';
import { Center, HStack, VStack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { formatNumber } from '../../utils';
import { AlertStatus } from '../Dialog/Status';

type CardForm = {
    buttonText: string,
    handleSubmit: (event: React.FormEvent) => void,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    errors: { [key: string]: string },
    values: { [key: string]: any }
}

export default function CardForm({buttonText, handleSubmit, handleChange, errors, values}: CardForm) {

    const [minDate, setMinDate] = useState('');

    useEffect(() => {
        const date = new Date().toISOString().split('T')[0];
        const dateFormated = date.split('-').slice(0,2).join("-");
        setMinDate(dateFormated);
    }, [])

    return (
        <form method="POST" onSubmit={handleSubmit}>
               <VStack spacing={10}>
                    <FormControl id="name">
                        <FormLabel>Card Holder</FormLabel>
                        <Input type="text" name='name' errorBorderColor="crimson" value={values?.name} onChange={handleChange} placeholder="Card holder name"/>
                        {errors.name && <AlertStatus status="error" text={errors.name} />}
                    </FormControl>
                    <FormControl id="card-number">
                    <FormLabel>Card Number</FormLabel>
                    <Input type="text" maxLength={19} value={formatNumber(values?.cardNumber)} name="cardNumber"
                        onChange={handleChange} placeholder="Card number"/>
                    {errors.cardNumber && <AlertStatus status="error" text={errors.cardNumber} />}
                </FormControl>

                <FormControl>
                    <HStack spacing="24px">
                        <Input type="month" min={minDate} name="expiryDate" value={values?.expiryDate} onChange={handleChange} />
                        <InputGroup>
                            <Input type="number" name="cvc" value={values?.cvc} onChange={handleChange}  placeholder="CVC" />
                        </InputGroup>
                    </HStack>
                    {errors.cvc && <AlertStatus status="error" text={errors.cvc} />}
                    {errors.expiryDate && <AlertStatus status="error" text={errors.expiryDate} />}
                </FormControl>
                    <FormControl>
                        <Center>
                            <Button type="submit" size="md" width="220px" colorScheme="teal" variant="outline">
                                {buttonText}
                            </Button>
                        </Center>
                    </FormControl>
               </VStack>
        </form>
    )
}