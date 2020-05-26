import React, { Component } from 'react';
import styled from 'styled-components';

import Input from '../components/Input'
import Button from '../components/Button'

const HomeWrapper = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    text-align: center;
`

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: "",
            clicked: false,
            pic: ''
        }
    }

    handleUpdateInput = (e) => {
        const input = e.target.value;
        this.setState({
            input: input
        })
    }

    handleUpdateClick = () => {
        if (this.state.clicked === true) {
            this.setState({
                pic: '',
                clicked: false,
            })
        }
        else {
            this.setState({
                clicked: true,
            })
            this.handleURLBlur()
        }
    }

    

    handleURLBlur = () => {
        const data = {url: this.state.input}
        fetch(`http://127.0.0.1:5000/url_to_blur?url=${encodeURIComponent(data.url)}`,{
            mode: 'no-cors',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                }
        })
        .then((data) => {
            console.log(data)
             })
    }
 
    render() { 
        if (this.state.clicked === false) {
            return ( 
                <HomeWrapper>
                    Digite a URL
                    <Input handleUpdateInput={this.handleUpdateInput}/>
                    <Button text={"Ir!"} handleUpdateClick={this.handleUpdateClick}/>
                </HomeWrapper>
                );
        }
        else {
            return (
                <HomeWrapper>
                    {this.state.pic}
                    <Button text={"Voltar!"} handleUpdateClick={this.handleUpdateClick}/>
                </HomeWrapper>
            )
        }
        
    }
}
 
export default Home;
