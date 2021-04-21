import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import CardsManager from './components/Cards/CardManager.tsx';
import Timeline from './components/Timeline/Timeline.tsx';
import NavBar from './components/Nav/Nav';

export default function Routes() {

    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/checkout" component={App} />
                <Route path="/timeline" component={Timeline} />
                <Route path="/cards" component={CardsManager} />
            </Switch>
        </BrowserRouter>
    )
}