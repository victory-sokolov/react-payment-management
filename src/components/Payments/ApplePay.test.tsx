import { fireEvent, render } from '@testing-library/react';
import ApplePay from './ApplePay';

describe('Make a payment with apple pay', () => {

    it('make a payment', () => {
        const {getByTestId} = render(<ApplePay paymentMethod="Apple Pay"/>)
        const button = getByTestId('apple-pay-btn');
        fireEvent.click(button);
        window.localStorage.setItem('payments', JSON.stringify({name: 'Viktor', paymentMethod: 'Apple Pay'}));
    })
})

