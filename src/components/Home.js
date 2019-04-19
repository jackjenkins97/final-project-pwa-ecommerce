import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
        
    <HomeWrapper>
        {/* Top 1 by 2 Grid Promo */}
        <div class="container">
            <div class="row">
                <div class="col-md">
                    <div class="row">
                    <Link to='/products'>
                        <div class="img-container">
                            <img src={require('../img/home-promos/Veg-promo.jpg')} class=" d-none d-md-block p-1" alt="Organic Fruit and Veg"/>
                            <div class="bottom-center d-none d-md-block p-1">Organic Fruit and Veg</div>
                            <img src={require('../img/home-promos/Veg-promo_m.jpg')} class="img-m d-sm-block d-md-none p-1" alt="Organic Fruit and Veg"/>
                            <div class="mobile-text d-sm-block d-md-none p-1">Organic Fruit and Veg</div>
                        </div>
                    </Link>
                    </div>
                </div>
                <div class="col-md">
                    <div class="row">
                    <Link to='/products'>
                        <div class="img-container">
                            <img src={require('../img/home-promos/Bakery-promo.jpg')} class="d-none d-md-block p-1" alt="Fresh Baked Goods"/>
                            <div class="bottom-left d-none d-md-block p-1">Fresh<br />Baked Goods</div>
                            <img src={require('../img/home-promos/Bakery-promo_m.jpg')} class="img-m d-sm-block d-md-none p-1" alt="Fresh Baked Goods"/>
                            <div class="mobile-text d-sm-block d-md-none p-1">Fresh Baked Goods</div>
                        </div>
                    </Link>
                    </div>
                    <div class="row">
                    <Link to='/products'>
                        <div class="img-container">
                            <img src={require('../img/home-promos/Drinks-promo.jpg')} class="d-none d-md-block p-1" alt="2 for 1 on Selected Drinks"/>
                            <div class="bottom-right d-none d-md-block p-1">2 for 1 on<br />Selected Drinks</div>
                            <img src={require('../img/home-promos/Drinks-promo_m.jpg')} class="img-m d-sm-block d-md-none p-1" alt="2 for 1 on Selected Drinks"/>
                            <div class="mobile-text d-sm-block d-md-none p-1">2 for 1 on Selected Drinks</div>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* Wide Banner Promo */}
        <div class="container">
            <div class="row">
            <Link to='/products'>
                <div class="img-container">
                <img src={require('../img/home-promos/Frozen-promo.jpg')} class=" d-none d-md-block p-1" alt="Massive Frozen Food Selection"/>
                <div class="text-dark bottom-right d-none d-md-block p-1">Massive Frozen<br />Food Selection</div>
                <img src={require('../img/home-promos/Frozen-promo_m.jpg')} class="img-m d-sm-block d-md-none p-1" alt="Massive Frozen Food Selection"/>
                <div class="mobile-text d-sm-block d-md-none p-1">Massive Frozen Food Selection</div>
                </div>
            </Link>
            </div>
        </div>
        {/* 4 by 1 Grid Promo */}
        <div class="container">
            <div class="row">
                <div class="col-md">
                    <div class="row">
                    <Link to='/products'>
                        <div class="img-container">
                        <img src={require('../img/home-promos/Tin-promo.jpg')} class="d-none d-md-block p-1" alt="Tinned Food"/>
                        <div class="bottom-center d-none d-md-block p-1">Tinned</div>
                        <img src={require('../img/home-promos/Tin-promo_m.jpg')} class="img-m d-sm-block d-md-none p-1" alt="Tinned Food"/>
                        <div class="mobile-text d-sm-block d-md-none p-1">Tinned Food</div>
                        </div>
                    </Link>
                    </div>
                </div>
                <div class="col-md">
                    <div class="row">
                    <Link to='/products'>
                        <div class="img-container">
                        <img src={require('../img/home-promos/Household-promo.jpg')} class="d-none d-md-block p-1" alt="Household Goods"/>
                        <div class="bottom-center d-none d-md-block p-1">Household</div>
                        <img src={require('../img/home-promos/Household-promo_m.jpg')} class="img-m d-sm-block d-md-none p-1" alt="Household Goods"/>
                        <div class="mobile-text d-sm-block d-md-none p-1">Household Goods</div>
                        </div>
                    </Link>
                    </div>
                </div>
                <div class="col-md">
                    <div class="row">
                    <Link to='/products'>
                        <div class="img-container">
                        <img src={require('../img/home-promos/Choc-promo.jpg')} class="d-none d-md-block p-1" alt="Sweet Treats"/>
                        <div class="text-dark bottom-center d-none d-md-block p-1">Sweets</div>
                        <img src={require('../img/home-promos/Choc-promo_m.jpg')} class="img-m d-sm-block d-md-none p-1" alt="Sweet Treats"/>
                        <div class="mobile-text d-sm-block d-md-none p-1">Sweet Treats</div>
                        </div>
                    </Link>
                    </div>
                </div>
                <div class="col-md">
                    <div class="row">
                    <Link to='/products'>
                        <div class="img-container">
                        <img src={require('../img/home-promos/Breakfast-promo.jpg')} class="d-none d-md-block p-1" alt="Breakfast"/>
                        <div class="text-dark bottom-center d-none d-md-block p-1">Breakfast</div>
                        <img src={require('../img/home-promos/Breakfast-promo_m.jpg')} class="img-m d-sm-block d-md-none p-1" alt="Breakfast"/>
                        <div class="mobile-text d-sm-block d-md-none p-1">Breakfast</div>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </HomeWrapper>
    )
  }
}

const HomeWrapper = styled.div`
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

.bottom-center {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .bottom-left {
    position: absolute;
    bottom: 30%;
    left: 16px;
    text-align: left;
  }
  .bottom-right {
    position: absolute;
    bottom: 30%;
    right: 16px;
    text-align: right;
  }
  .text-dark {
    color: #272727;
  }
  .mobile-text {
    color: #1F1F1F;
    font-weight: normal;
    padding-bottom: 1em !important;
  }
`

