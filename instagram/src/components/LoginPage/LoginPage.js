import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
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

    h1 {
        font-size:2rem;
        margin:${props => props.theme.margin};
        text-shadow: ${props => props.theme.textShadow};
    }

    i {
        margin: ${props => props.theme.margin};
    }
`;

const Input = styled.input`
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

const Button = styled.button`
    background: ${props => props.theme.background};
    border:1px solid ${props => props.theme.color};
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.color};
    font-size:0.75rem;
    margin:12px 8px;
    outline:none;
    padding:6px;
    width:100px;
    &:hover {
        background:${props => props.theme.color};
        color:${props => props.theme.background};
        cursor: pointer;
    }
`;

const LoginPage = (props) => {
    return (
        <Wrapper>

            <i className="fab fa-instagram fa-2x"></i>
            <h1>INSTAGRANG</h1>

            <Input
                className="far"
                name="myName"
                onChange={props.onChange}
                placeholder="&#xf007; username"
                type="text"
                value={props.value}
                required />
            <Button onClick={props.logIn}>login</Button>
        </Wrapper>
    );
}

export default LoginPage;