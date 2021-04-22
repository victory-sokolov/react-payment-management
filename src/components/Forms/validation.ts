
type InputValues = { [ key: string ]: string };

const validateForm = (values: any): InputValues  => {

    const errors: InputValues = {};

    if (!values.cardNumber || values.cardNumber.replace(' ', '').length < 16) {
        errors.cardNumber = (!values.cardNumber) ? 'Card number cannot be blank' : 'Card number must be 16 characters long';
    }

    if (!values.name) {
        errors.name = 'Card holder cannot be blank';
    }

    if (!values.cvc || values.cvc.length < 3) {
        errors.cvc = (values.cvc) ? 'CVC cannot be blank' : 'CVC must be 3 digits long';
    }

    if (!values.expiryDate) {
        errors.expiryDate = (!values.expiryDate) ? 'Expiry date cannot be blank' : '';
    }

    return errors;
};

export default validateForm;