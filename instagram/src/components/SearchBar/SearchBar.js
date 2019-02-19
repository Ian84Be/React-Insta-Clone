import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {
    return (

        <header className="nav">
            <i className="fab fa-instagram fa-2x"></i>
            <h1>INSTAGRANG</h1>

            <input type="text"
                name="newSearch"
                onChange={props.onChange}
                placeholder="search..."
            required/>

            <div className="nav-icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <strong><i className="far fa-user"></i>{props.myName}</strong>
            </div>
            
        </header>
    );
}

export default SearchBar;