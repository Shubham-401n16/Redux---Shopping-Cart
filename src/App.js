import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import rtkStore from './rtk-store'
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.scss';
import Products from './components/Products';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';
import SimpleCart from './components/SimpleCart';
import Cart from './components/Cart';
import HomePage from './components/HomePage';
import Details from './components/Details';



// Connecting our app to our global state redux store
// xx Wrap the whole app in a "store provider"
// -- Pick individual components to "connect" and become "consumers"

function App() {
    return (
        <Provider store={rtkStore}>
            <div className='App'>
            <BrowserRouter>
                <Header />
                <div className ='main-div'>
                <Route exact path='/'>
                            <HomePage />
                        </Route>
                        <Route path='/product/:id' component={Details}/>
                        <Route path='/cart' component={Cart} />
               
                </div>
                <Footer />
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
