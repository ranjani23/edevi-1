import React, {Component} from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import LandingPageModule from './LandingPageModule';
import ShoppingModule from './shop/ShoppingModule';
import DonateModule from './donate/DonateModule';
import AboutModule from './about/AboutModule'; 
import ShoppingCartView from './shop/ShoppingCartView';
import CheckoutCartView from './shop/CheckoutCartView';
import GlitchScreen from './temple/GlitchScreen';
import Faq from './faq/Faq';
import PledgeScreen from './temple/PledgeScreen';
import CardDeck from './DeckOfCards/CardDeck';
import GetInTouch from './getInTouch/GetInTouch';
import TermsAndConditions from './about/TermsAndConditions';


class Routes extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        // TOOD: Block Pledge route if user is not validated
        return (
                <Switch>
                    <Route exact path='/' component={LandingPageModule}/>
                    <Route exact path='/Glitch' component={GlitchScreen}/>
                    <Route exact path='/DeckOfCards' component={CardDeck}/>
                    <Route exact path='/Glitch/Pledge' component={PledgeScreen}/>
                    <Route exact path='/temple' component={LandingPageModule}/>
                    <Route exact path='/temple/Glitch' component={GlitchScreen}/>
                    <Route exact path='/shop' component={ShoppingModule}/>
                    <Route exact path='/shop/Checkout' component={CheckoutCartView}/>
                    <Route exact path='/shop/Temple' component={ShoppingCartView}/>
                    <Route exact path='/shop/Puja' component={ShoppingCartView}/>
                    <Route exact path='/shop/Fasting' component={ShoppingCartView}/>
                    <Route exact path='/shop/Other' component={ShoppingCartView}/>

                    <Route exact path='/donate' component={DonateModule}/>
                    <Route exact path='/about' component={AboutModule}/>
                    <Route exact path='/about/TermsAndConditions' component={TermsAndConditions}/>
                    <Route exact path='/faq' component={Faq}/>
                    <Route exact path='/GetInTouch' component={GetInTouch}/>

                </Switch>
          );
    }
}

export default Routes;