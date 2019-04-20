import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import Title from './Title';
import { Link } from 'react-router-dom';

export default class Complete extends Component {
  render() {
    return (
        <Wrapper>
            <div className="py-5">
                <div className="container">
                    <Title name="Order" title=" Complete" />
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="img-container">
                <img src={require('../img/Complete-header.jpg')} class=" d-none d-md-block p-1" alt="Happy business man on phone"/>
                <img src={require('../img/Complete-header_m.jpg')} class="img-m d-sm-block d-md-none p-1" alt="Happy business man on phone"/>
                </div>
            </div>
        </div>
        <div class="text-wrapper d-md-block p-1">
          <div class="inner-text-wrapper">
            <p>Congratulations! Your order is complete and work has started to get it to your front door as soon as possible. Check your email for further confirmation.</p>
            <Link to='/'><p class="link">Tap to return to the homepage</p></Link>
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
a{
  color: var(--mainGreen);
  font-weight: bold;
}
`