import React, { Component } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.textarea`
    width: 50%;
    heigh: 10px;
    padding: 8px;
    margin: 15px 0;
    border: 1px solid #ccc;
    border-radius: 2px;
    text-align: center;
    font-size: calc(10px + 2vmin);
    line-height: 8px;
`

class Input extends Component {
    render() { 
        return ( <InputWrapper placeholder="URL" onChange={this.props.handleUpdateInput}/> );
    }
}
 
export default Input;