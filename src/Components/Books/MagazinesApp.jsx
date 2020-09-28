// import React, { Component } from 'react';
import Magazines from "../Books/Magazines";
import BooksData from "../../Data/page2Books.json";
import "../../../src/index.css";

import React from 'react';
import ProductCategories from '../../Containers/Product-categories';
//import Products from './components/Products';
//import SortingButton from './components/SortingButton';
//import data from "./data.json";
import Pagination from "../../Containers/Pagination";
import AddProductPopup from "../../Popups/AddProductPopup";
import AddProduct from '../../Containers/AddProduct';
import Filter from "../Filter"

class App extends React.Component {
 constructor(){
   super();
   this.state = {
     products:BooksData.magazines,  
     size:"",
     sort:"",
   } 
 }

 sortProducts = (event) => {
  console.log("sortProducts" + event.target.value);
  const sort = event.target.value
  this.setState((state) => ({
    sort: sort,
    products: this.state.products.slice().sort((a,b) => (
      sort === "Low-To-High" ? ((a.price > b.price) ? 1 : -1) : 
      sort === "default" ? ((a.price = b.price) ? 1 : -1) :
      sort === "High-To-Low" ? ((a.price < b.price) ? 1 : -1) :""
    ))
  }))
  
}
filterProducts = (event) => {
console.log("filterProducts" + event.target.value)

if(event.target.value === ""){
  this.setState({size:event.target.value,product:BooksData.products})
}else{
this.setState({
  size:event.target.value,
  products:this.state.products.filter((product) => product.availableSizes.indexOf(event.target.value) >= 0)
})
}
}
 
 render(){
 return (
   <div className="grid-container">
     <header>
       <a href = "#">React Shopping Cart </a>
    </header>
     <main>
       PRODUCTS
      <AddProduct 
      productPopupShow = {this.onAddProductPopupShow}
      />
       <div>
         <ProductCategories/>
         <AddProductPopup 
         open = {this.state.addProductPopupOpen}
         onClose = {this.onAddProductClose}  
         />
       </div>
           
      <div className = "content" style = {{marginLeft:"15em",marginRight:"7em"}}>
        <div className = 'main' >
        <Filter
           size = {this.state.size}
           sort = {this.state.sort}
           filterProducts = {this.filterProducts}
           sortProducts = {this.sortProducts}
           />

          <Magazines magazines = {this.state.products} />

        </div>
      </div>
      <div>
      <Pagination/>
      </div>
     </main>
    
     <footer>
       All right is reserved
     </footer>
 
   </div>
 );
}

onAddProductPopupShow = () => {
 this.setState({
   addProductPopupOpen:true
 })
}
onAddProductClose = () => {
 this.setState({addProductPopupOpen:false})
}
}

export default App;
