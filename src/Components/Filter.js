import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className = "filter">
               <div className = "filter-result">{""} </div>
               <div className = "filter-sort">Sort {" "} 
               <select value = {this.props.sort} onChange = {this.props.sortProducts}>
                   <option>Default</option>
                   <option>Low-To-High</option>
                   <option>High-To-Low</option>
              </select> 
               </div>
               <div className = "filter-size">Filter {" "} 
               <select value = {this.props.size} onChange = {this.props.filterProducts}>
                   <option  value = "ALL">ALL</option>
                   <option  value = "XS">XS</option>
                   <option  value = "S">S</option>
                   <option  value = "M">M</option>
                   <option  value = "L">L</option>
                   <option  value = "XL">XL</option>
                   <option  value = "XXL">XXL</option>
                   </select> </div>
            </div>
        )
    }
}
