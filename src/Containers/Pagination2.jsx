import React, { Component } from 'react'
import "../index.css";

export default class Pagination2 extends Component {
    render() {
        return (
            <div id = "page">
                <nav aria-label="Page navigation example">
                 <ul class="pagination">
                     
                     <li class="page-item"><a href = "/toys1">Previous</a></li>
                     <li class="page-item"><a  href = "/toys1">1</a></li>
                     <li class="page-item"><a  href = "/toys2">2</a></li>
                    <li class="page-item"><a   href = "/toys2">Next</a></li> 
                 </ul>
                </nav>
            </div>
        )
    }
}
