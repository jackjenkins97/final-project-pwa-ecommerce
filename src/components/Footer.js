import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
    <FooterWrapper>
        <div class="container">
            <div class="inner-container">
            <div class="row">
                <div class="col-sm">
                    <Link to='/about'>
                    <p class="p5">About Us</p>
                    </Link>
                </div>
                <div class="col-sm">
                    <Link to='/contact'>
                    <p class="p5">Customer Service</p>
                    </Link>
                </div>
                <div class="col-sm">
                    <Link to='/privacy'>
                    <p class="p5">Privacy Notice</p>
                    </Link>
                </div>
            </div>
            </div>
        </div>
        <Copyright>
            <div>
                <p><strong>© Grocery Store</strong> 2019 All Rights Reserved</p>
            </div>
        </Copyright>
    </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
    width: 100%;
    background-color: #EBEBEB;
.p5 {
    margin: 1em;
}
.inner-container {
    max-width: 900px;
    margin: 0 auto;
}
a {
    color: #393939;
    font-weight: bold;
    text-align: center;
}
`

const Copyright = styled.div`
    width: 100%;
    background-color: var(--mainGreen);
    color: var(--mainWhite);
    text-align: left;
div {
    margin: 0 auto;
    max-width: 1140px;
}
p {
    margin-bottom: 0em !important;
    padding-left: 1em;
    
}

    


    ` 