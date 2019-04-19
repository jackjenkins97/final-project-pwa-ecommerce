import React, { Component } from 'react';
import styled from 'styled-components';

export default class Navpromo extends Component {
    render () {
        return (
        <NavPromo>
            <p><strong>Free Delivery</strong> on orders over £40</p>
        </NavPromo>
        );
    }
    }

    const NavPromo = styled.nav`
    width: 100%;
    background-color: var(--mainGreen);
    color: var(--mainWhite);
    text-align: center;
    ` 