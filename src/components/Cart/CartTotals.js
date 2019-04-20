import React from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';
import styled from 'styled-components';
export default function CartTotals({value,history}) {
    const{cartSubTotal,cartTax,cartTotal,clearCart} = value;
    return (<React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-md-auto col-sm-8 text-capitilized text-right">
                
                
                <h5>
                    <span className="text-title">
                    sub total:</span>
                    <strong>£ {cartSubTotal.toFixed(2)}</strong>
                </h5>
                <h5>
                    <span className="text-title">
                    tax:</span>
                    <strong>£ {cartTax.toFixed(2)}</strong>
                </h5>
                <h5>
                    <span className="text-title">
                    total:</span>
                    <strong>£ {cartTotal.toFixed(2)}</strong>
                </h5>
                <br />
                <PayPalButton 
                total={cartTotal} clearCart={clearCart} history={history}
                />
                <br />
                <Link to="/">
                    <RemoveButton>
                    <p class onClick={()=>clearCart()}>
                        Clear Basket
                    </p>
                    </RemoveButton>
                </Link>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}

const RemoveButton = styled.div `
p {
    color: red;
}
`