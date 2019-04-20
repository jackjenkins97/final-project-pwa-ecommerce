import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import Title from './Title';
import { Link } from 'react-router-dom';

export default class Incomplete extends Component {
  render() {
    return (
        <Wrapper>
            <div className="py-5">
                <div className="container">
                    <Title name="Order" titleRed=" Error" />
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="img-container">
                <img src={require('../img/Incomplete-header.jpg')} class=" d-none d-md-block p-1" alt="Farmer throwing grain"/>
                <img src={require('../img/Incomplete-header_m.jpg')} class="img-m d-sm-block d-md-none p-1" alt="Farmer throwing grain"/>
                </div>
            </div>
        </div>
        <div class="text-wrapper d-md-block p-1">
          <div class="inner-text-wrapper">
            <p>Oops! Something's gone wrong with your order, go to your basket and try again!</p>
            <Link to='/cart'><p class="link">Tap to return to your basket!</p></Link>
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