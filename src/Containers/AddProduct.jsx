import React, { Component } from 'react';
import "../index.css";

const AddProduct = (props) => {
        return (
            <div>
                 <button id = "btn1" onClick = {(e) => {props.productPopupShow()} }>ADD PRODUCT</button>
            </div>
        )
    }
export default AddProduct
  