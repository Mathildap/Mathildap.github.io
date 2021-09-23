import React from 'react';
import Portfolio from './Portfolio';
import Start from './Start';
import NotFound from './NotFound';
import Contact from './Contact';
import Experience from './Experience';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

function Menu() {
    return (
        <Router>
            <div className='navbar'>
                <label for='menu-toggle'>
                    <span className='burger'></span>
                    <span className='burger'></span>
                    <span className='burger'></span>
                </label>
            </div>
            <input type='checkbox' id='menu-toggle' />

            <ul className='main-nav'>
                <Link to='/'>
                    <li className='main-nav-li' id='navStart'>
                        Start
                    </li>
                </Link>
                <Link to='/portfolio'>
                    <li className='main-nav-li' id='navPortfolio'>
                        Portfolio
                    </li>
                </Link>
                <Link to='/erfarenhet'>
                    <li className='main-nav-li' id='navExperience'>
                        Erfarenhet
                    </li>
                </Link>
                <Link to='/kontakt'>
                    <li className='main-nav-li' id='navContact'>
                        Kontakt
                    </li>
                </Link>
            </ul>
            <Switch>
                <Route exact path='/' component={Start} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/erfarenhet' component={Experience} />
                <Route path='/kontakt' component={Contact} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Router>
    );
}

export default Menu;
