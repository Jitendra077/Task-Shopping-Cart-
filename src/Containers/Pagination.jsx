import React, { Component } from 'react'
import "../index.css";

export default class Pagination extends Component {
    render() {
        return (
            <div id = "page">
                <nav aria-label="Page navigation example">
                 <ul class="pagination">
                     
                     <li class="page-item"><a href = "/">Previous</a></li>
                     <li class="page-item"><a  href = "/">1</a></li>
                     <li class="page-item"><a  href = "/magazines">2</a></li>
                    <li class="page-item"><a   href = "/magazines">Next</a></li>
                    
                  
                 </ul>
                </nav>
            </div>
        )
    }
}
