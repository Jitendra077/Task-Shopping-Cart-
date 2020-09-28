import React from 'react';
import ProductCategories from '../../Containers/Product-categories';
import Books from './Books';
//import SortingButton from './components/SortingButton';
import data from "../../Data/page1Books.json";
import Pagination from  "../../Containers/Pagination";
import AddProductPopup from "../../Popups/AddProductPopup";
import AddProduct from '../../Containers/AddProduct';
import Filter from "../Filter"

 class BookApp extends React.Component {
  constructor(){
    super();
    this.state = {
      products:data.products,
      size:"",
      sort:"",
      addProductPopupOpen:false,
     
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
      this.setState({size:event.target.value,product:data.products})
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
            
       <div className = "content">
         <div className = 'main'>
           <Filter
           size = {this.state.size}
           sort = {this.state.sort}
           filterProducts = {this.filterProducts}
           sortProducts = {this.sortProducts}
           />
          
           <Books products = {this.state.products} />

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

export default BookApp;
