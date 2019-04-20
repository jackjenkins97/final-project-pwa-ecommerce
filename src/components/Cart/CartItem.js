import React from 'react'
import styled from 'styled-components';

export default function CartItem({item,value}) {
const{id,title,img,price,total,count} = item;
const {increment,decrement,removeItem} = value;
  return (
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
            <img src={img} style={{width:'5rem',height:'5rem',}} className="img-fluid" alt="product"/>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Product : </span>
            {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Price : </span>
            £{price.toFixed(2)}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-flex justify-content-center">
            <div>
                <span className="btn s mx-1" onClick={()=>decrement(id)}><b>-</b>
                </span>
                <span className="btn btn-black mx-1">{count}</span>
                <span className="btn btn-black mx-1" onClick={()=>increment(id)}><b>+</b>
                </span>
            </div>
            </div>
        </div>
        {/* */}
        <div className="col-10 mx-auto col-lg-2 d-none d-lg-block">
            <RemoveButton onClick={()=>removeItem(id)}>
            <p>Remove Item</p>
            </RemoveButton>
        </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>Item Total: £{total.toFixed(2)}</strong>
            </div>
      </div>
  )
}

    const RemoveButton = styled.div `
    p {
        color: red;
    }
    `
