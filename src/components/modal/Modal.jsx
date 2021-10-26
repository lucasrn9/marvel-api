import React from 'react';
import styled from 'styled-components';
import reactDom from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({children,CloseModal})=>{
    
    const CloseModalBg = (e)=>{
    if(e.target.id==="modal"){
    CloseModal()
    }
    }
    
    return (
        reactDom.createPortal(
        <Background className="modal" id="modal" onClick={CloseModalBg}> 
        <Container className="container">
        <Button onClick={CloseModal}> X </Button>
        <Content className="content">
       {children}
        </Content>
        </Container>
        </Background>,document.getElementById('portal'))
        
    )
}

Modal.propTypes = {
    CloseModal: PropTypes.func.isRequired
}

export default Modal

const Background = styled.div`
width: 100%;
height 100%;
background-color: rgba(0,0,0,0.8);
display: flex;
justify-content: center;
position: fixed;
z-index: 10;
`

const Container = styled.div`
background-color: white;
width: 70%;
height: 250px;
position: absolute;
top: 200px;
border-radius: 8px;
`

const Button = styled.button`
position: absolute;
right:0;
border: none;
background-color: transparent;
font-weight: bold;
font-size: 16px;
cursor: pointer;
`

const Content = styled.div`
color:black;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Roboto', sans-serif;
padding: 16px 8px;
`