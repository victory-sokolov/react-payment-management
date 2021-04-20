import { CreditCard } from '../../types';

export const processPayment = (paymentInfo: CreditCard) => {

    if (localStorage.getItem('payments')) {
        const payments = getAllPaymentDetails();
        payments.push(paymentInfo);
        localStorage.setItem('payments', JSON.stringify(payments));
        return;
    }

    const paymentData = JSON.stringify([ paymentInfo ]);
    localStorage.setItem('payments', paymentData);
};

export const getAllPaymentDetails = (): Array<CreditCard> => {

    if (localStorage.getItem('payments')) {
        const paymentData = JSON.parse(localStorage.getItem('payments')!);
        return paymentData;
    }

    return [];
};
