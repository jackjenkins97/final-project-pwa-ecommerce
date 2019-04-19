import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import Title from './Title';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
        <Wrapper>
            <div className="py-5">
                <div className="container">
                    <Title name="About" title=" Us" />
                    <div className="row">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="img-container">
                <img src={require('../img/About-header.jpg')} class=" d-none d-md-block p-1" alt="Massive Frozen Food Selection"/>
                <img src={require('../img/About-header_m.jpg')} class="img-m d-sm-block d-md-none p-1" alt="Massive Frozen Food Selection"/>
                </div>
            </div>
        </div>
        <div class="text-wrapper d-md-block p-1">
          <div class="inner-text-wrapper">
            <p>Grocery Store offers the highest quality food and home products at a low price. We source all our products from organic and fair trade sources making sure to be paying the local farmers a fair price for their produce while also offering the best possible prices to you our customers. </p>
            </div>
        </div> 
        <div class="container">
            <div class="row">
                <div class="img-container">
                <img src={require('../img/About-mid.jpg')} class=" d-none d-md-block p-1" alt="Massive Frozen Food Selection"/>
                <img src={require('../img/About-mid_m.jpg')} class="img-m d-sm-block d-md-none p-1" alt="Massive Frozen Food Selection"/>
                </div>
            </div>
        </div>
            <div class="text-wrapper d-md-block p-1">
          <div class="inner-text-wrapper">
            <p>Having no physical stores and just operating online allows us to save money and pass those savings on to you with the best possible prices we can offer on all our products. If you spend £40 you get free delivery and with our state of the art mobile website experience you can shop offline and purchase later.</p>
            <Link to='/products'><p class="link">Tap to browse our fantastic range of products</p></Link>
          </div>
        </div>
        </Wrapper>
    )
  }
}

const Wrapper = styled.div`
img {
  width: 100%;
}
.img-container{
position: relative;
text-align: center;
color: white;
font-weight: bold;
font-size: 1.2em;
}

.img-m{
   padding: 0 !important;
}
.text-wrapper{
  max-width: 1140px;
  margin: 0 auto;
  
}
.inner-text-wrapper{
  margin-left: 2em;
  margin-right: 2em;
}
.link{
  font-weight: bold;
  color: var(--mainGreen);
}
`