import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    background-color: #ccc;
    border: none;
    color: white;
    width: 5%;
    padding: 10px 16px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
`

class Button extends Component {
    render() { 
        return ( <ButtonWrapper onClick={this.props.handleUpdateClick}>{this.props.text}</ButtonWrapper> );
    }
}
 
export default Button;