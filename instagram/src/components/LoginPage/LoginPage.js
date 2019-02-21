import React from 'react';
import './LoginPage.scss';

const LoginPage = (props) => {
    return (
        <header className="nav">
            <i className="fab fa-instagram fa-2x"></i>
            <h1>INSTAGRANG</h1>

            <input
                className="far"
                name="myName"
                onChange={props.onChange}
                placeholder="&#xf007; username"
                type="text"
                value={props.value}
            required/>
            <button className="login-button" onClick={props.logIn}>login</button>
            
        </header>
    );
}
 
export default LoginPage;