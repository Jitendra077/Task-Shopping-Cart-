import React, { Component } from 'react';
import Fade from "react-reveal/Shake";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import {Input, Button } from "reactstrap";

export default class Magazines extends Component {
    state = {
        product:null
    }

    openModal  = (product) => {
            this.setState({product})
    }
    closeModal = () => {
        this.setState({product:null})
    }
    render() {
        const {product} = this.state
        return (
            <div>
              <Fade>  
                <ul className = "products">
                    {this.props.magazines.map( (product) => (
                        <li key = {product._id}>
                            <div className = "product">
                                <a href = "#"onClick = {() => this.openModal(product)}>
                                    <img src = {product.image} alt = "product"/>
                                    <p className = "product-title">
                                        {product.title}
                                    </p>
                                </a>
                                <div className = "product-price">
                                    {product.price}
                                </div>
                            </div>
                        </li>
                    )) }
                </ul>
                </Fade>
                {
                    product && <Modal isOpen = {true} onRequestClose = {this.closeModal} className = "modal">
                        <Zoom>
                            <button className = "close-modal" onClick = {this.closeModal}>X</button>
                            <div className = "product-details">
                                    <img src = {product.image} alt = {product.title} />
                            </div>
                            <div className = "product-details-description">
                                    <strong>{product.title} </strong>
                                    {product.price}
                            </div>
                            <div className = "edit-form">
                                 <div className = "imageForm"> 
                                    <label> Product category:  </label> 
                                     <Input type = "text"id = "Input" /><br/>
                                      Product Title: 
                                     <Input type = "text" placeholder = "Enter Product Title"id = "Input"/><br/>
                                     <label> Price {""} ($) </label>  
                                      <Input type = "number" placeholder = "Enter Price"id = "Input" />
                                 </div>
                                 <br/>
                                      <h3>Top Products</h3>
                                      <h4>Upload Product Image</h4>
                                      <Button style = {{backgroundColor:"darkgreen",color:"white"}}>Upload</Button>
                                    </div>
                                    <button className = "button-primary" onClick = {() => {
                                        this.closeModal();
                                    }}> CLOSE</button>
                           
                        </Zoom>
                    </Modal>
                }
            </div>
        )
    }
}
