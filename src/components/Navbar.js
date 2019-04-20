import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import basket from '../shopping-cart.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
export default class Navbar extends Component {
    render () {
        return (
            <NavWrapper className="navbar navbar-expand-sm px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="Grocery Store Logo" className="navbar-brand"/>
                </Link>
                <Link to='/cart' className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <Basket src={basket} alt="Basket Icon" className="navbar-brand"/>Basket
                    </span>
                </ButtonContainer>
                </Link>
            </NavWrapper>
            );
    }
}

const NavWrapper = styled.nav`
background-color: var(--lightGrey);
max-width: 100%;
.nav-link{
    color:var(--mainDark)!important;
    font-size:1.3rem;
}
    
button{
    border: 0rem;
}
`

const Basket = styled.img`
fill: var(--mainGreen)!important;
max-width: 20px;
margin-left: 0rem;
`
