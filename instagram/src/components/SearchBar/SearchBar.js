import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return ( 
        <div className="search">
            <input type="text"
            name="newSearch"
            onChange={props.onChange}
            value={props.search}
            placeholder="search..."
            />
        </div>
     );
}
 
export default SearchBar;