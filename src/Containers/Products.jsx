import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className = "products">
                    {this.props.products.map( (product) => (
                        <li key = {product._id}>
                            <div className = "product">
                                <a href = "#">
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
            </div>
        )
    }
}
