import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import { CheckoutForm } from './components/Checkout/Checkout';
import SavedCardsContainer from './components/SavedCards/SavedCardsContainer.tsx';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/checkout" component={App} />
                {/* <Route path="/timeline" component={} /> */}
                <Route path="/cards" component={SavedCardsContainer} />
            </Switch>
        </BrowserRouter>
    )
}