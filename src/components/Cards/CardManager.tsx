import { useDisclosure } from '@chakra-ui/hooks';
import { useEffect, useState } from 'react';
import { CreditCard } from '../../types';
import ModalWindow from '../Dialog/ModalWindow';
import EditCard from '../Forms/EditCard';
import NewCardForm from '../Forms/NewCardForm';
import SavedCards from './SavedCards';

export default function CardsManager() {

    const {isOpen, onOpen, onClose } = useDisclosure();
    const [editing, setEditing] = useState<boolean>(false);
    const [cards, setCards] = useState<CreditCard[]>([]);
    const [currentCard, setCurrentCard] = useState<CreditCard>({name: '', cardNumber: '', cvc: '', expiryDate: new Date()});
    const [cardIndex, setCardIndex] = useState(-1);

    useEffect(() => {
        if(localStorage.getItem('card')) {
            const cards = JSON.parse(localStorage.getItem('card')!);
            setCards(cards);
        }
    }, [])


    const onCardEdit = (index: number) => {
        onOpen();
		setEditing(true);
        setCardIndex(index);
        setCurrentCard(cards[index]);
    }

    const updateCard = (updatedCard: CreditCard) => {
        const newCards = cards.map((card: CreditCard, index: number) => (index === cardIndex ? updatedCard : card ));
        setCards(newCards);
        localStorage.setItem('card', JSON.stringify(newCards));
        onClose();
    }

    const deleteCard = (index: number) => {
        const newCards = cards.filter((card: CreditCard) => card !== cards[index]);
        setCards(newCards);
        localStorage.setItem('card', JSON.stringify(newCards));
    }

    const addNewCard = (cardInformation: CreditCard) => {
        setEditing(false);
        onOpen();
        if(localStorage.getItem('card')) {
            cards.push(cardInformation);
            localStorage.setItem('card', JSON.stringify(cards));
            onClose();
            return;
        }
        localStorage.setItem('card', JSON.stringify([cardInformation]));
        return;
    }

    return (
        <>
            <ModalWindow open={isOpen} close={onClose}>
                {editing
                    ? <EditCard title="Edit credit card details" setClose={onClose} setEditing={setEditing} currentCard={currentCard} updateCard={updateCard}/>
                    : <NewCardForm title="Add new credit card" setClose={onClose} creditCards={cards} addNewCard={addNewCard} />
                }
            </ModalWindow>
            <SavedCards editCard={onCardEdit} setEditing={setEditing} onOpen={onOpen} cards={cards} deleteCard={deleteCard} />
        </>
    )
}