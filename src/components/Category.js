import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';
import { storeProducts } from '../data';

export default class Category extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Baked" title=" products" />
            <div className="row">
            <ProductConsumer>
              {value => {
                return value.products.map( product =>{
                  return <Product key={product.id} product={product} handleDetail={value}/>;
                })
              }}
            </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
      //<Product/>
    )
  }
}