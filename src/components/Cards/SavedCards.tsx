import { Button } from '@chakra-ui/button';
import { Box, Heading, Stack } from '@chakra-ui/layout';
import {
    Table,
    Tbody,
    Td, Th, Thead,
    Tr
} from "@chakra-ui/react";
import { CreditCard } from '../../types';
import { mask } from '../../utils';
import { Container } from '../GlobalStyles';

export default function SavedCards({onOpen, cards, editCard, setEditing, deleteCard}: any)  {

    return (
        <Container>
            <Box w="100%" p={4} align="right">
                <Button colorScheme="teal" variant="outline" onClick={() => {
                    onOpen()
                    setEditing(false);
                }}>
                    Add Card
                </Button>
            </Box>
            {
                (cards.length === 0) ? <Heading>No cards has been added yet</Heading> :

            <Table variant="simple" fontSize={15}>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Card number</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {cards.map((card: CreditCard, index: number) => (
                        <Tr key={index}>
                            <Td>{card.name}</Td>
                            <Td>{mask(card.cardNumber)}</Td>
                            <Td>
                                <Stack spacing={4} direction="row" align="center">
                                    <Button colorScheme="teal" variant="outline" onClick={() => editCard(index)}>
                                        Edit
                                    </Button>
                                    <Button colorScheme="red" variant="outline" onClick={() => {
                                        deleteCard(index);
                                    }}>
                                        Delete
                                    </Button>
                                </Stack>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            }
        </Container>
    )
}