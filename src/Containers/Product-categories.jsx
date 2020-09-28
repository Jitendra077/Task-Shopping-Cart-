import React, { Component } from 'react';
import "../index.css";

export default class ProductCategories extends Component {
    render() {
        return (
            <div>
                <p id = "category">CATEGORIES</p>
                <div id =  "cat-list">
                    <a href = "/"> Books </a>
                    <br/><hr/>
                    <a href = "/toys1"> Kid Toys </a>
                    <br/><hr/>
                    <a href = "/shoes"> men shoes </a>
                </div>
                <div id = "filterByPrice">
                    <p>FILTER BY PRICE</p>
                </div>

                <div class="slider-price d-flex align-items-center my-4">
                <span class="font-weight-normal small text-muted mr-2">$0</span>
                 <form class="multi-range-field w-100 mb-1">
                   <input id="multi" class="multi-range" type="range" />
                 </form>
                     <span class="font-weight-normal small text-muted ml-1"id ="max-range">$100</span>
             </div>
                <div>

                <ul class="rating">
  <li>
    <a href="#!">
      <i class="fas fa-star fa-sm text-primary">*</i>
    </a>
  </li>
  <li>
    <a href="#!">
      <i class="fas fa-star fa-sm text-primary">*</i>
    </a>
  </li>
  <li>
    <a href="#!">
      <i class="fas fa-star fa-sm text-primary">*</i>
    </a>
  </li>
  <li>
    <a href="#!">
      <i class="fas fa-star fa-sm text-primary">*</i>
    </a>
  </li>
  <li>
    <a href="#!">
      <i class="far fa-star fa-sm text-primary">*</i>
    </a>
  </li>
</ul>
                </div>
                
            </div>
        )
    }
}
