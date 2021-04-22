import {
    Table,
    Tbody,
    Td, Th, Thead,
    Tr,
    Button,
    Box, Heading, Stack
} from "@chakra-ui/react";
import { CreditCard } from '../../types';
import { mask } from '../../utils';
import { Container } from '../GlobalStyles';

interface ISavedCards {
    onOpen: () => void,
    cards: CreditCard[],
    editCard: (index: number) => void,
    deleteCard: (index: number) => void,
    setEditing: (value: React.SetStateAction<boolean>) => void
}

export default function SavedCards({onOpen, cards, editCard, setEditing, deleteCard}: ISavedCards)  {

    return (
        <Container>
            <Box w="100%" p={4} align="right">
                <Button data-testid="add-card" colorScheme="teal" variant="outline" onClick={() => {
                    onOpen()
                    setEditing(false)
                }}>
                    Add Card
                </Button>
            </Box>
            {
                (!cards || cards.length === 0) ? <Heading>No cards has been added yet</Heading> :

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
                        <Tr data-testid="table-data-row" key={index}>
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