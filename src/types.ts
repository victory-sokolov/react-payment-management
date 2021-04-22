
export interface CreditCard {
    paymentMethod?: string;
    name: string;
    cardNumber: string;
    cvc: string;
    expiryDate: Date;
}

export enum FormActionType {
    AddNewCard,
    MakeAPayment
}

export enum PaymentOptions {
    CreditCard,
    ApplePay,
    SavedCards
}