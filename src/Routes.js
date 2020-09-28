import React from 'react';
import {BrowserRouter as Router , Route } from "react-router-dom";
import Books from "./Components/FirstPage/BooksApp";
import Magazines from "./Components/Books/MagazinesApp";
import Toys from "../src/Components/Toys/ToysApp";
import Toys2 from "../src/Components/Toys2/Toys2App";
import Shoes from "../src/Components/Shoes/ShoesApp";

const Routes = () => {
    return (
        <div>
            
            <Router>
           
                <Route path = "/"   exact component = {Books} />
                <Route path = "/magazines"  exact component = {Magazines} />
                <Route path = "/toys1" component = {Toys} />
                <Route path = "/toys2" component = {Toys2} />
                <Route path = "/shoes" component = {Shoes} />
            
            </Router>
           
            
        </div>
    )
}

export default Routes
