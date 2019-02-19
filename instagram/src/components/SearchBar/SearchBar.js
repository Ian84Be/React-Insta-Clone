import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return ( 
        
        <header className="nav">
        <i className="fab fa-instagram fa-2x"></i>
        <h1>INSTAGRANG</h1>

            <input type="text"
            name="newSearch"
            onChange={props.onChange}
            value={props.search}
            placeholder="search..."
            />

        <div className="nav-icons">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
        </div>
        </header>
     );
}
 
export default SearchBar;