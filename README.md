# React Payment Managment


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features
* Add/Delete/Update credit card;
* Able to make a payment using following options:
  * Select saved card
  * Pay with new card
  * Apple pay ( Gets random user data from [jsonplaceholder](https://jsonplaceholder.typicode.com/))
  * Timeline page, where all processed payments are being displayed;

---
## Dependencies
* [TypeScript 4.1](https://www.typescriptlang.org/)
* [styled-components](https://styled-components.com/)
* [Chakra-UI](https://chakra-ui.com/)
* [React Icons](https://react-icons.github.io/react-icons/)

## Notes

1. Used custom created hook to manage forms which can be found in `/hooks` directory
2. To modify API endpoint for apple pay, consider to edit environment variable in `.env.development`

---
## Run application
### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
