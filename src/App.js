import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MetaTags from './components/meta-tags';
import Navbar from './components/Navbar';
import Navpromo from './components/Nav-Promo';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Category from './components/Category';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Privacy from './components/Privacy';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="content">
        <MetaTags />
        <Navbar />
        <Navpromo />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/category" component={Category} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
          <Route component={Default} />
        </Switch>
        </div>
        <Footer />
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
