import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {
    return (

        <header className="nav">
            <i className="fab fa-instagram fa-2x"></i>
            <h1>INSTAGRANG</h1>

            <input
                className="fa"
                name="newSearch"
                onChange={props.onChange}
                placeholder="&#xf002; search"
                type="text"
            required/>

            <div className="nav-icons">
                {/* <i className="far fa-compass"></i>
                <i className="far fa-heart"></i> */}
                <div className="logout" onClick={props.logOut}>
                    <i className="far fa-user">{props.myName}</i>
                    <small>(logout)</small>
                </div>
            </div>
            
        </header>
    );
}

export default SearchBar;