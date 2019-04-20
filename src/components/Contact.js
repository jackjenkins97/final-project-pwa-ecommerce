import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import Title from './Title';

export default class Contact extends Component {
  render() {
    return (
        <Wrapper>
            <div className="py-5">
                <div className="container">
                    <Title name="Customer" title=" Service" />
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="img-container">
                <img src={require('../img/Contact-header.jpg')} class=" d-none d-md-block p-1" alt="Handshake photo"/>
                <img src={require('../img/Contact-header_m.jpg')} class="img-m d-sm-block d-md-none p-1" alt="Handshake photo"/>
                </div>
            </div>
        </div>
      <br />
        <div class="container">
          <div class="text-wrapper">
            <h5>Want to get in contact with us with a question or regarding an issue?</h5>
            <p>Please don't hesitate to use one of the following methods of getting in touch:</p>
            <div class="row">
              <div class="col-md">
                <div class="inner-text-wrapper">
                  <p><b>Email:</b><br/><a href="mailto:contact@grocerystore.co.uk">contact@grocerystore.co.uk</a></p>
                  <p><b>Phone:</b><br/><a href="tel:081234 56789">081234 56789</a></p>
                  <p><b>Address:</b><br/>Grocery Store<br/>Customer Service Centre<br/>London<br />SE10 9LS</p>
                </div>
              </div>
              <div class="col-md">
                  <div class="inner-text-wrapper">
                    <p><b>Instagram:</b><br/><a href="https://instagram.com">@GroceryStore</a></p>
                    <p><b>Twitter:</b><br/><a href="https://twitter.com">@GroceryStore_Support</a></p>
                    <p><b>Facebook:</b><br/><a href="https://facebook.com">Grocery Store</a></p>
                  </div>
              </div>
            </div> 
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
}
`