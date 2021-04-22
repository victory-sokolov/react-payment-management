import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { CreditCard } from '../../types';
import SavedCards from './SavedCards';

describe("test add new card", () => {

    const card: CreditCard = {
        name: 'Viktor Sokolov',
        cardNumber: '5590 5543 5454 9000',
        cvc: '950',
        expiryDate: new Date((new Date()).getTime() + (100 * 86400000))
    }

    it("add new card", () => {
        const mockFn = jest.fn();
        const props = { onOpen: mockFn, setEditing: mockFn, cards: [card], editCard: mockFn, deleteCard: mockFn };
        const {queryByTestId} = render(<SavedCards {...props}/>)
        const button = (queryByTestId("add-card"));

        expect(button).toBeTruthy()
        fireEvent.click(button!)

        const row = queryByTestId('table-data-row')!.firstChild;
        expect(row?.textContent).toBe(card.name);
    })
})

