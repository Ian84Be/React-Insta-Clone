import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.header`
    align-items:center;
    background: ${props => props.theme.background};
    border: ${props => props.theme.elementBorder};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    color: ${props => props.theme.color};
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: ${props => props.theme.maxWidth};
    margin: ${props => props.theme.margin};
    width:100%;

    i {
        margin: ${props => props.theme.margin};
    }
`;

const NavH1 = styled.h1`
    font-size:2rem;
    margin:${props => props.theme.margin};
    text-shadow: ${props => props.theme.textShadow};
`;

const NavInput = styled.input`
    border:1px solid ${props => props.theme.color};
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.background};
    font-size:0.75rem;
    margin:${props => props.theme.margin};
    outline:none;
    padding:6px 4px;
    &:hover {
      background: ${props => props.theme.color};
      cursor: pointer;
    }
`;

const NavRight = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size:0.75rem;
    justify-content: center;
    margin:3px;
    padding:3px;
    &:hover {
        color: ${props => props.theme.icoHover};
        cursor: pointer;
    }
    
    i {
        padding:0;
        margin:0;
    }

    small {
      font-size:0.25rem;
    }
`;

// NAVBAR START

const NavBar = (props) => {
    return (

        <NavWrapper>

            <i className="fab fa-instagram fa-2x"></i>
            <NavH1>INSTAGRANG</NavH1>

            <NavInput
                className="fa"
                name="newSearch"
                onChange={props.onChange}
                placeholder="&#xf002; search"
                type="text"
                required />

            <NavRight>
                {/* <i className="far fa-compass"></i>
                <i className="far fa-heart"></i> */}
                    <i className="far fa-user">{props.myName}</i>
                    <small onClick={props.logOut}>(logout)</small>
            </NavRight>

        </NavWrapper>
    );
}

NavBar.defaultProps = {
    theme: {
        background:'magenta'
    }
}

export default NavBar;